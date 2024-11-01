import classNames from "classnames";
import React from "react";

import Footer from "@/components/custom/footer";
import { CircularText } from "@/components/custom/icons";
import Navbar2 from "@/components/custom/navbar2";

async function PortfolioLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className="w-full h-screen flex flex-col ">
      <div
        className={`w-full flex flex-col items-center px-32 bg-light z-0 grow ${classNames}`}
      >
        <Navbar2 />
        {children}
      </div>
      <Footer />

      <CircularText
        className="fixed  left-4 bottom-24  justify-center
        overflow-hidden size-48 h-auto  fill-dark animate-spin-slow"
      />
    </div>
  );
}

export default PortfolioLayout;
