"use server";
import { databases } from "@/lib/appwrite.config";
import { ID, Query } from "node-appwrite";

const { DATABASE_ID, USERS_ID } = process.env;

interface UserInfoParams {
  username?: string;
  fullname: string;
  email: string;
  createdAt: string;
  userId: string;
}

export async function createUserInfo({
  username,
  fullname,
  email,
  createdAt,
  userId,
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
      }
    );

    return { success: true };
  } catch (error: any) {
    console.log(`Failed to create user document in the db: ${error.message}`);
    return { success: false, msg: error.message };
  }
}
