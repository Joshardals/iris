"use server";
import { databases } from "@/lib/appwrite.config";
import { fetchCurrentUserInfo } from "./database.actions";
import { Query } from "node-appwrite";

const { DATABASE_ID, USERS_ID } = process.env;

interface UsersResponse {
  data?: any;
  success: boolean;
  msg?: string;
  total?: number;
}

export async function fetchReferredUsers(): Promise<UsersResponse> {
  try {
    const userInfo = await fetchCurrentUserInfo();
    const userRefCode = userInfo.data.referralCode;

    const referredUserInfo = await databases.listDocuments(
      DATABASE_ID as string,
      USERS_ID as string,
      [Query.equal("referredBy", userRefCode)]
    );

    return {
      success: true,
      data: referredUserInfo.documents,
      total: referredUserInfo.total,
    };
  } catch (error: any) {
    console.log(`Failed to fetch referred Users: ${error.message}`);
    return { success: false, msg: error.message };
  }
}
