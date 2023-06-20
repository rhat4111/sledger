// Auth Pages
import Login from "pages/Auth/Login";
import Signup from "pages/Auth/Signup";
import ForgotPassword from "pages/Auth/ForgotPassword";
import ResetPassword from "pages/Auth/ResetPassword";
import VerifyOTP from "pages/Auth/VerifyOTP";
import AccountCreated from "pages/Auth/AccountCreated";
import PasswordChanged from "pages/Auth/PasswordChanged";

// Dashboard Pages
import AccessHistory from "pages/Dashboard/AccessHistory";
import BuyLicenses from "pages/Dashboard/BuyLicenses";
import Contacts from "pages/Dashboard/Contacts";
import CreateToken from "pages/Dashboard/CreateToken";
import Dashboard from "pages/Dashboard";
import FAQ from "pages/Dashboard/FAQ";
import Market from "pages/Dashboard/Market";
import NFTList from "pages/Dashboard/NFT";
import Token from "pages/Dashboard/Token";
import Trade from "pages/Dashboard/Trade";
import Transactions from "pages/Dashboard/Transactions";
import UserManage from "pages/Dashboard/UserManage";

// Default Pages
import Home from "pages/Home";
import LegalNotice from "pages/LegalNotice";
import NFT from "pages/NFT";
import NFTDetail from "pages/NFT/Detail";

// Wallet Pages
import ActivateWallet from "pages/Wallet/Activate";
import ConnectWallet from "pages/Wallet/Connect";
import CreateWallet from "pages/Wallet/Create";
import SelectWallet from "pages/Wallet/Select";

export const authRoutes = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/auth/verify-otp",
    element: <VerifyOTP />,
  },
  {
    path: "/auth/account-created",
    element: <AccountCreated />,
  },
  {
    path: "/auth/password-changed",
    element: <PasswordChanged />,
  },
];

export const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/buy-licenses",
    element: <BuyLicenses />,
  },
  {
    path: "/dashboard/trade",
    element: <Trade />,
  },
  {
    path: "/dashboard/transactions",
    element: <Transactions />,
  },
  {
    path: "/dashboard/access-history",
    element: <AccessHistory />,
  },
  {
    path: "/dashboard/contacts",
    element: <Contacts />,
  },
  {
    path: "/dashboard/create-token",
    element: <CreateToken />,
  },
  {
    path: "/dashboard/user-manage",
    element: <UserManage />,
  },
  {
    path: "/dashboard/market",
    element: <Market />,
  },
  {
    path: "/dashboard/nft",
    element: <NFTList />,
  },
  {
    path: "/dashboard/faq",
    element: <FAQ />,
  },
  {
    path: "/dashboard/token/:id",
    element: <Token />,
  },
];

export const defaultRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms",
    element: <LegalNotice />,
  },
  {
    path: "/nft",
    element: <NFT />,
  },
  {
    path: "/nft/:id",
    element: <NFTDetail />,
  },
];

export const walletRoutes = [
  {
    path: "/wallet/activate",
    element: <ActivateWallet />,
  },
  {
    path: "/wallet/connect",
    element: <ConnectWallet />,
  },
  {
    path: "/wallet/create",
    element: <CreateWallet />,
  },
  {
    path: "/wallet/select",
    element: <SelectWallet />,
  },
];
