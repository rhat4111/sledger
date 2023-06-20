import { createContext } from "react";
import UnitedStatesFlag from "assets/images/flags/united_states.png";

const context = createContext({
  auth: {
    user: null,
    login: () => {},
    logout: () => {},
  },
  theme: {
    name: "dark",
    toggleTheme: () => {},
  },
  lang: {
    code: "us",
    name: "English",
    icon: UnitedStatesFlag,
    selectLanguage: () => {},
  },
});

export default context;
