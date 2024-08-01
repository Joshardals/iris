export interface UserInfoParams {
  username?: string;
  fullname?: string;
  email?: string;
  createdAt?: string;
  userId?: string;
  referralCode?: string;
  referredBy?: string;
}

export interface UserWalletParams {
  userId?: string;
  bitcoinWallet?: string;
  ethereumWallet?: string;
  dogeWallet?: string;
  litecoinWallet?: string;
  tronWallet?: string;
  shibaWallet?: string;
  usdtWallet?: string;

  // UserInfo Params Inside here too, I'm too lazy to create a seperate typings lol.
  username?: string;
  fullname?: string;
}
