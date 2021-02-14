import React from "react";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <div test="123">
      <Header />
      {children}
    </div>
  );
}
