"use server";
import { convertAmount } from "@/lib/utils";
import { databases } from "@/lib/appwrite.config";
import { getCurrentUser } from "../auth/auth.actions";
import { ID, Query } from "node-appwrite";
import {
  UserInfoParams,
  UserTransactionParams,
  UserWalletParams,
} from "@/typings/database";
import { revalidatePath } from "next/cache";
import { sendMail } from "../mail/mail.action";

const {
  DATABASE_ID,
  USERS_ID,
  WALLETS_ID,
  ACCOUNT_INFO,
  DEPOSITS_ID,
  WITHDRAWALS_ID,
  SMTP_EMAIL,
} = process.env;

// Creating User Info Document in the DB
export async function createUserInfo(data: UserInfoParams) {
  try {
    await databases.createDocument(
      DATABASE_ID as string,
      USERS_ID as string,
      ID.unique(),
      {
        username: data.username,
        fullname: data.fullname,
        email: data.email,
        createdAt: data.createdAt,
        userId: data.userId,
        referralCode: data.referralCode,
        referredBy: data.referredBy,
      }
    );

    return { success: true };
  } catch (error: any) {
    console.log(`Failed to create user document in the db: ${error.message}`);
    return { success: false, msg: error.message };
  }
}

// Creating Wallets Document in the DB

export async function createWallets(data: UserWalletParams) {
  try {
    await databases.createDocument(
      DATABASE_ID as string,
      WALLETS_ID as string,
      ID.unique(),
      {
        userId: data.userId,
        bitcoinWallet: data.bitcoinWallet,
        ethereumWallet: data.ethereumWallet,
        dogeWallet: data.dogeWallet,
        litecoinWallet: data.litecoinWallet,
        tronWallet: data.tronWallet,
        shibaWallet: data.shibaWallet,
        usdtWallet: data.usdtWallet,
      }
    );

    return { success: true };
  } catch (error: any) {
    console.log(`Failed to create wallet document in the db: ${error.message}`);
    return { success: false, msg: error.message };
  }
}

// Creating Account Info Document in the DB
export async function createAccountInfo(userId: string) {
  try {
    await databases.createDocument(
      DATABASE_ID as string,
      ACCOUNT_INFO as string,
      ID.unique(),
      {
        userId,
        accountBalance: 0.0,
        activeDeposit: 0.0,
        earned: 0.0,
        invested: 0.0,
        withdrawn: 0.0,
      }
    );

    return { success: true };
  } catch (error: any) {
    console.log(
      `Failed to create Account Info Document in the db: ${error.message}`
    );
    return { success: false, msg: error.message };
  }
}

