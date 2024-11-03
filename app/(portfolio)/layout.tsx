import classNames from "classnames";
import React from "react";

import Footer from "@/components/custom/footer";
import Navbar2 from "@/components/custom/navbar2";

async function PortfolioLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className="w-full h-screen flex flex-col bg-white dark:bg-gray-800 ">
      <div
        className={`w-full flex flex-col items-center px-32 bg-light z-0 grow ${classNames}`}
      >
        <Navbar2 />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default PortfolioLayout;
