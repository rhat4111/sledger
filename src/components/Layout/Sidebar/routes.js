import Home from "assets/images/navigation/home.svg";
import Receive from "assets/images/navigation/receive.svg";
import Send from "assets/images/navigation/send.svg";
import Buy from "assets/images/navigation/buy.svg";
import Trade from "assets/images/navigation/trade.svg";
import Transactions from "assets/images/navigation/transactions.svg";
import History from "assets/images/navigation/history.svg";
import Contacts from "assets/images/navigation/contacts.svg";
import CreateToken from "assets/images/navigation/contacts.svg";
import Setting from "assets/images/navigation/setting.svg";

const routes = [
  {
    id: "home",
    label: "layout.home",
    path: "/dashboard",
    icon: Home,
  },
  {
    id: "receive",
    label: "layout.sidebar.receive",
    icon: Receive,
  },
  {
    id: "send",
    label: "layout.sidebar.send",
    icon: Send,
  },
  {
    id: "buy_licenses",
    label: "layout.sidebar.buyLicenses",
    path: "/dashboard/buy-licenses",
    icon: Buy,
  },
  {
    id: "trade",
    label: "layout.sidebar.trade",
    path: "/dashboard/trade",
    icon: Trade,
  },
  {
    id: "transactions",
    label: "layout.sidebar.transactions",
    path: "/dashboard/transactions",
    icon: Transactions,
  },
  {
    id: "access-history",
    label: "layout.sidebar.accessHistory",
    path: "/dashboard/access-history",
    icon: History,
  },
  {
    id: "contacts",
    label: "layout.sidebar.contacts",
    path: "/dashboard/contacts",
    icon: Contacts,
  },
  {
    id: "create-token",
    label: "layout.sidebar.createToken",
    path: "/dashboard/create-token",
    icon: CreateToken,
  },
  {
    id: "user-manage",
    label: "layout.sidebar.userManage",
    path: "/dashboard/user-manage",
    icon: Setting,
  },
];

export default routes;
