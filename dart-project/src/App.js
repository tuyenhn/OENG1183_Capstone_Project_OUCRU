import React from "react";
import { Routes, MemoryRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import NavigationRoutes from "./routes/NavigationRoutes";
import PropTypes from "prop-types";
import { Suspense } from "react";

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
    <div>
      <Suspense fallback={<div></div>}>
        <Router>
          <Routes>{NavigationRoutes}</Routes>
        </Router>
      </Suspense>
      {/* <Dashboard />
      <Footer /> */}
    </div>
  );
}
