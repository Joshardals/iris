import EditForm from "../_components/Edit-Account/EditForm";
import {
  fetchCurrentUserInfo,
  fetchCurrentUserWalletInfo,
} from "@/lib/actions/database/database.actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function EditPage() {
  const [userInfo, walletInfo] = await Promise.all([
    await fetchCurrentUserInfo(),
    await fetchCurrentUserWalletInfo(),
  ]);
  return (
    <div className="space-y-5 md:space-y-8">
      <h2 className="font-medium text-xl">Edit Account</h2>
      <EditForm userData={userInfo} walletData={walletInfo} />
      <ToastContainer />
    </div>
  );
}
