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
