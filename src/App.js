import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import Context from "context";
import i18n from "i18n";

import {
  authRoutes,
  dashboardRoutes,
  defaultRoutes,
  walletRoutes,
} from "router";
import {
  AuthLayout,
  DashboardLayout,
  DefaultLayout,
  WalletLayout,
} from "components/Layout";

import UnitedStatesFlag from "assets/images/flags/united_states.png";
import Avatar from "assets/images/user/1.png";
import NotFound from "pages/NotFound";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [language, setLanguage] = useState({
    code: "us",
    name: "English",
    icon: UnitedStatesFlag,
  });
  const contextParams = {
    auth: {
      user: authenticatedUser,
      login: () =>
        setAuthenticatedUser({
          name: "Khalid Saied",
          avatar: Avatar,
        }),
      logout: () => setAuthenticatedUser(null),
    },
    theme: {
      name: theme,
      toggleTheme: () => {
        const selectedTheme = theme === "light" ? "dark" : "light";
        selectedTheme === "dark"
          ? window.document.body.classList.add("dark")
          : window.document.body.classList.remove("dark");
        setTheme(selectedTheme);
      },
    },
    lang: {
      ...language,
      selectLanguage: (lang) => setLanguage(lang),
    },
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Context.Provider value={contextParams}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/auth" element={<AuthLayout />}>
              {authRoutes.map((route, key) => (
                <Route {...route} key={`auth-route-${key}`} />
              ))}
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
              {dashboardRoutes.map((route, key) => (
                <Route {...route} key={`dasbhaord-route-${key}`} />
              ))}
            </Route>
            <Route path="/wallet" element={<WalletLayout />}>
              {walletRoutes.map((route, key) => (
                <Route {...route} key={`wallet-route-${key}`} />
              ))}
            </Route>
            <Route path="/" element={<DefaultLayout />}>
              {defaultRoutes.map((route, key) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={`default-route-${key}`}
                />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </I18nextProvider>
  );
};

export default App;
