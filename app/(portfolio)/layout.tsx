import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import developerPic1Png from "@/app/(portfolio)/developer-pic-1.png";
import AnimatedText from "@/components/custom/animated-text";
import Footer from "@/components/custom/footer";
import { LinkArrow, CircularText } from "@/components/custom/icons";
import Navbar2 from "@/components/custom/navbar2";

async function PortfolioLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className="w-full h-screen flex flex-col">
      <div
        className={`w-full flex flex-col items-center px-32 bg-light z-0 grow ${classNames}`}
      >
        <Navbar2 />
        {children}
      </div>
      <Footer />

      <CircularText
        className="fixed  left-4 bottom-24  justify-center
overflow-hidden w-48 h-auto  fill-dark animate-spin-slow"
      />
    </div>
  );
}

export default PortfolioLayout;
