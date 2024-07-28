"use server";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "@/lib/appwrite.config";
import { createUserInfo } from "../database/database.actions";
import { redirect } from "next/navigation";
import { SquareScissorsIcon } from "lucide-react";

interface Params {
  email: string;
  name: string;
  password?: string;
  username?: string;
}

export async function getCurrentUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error: any) {
    return error.message;
  }
}

export async function signInUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

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

export async function signUpUser({ email, name, password, username }: Params) {
  try {
    const { account } = await createAdminClient();
    const response = await account.create(ID.unique(), email, password!, name);
    const session = await account.createEmailPasswordSession(email, password!);

    cookies().set("userSession", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // If Successful
    await createUserInfo({
      username,
      fullname: name,
      email,
      createdAt: response.$createdAt,
      userId: response.$id,
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
}

export async function signOutUser() {
  try {
    const { account } = await createSessionClient();

    cookies().delete("userSession");
    await account.deleteSession("current");
  } catch (error: any) {
    return error.message;
  }

  redirect("/signup");
}
