"use client";
import { ButtonInput, FormInput } from "@/app/_components/FormInput";
import { Form } from "@/components/ui/form";
import { EditValidaton } from "@/lib/validations/form";
import { SignUpValidationType } from "@/typings/form";
import { toast } from "react-toastify";
import { updateInfo } from "@/lib/actions/database/database.actions";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export default function EditForm({
  userData,
  walletData,
}: {
  userData: any;
  walletData: any;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const { userInfo } = userData;
  const { walletInfo } = walletData;

  const form = useForm<SignUpValidationType>({
    resolver: zodResolver(EditValidaton),
    defaultValues: {
      fullName: userInfo.fullname,
      userName: userInfo.username,
      email: userInfo.email,
      bitcoinWallet: walletInfo.bitcoinWallet,
      ethereumWallet: walletInfo.ethereumWallet,
      dogeWallet: walletInfo.dogeWallet,
      litecoinWallet: walletInfo.litecoinWallet,
      tronWallet: walletInfo.tronWallet,
      shibaWallet: walletInfo.shibaWallet,
      usdtWallet: walletInfo.usdtWallet,
    },
  });

  const onSubmit = async (values: SignUpValidationType) => {
    try {
      setLoading(true);

      await updateInfo({
        fullname: values.fullName,
        username: values.userName,
        bitcoinWallet: values.bitcoinWallet,
        ethereumWallet: values.ethereumWallet,
        dogeWallet: values.dogeWallet,
        litecoinWallet: values.litecoinWallet,
        tronWallet: values.tronWallet,
        shibaWallet: values.shibaWallet,
        usdtWallet: values.usdtWallet,
      });

      toast("Your Information has been successfully updated");
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        autoComplete="off"
      >
        <div className="editForm">
          <p>Fullname: </p>
          <FormInput
            form={form}
            name="fullName"
            type="text"
            placeholder="Full Name"
            loading={loading}
          />
        </div>
        <div className="editForm">
          <p>Username: </p>
          <FormInput
            form={form}
            name="userName"
            type="text"
            placeholder="Username"
            loading={loading}
          />
        </div>
        <div className="editForm">
          <p>Email: </p>
          <FormInput
            form={form}
            name="email"
            type="email"
            placeholder="Email"
            loading={true}
          />
        </div>
        <div className="editForm">
          <p>Bitcoin Wallet: </p>
          <FormInput
            form={form}
            name="bitcoinWallet"
            type="text"
            placeholder="Bitcoin Wallet"
            loading={loading}
          />
        </div>
        <div className="editForm">
          <p>Ethereum Wallet: </p>
          <FormInput
            form={form}
            name="ethereumWallet"
            type="text"
            placeholder="Ethereum Wallet"
            loading={loading}
          />
        </div>
        <div className="editForm">
          <p>Doge Wallet: </p>
          <FormInput
            form={form}
            name="dogeWallet"
            type="text"
            placeholder="Doge Wallet"
            loading={loading}
          />
        </div>
        <div className="editForm">
          <p>Litecoin Wallet: </p>
          <FormInput
            form={form}
            name="litecoinWallet"
            type="text"
            placeholder="Litecoin Wallet"
            loading={loading}
          />
        </div>
        <div className="editForm">
          <p>Tron Wallet: </p>
          <FormInput
            form={form}
            name="tronWallet"
            type="text"
            placeholder="Tron Wallet"
            loading={loading}
          />
        </div>
        <div className="editForm">
          <p>Shiba Wallet: </p>
          <FormInput
            form={form}
            name="shibaWallet"
            type="text"
            placeholder="Shiba Wallet"
            loading={loading}
          />
        </div>
        <div className="editForm">
          <p>Usdt (TRC 20) Wallet: </p>
          <FormInput
            form={form}
            name="usdtWallet"
            type="text"
            placeholder="Usdt (TRC 20) Wallet"
            loading={loading}
          />
        </div>

        <ButtonInput loading={loading} label="Update" />
      </form>
    </Form>
  );
}
