"use server";
import { databases } from "@/lib/appwrite.config";
import { ID, Query } from "node-appwrite";
import { UserInfoParams, UserWalletParams } from "@/typings/database";

const { DATABASE_ID, USERS_ID, WALLETS_ID } = process.env;

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
