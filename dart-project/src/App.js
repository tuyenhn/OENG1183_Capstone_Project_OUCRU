import React from "react";
import { Routes, MemoryRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import NavigationRoutes from "./routes/NavigationRoutes";
import PropTypes from "prop-types";
import { Suspense } from "react";
import { Account } from "./utils/accountUtil";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Account>
        <Suspense fallback={<div></div>}>
          <Router>
            <Routes>{NavigationRoutes}</Routes>
          </Router>
        </Suspense>
      </Account>
    </ThemeProvider>
  );
}