// Creating Deposits Document in the DB
export async function createDeposit(data: UserTransactionParams) {
  try {
    const user = await getCurrentUser();
    const { email: userId, name } = user;

    await databases.createDocument(
      DATABASE_ID as string,
      DEPOSITS_ID as string,
      ID.unique(),
      {
        userId,
        amount: Number(data.amount),
        method: data.method,
        status: "pending",
        // Update the Account info Plans later on in future.
        createdAt: new Date(),
      }
    );

    await sendMail({
      to: "joshuabamidele219@gmail.com",
      name: "Joshardals",
      subject: "Confirmation Of Deposit",
      body: `<p>${userId},  has deposited a sum of ${convertAmount(
        data.amount
      )} for the ${data.plan?.toUpperCase()} PLAN  using the ${data.method.toUpperCase()} payment method.</p>
      <p>Regards; Iris Investments</p>
      `,
    });

    await sendMail({
      to: userId,
      name: name,
      subject: "Processing Deposit",
      body: `<p>Your ${convertAmount(data.amount)} ${
        data.plan
      } PLAN deposit is being processed and is awaiting confirmation.
       It will be directly deposited into your account upon confirmation; please review your deposit history to ascertain the status.
       </p>
       <p>Regards; Iris Investment limited</p>
       `,
    });

    revalidatePath("/dashboard/my-deposits");
    return { success: true };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

// Creating Withdrawals Document in the DB.
export async function createWithdrawals(data: UserTransactionParams) {
  try {
    const user = await getCurrentUser();
    const { email: userId } = user;

    await databases.createDocument(
      DATABASE_ID as string,
      WITHDRAWALS_ID as string,
      ID.unique(),
      {
        userId,
        amount: Number(data.amount),
        method: data.method,
        status: "pending",
        // Update the Account info Plans later on in future.
        createdAt: new Date(),
      }
    );
    revalidatePath("/dashboard/my-withdrawals");
    return { success: true };
  } catch (error: any) {
    console.log(`Failed to create withdrawals: ${error.message}`);
    return { success: false, msg: error.message };
  }
}

// Fetch the Current User Info from the database

interface FetchUserInfoResponse {
  success: boolean;
  userInfo?: any;
  msg?: string;
  accountInfo?: any;
  walletInfo?: any;
  deposits?: any;
  withdrawals?: any;
}

export async function fetchCurrentUserInfo(): Promise<FetchUserInfoResponse> {
  try {
    const user = await getCurrentUser();
    const { email: userId } = user;

    const data = await databases.listDocuments(
      DATABASE_ID as string,
      USERS_ID as string,
      [Query.equal("userId", userId)]
    );

    return { success: true, userInfo: data.documents[0] };
  } catch (error: any) {
    console.error(
      `Failed to fetch User Info Document from the DB: ${error.message}`
    );
    return { success: false, msg: error.message };
  }
}

// Fetch the Current User Account Info from the database
export async function fetchCurrentUserAccountInfo(): Promise<FetchUserInfoResponse> {
  try {
    const user = await getCurrentUser();
    const { email: userId } = user;

    const data = await databases.listDocuments(
      DATABASE_ID as string,
      ACCOUNT_INFO as string,
      [Query.equal("userId", userId)]
    );

    return { success: true, accountInfo: data.documents[0] };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

// Fetch the Current User Wallet Info from the database
export async function fetchCurrentUserWalletInfo(): Promise<FetchUserInfoResponse> {
  try {
    const user = await getCurrentUser();
    const { email: userId } = user;

    const data = await databases.listDocuments(
      DATABASE_ID as string,
      WALLETS_ID as string,
      [Query.equal("userId", userId)]
    );

    return { success: true, walletInfo: data.documents[0] };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

// Fetch the Current User Deposits from the database
export async function fetchCurrentUserDeposits(): Promise<FetchUserInfoResponse> {
  try {
    const user = await getCurrentUser();
    const { email: userId } = user;

    const data = await databases.listDocuments(
      DATABASE_ID as string,
      DEPOSITS_ID as string,
      [Query.equal("userId", userId)]
    );

    return { success: true, deposits: data.documents };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

// Fetch the Current User Deposits from the database
export async function fetchCurrentUserWithdrawals(): Promise<FetchUserInfoResponse> {
  try {
    const user = await getCurrentUser();
    const { email: userId } = user;

    const data = await databases.listDocuments(
      DATABASE_ID as string,
      WITHDRAWALS_ID as string,
      [Query.equal("userId", userId)]
    );

    return { success: true, withdrawals: data.documents };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

// Updating User Info in the database
export async function updateInfo(data: UserWalletParams) {
  try {
    const user = await getCurrentUser();
    const { email: userId } = user;

    // Getting the User Document ID
    const userDocuments = await databases.listDocuments(
      DATABASE_ID as string,
      USERS_ID as string,
      [Query.equal("userId", userId)]
    );
    const { $id: userDocumentId } = userDocuments.documents[0];

    // Getting the Wallet Document ID
    const walletDocuments = await databases.listDocuments(
      DATABASE_ID as string,
      WALLETS_ID as string,
      [Query.equal("userId", userId)]
    );
    const { $id: walletDocumentId } = walletDocuments.documents[0];

    // Updating the User Documents
    await databases.updateDocument(
      DATABASE_ID as string,
      USERS_ID as string,
      userDocumentId,
      {
        fullname: data.fullname,
        username: data.username,
      }
    );

    // Updating the Wallet Documents
    await databases.updateDocument(
      DATABASE_ID as string,
      WALLETS_ID as string,
      walletDocumentId,
      {
        bitcoinWallet: data.bitcoinWallet,
        ethereumWallet: data.ethereumWallet,
        dogeWallet: data.dogeWallet,
        litecoinWallet: data.litecoinWallet,
        tronWallet: data.tronWallet,
        shibaWallet: data.shibaWallet,
        usdtWallet: data.usdtWallet,
      }
    );

    revalidatePath("/dashboard/edit-account");
    return { success: true };
  } catch (error: any) {
    console.log(`Failed to Update document ${error.message}`);
    return { success: false };
  }
}
