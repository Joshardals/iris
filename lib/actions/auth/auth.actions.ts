"use server";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "@/lib/appwrite.config";
import {
  createAccountInfo,
  createUserInfo,
  createWallets,
} from "../database/database.actions";
import { generateReferralCode } from "@/lib/utils";
import { Params } from "@/typings/auth";
import { redirect } from "next/navigation";
import { sendMail } from "../mail/mail.action";

export async function getCurrentUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error: any) {
    return error.message;
  }
}

export async function signInUser({ email, password }: Params) {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email!, password!);

    cookies().set("userSession", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // If Successful
    return { success: true };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

// Creating A User

export async function signUpUser({
  email,
  name,
  password,
  username,
  referredBy,
  bitcoinWallet,
  ethereumWallet,
  dogeWallet,
  litecoinWallet,
  tronWallet,
  shibaWallet,
  usdtWallet,
}: Params) {
  try {
    const { account } = await createAdminClient();
    const response = await account.create(ID.unique(), email!, password!, name);
    const session = await account.createEmailPasswordSession(email!, password!);
    const userId = response.email;

    cookies().set("userSession", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const referralCode = generateReferralCode(); // Generate an 8 digit unique referral code upon sign up

    // Creating a User collection in the database.
    await createUserInfo({
      username,
      fullname: name,
      email,
      createdAt: response.$createdAt,
      userId,
      referralCode,
      referredBy,
    });

    // Send a mail to the admin.
    await sendMail({
      to: "irisinvest200@gmail.com",
      name: "Iris",
      subject: `New User Registration: ${name!.toUpperCase()}`,
      body: `<p>Hello Admin,</p>
             <p>A new user has signed up on Iris Investments.</p>
             <p><strong>User Details:</strong></p>
             <ul>
               <li>Name: ${name!.toUpperCase()}</li>
               <li>Email: ${email}</li>
               <li>Username: ${name}</li>
             </ul>
            <p>Make sure to welcome them and provide any necessary assistance to help them get started.</p>
            <p>Best regards,</p>
            <p>The Iris Investments System</p>`,
    });

    // Send a mail to the customer.
    await sendMail({
      to: email!,
      name: name!,
      subject: `Welcome to Iris Investments, ${name}!`,
      body: `<p>Hello ${name!.toUpperCase()},</p>
            <p>Welcome to Iris Investments! We're thrilled to have you on board.</p>
            <p>Your account has been successfully created, and you can now explore our platform and make the most out of your investment opportunities.</p>
            <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
            <p>Best regards,</p>
            <p>The Iris Investments Team</p>`,
    });

    // Creating a Wallet collection in the database.
    await createWallets({
      userId,
      bitcoinWallet,
      ethereumWallet,
      dogeWallet,
      litecoinWallet,
      tronWallet,
      shibaWallet,
      usdtWallet,
    });

    // Creating an Account Info collection in the database
    await createAccountInfo(userId);

    return { success: true };
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    return { success: false, msg: error.message };
  }
}

// Sign Out User

export async function signOutUser() {
  try {
    const { account } = await createSessionClient();

    cookies().delete("userSession");
    await account.deleteSession("current");
  } catch (error: any) {
    return error.message;
  }

  redirect("/");
}
