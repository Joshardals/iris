export interface SignInValidationType {
  email: string;
  password: string;
}

export interface SignUpValidationType {
  fullName?: string;
  userName?: string;
  email?: string;
  password?: string;
  bitcoinWallet?: string;
  ethereumWallet?: string;
  dogeWallet?: string;
  litecoinWallet?: string;
  tronWallet?: string;
  shibaWallet?: string;
  usdtWallet?: string;
  // invitedBy?: string;
  marketingEmails?: boolean;
  terms?: boolean;
}

export interface PlansType {
  plan: any;
  method: any;
  amount: string;
}

// Typings for the Spend Component

export interface SelectedAmountState {
  amount: string | number;
  setAmount: (amount: SelectedAmountState["amount"]) => void;
}
``;
export interface SelectedMethodState {
  selectedValue: string;
  setSelectedValue: (
    selectedValue: SelectedMethodState["selectedValue"]
  ) => void;
}

export interface SelectedWithdrawMethodState {
  selectedValue: string;
  setSelectedValue: (
    selectedValue: SelectedWithdrawMethodState["selectedValue"]
  ) => void;
}
