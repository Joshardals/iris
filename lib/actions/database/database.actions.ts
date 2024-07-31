"use server";
import { databases } from "@/lib/appwrite.config";
import { getCurrentUser } from "../auth/auth.actions";
import { ID, Query } from "node-appwrite";
import { UserInfoParams, UserWalletParams } from "@/typings/database";

const { DATABASE_ID, USERS_ID, WALLETS_ID, ACCOUNT_INFO } = process.env;

// Creating User Info Document in the DB
export async function createUserInfo({
  username,
  fullname,
  email,
  createdAt,
  userId,
  referralCode,
  referredBy,
}: UserInfoParams) {
  try {
    await databases.createDocument(
      DATABASE_ID as string,
      USERS_ID as string,
      ID.unique(),
      {
        username,
        fullname,
        email,
        createdAt,
        userId,
        referralCode,
        referredBy,
      }
    );

    return { success: true };
  } catch (error: any) {
    console.log(`Failed to create user document in the db: ${error.message}`);
    return { success: false, msg: error.message };
  }
}

// Creating Wallets Document in the DB

export async function createWallets({
  userId,
  bitcoinWallet,
  ethereumWallet,
  dogeWallet,
  litecoinWallet,
  tronWallet,
  shibaWallet,
  usdtWallet,
}: UserWalletParams) {
  try {
    await databases.createDocument(
      DATABASE_ID as string,
      WALLETS_ID as string,
      ID.unique(),
      {
        userId,
        bitcoinWallet,
        ethereumWallet,
        dogeWallet,
        litecoinWallet,
        tronWallet,
        shibaWallet,
        usdtWallet,
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

interface FetchUserInfoResponse {
  success: boolean;
  data?: any;
  msg?: string;
}

export async function fetchCurrentUserInfo(): Promise<FetchUserInfoResponse> {
  try {
    const user = await getCurrentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const { $id: userId } = user;

    const data = await databases.listDocuments(
      DATABASE_ID as string,
      USERS_ID as string,
      [Query.equal("userId", userId)]
    );

    return { success: true, data: data.documents[0] };
  } catch (error: any) {
    console.error(
      `Failed to fetch User Info Document from the DB: ${error.message}`
    );
    return { success: false, msg: error.message };
  }
}
