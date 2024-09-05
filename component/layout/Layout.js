"use client";
import React from "react";
import NavbarSection from "../navbar/NavbarSection";
import FooterSection from "../footer/FooterSection";
import ScrollToTopButton from "../utils/ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSection style="" logo="/images/logo.webp" />
      {children}
      <ScrollToTopButton style="" />
      <FooterSection />
    </>
  );
};

export default Layout;
