import classNames from "classnames";
import Image from "next/image";
import React from "react";

import developerPic1Png from "@/app/(portfolio)/developer-pic-1.png";
import AnimatedText from "@/components/custom/animated-text";
import Navbar2 from "@/components/custom/navbar2";

async function PortfolioLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center px-32 bg-light z-0 ${classNames} `}
    >
      <Navbar2 />

      <div className="grow size-full flex justify-start items-center">
        <Image
          src={developerPic1Png}
          className="w-1/2 h-auto"
          alt="Codebucks"
        />
        <div className="w-1/2">
          <AnimatedText
            text={"Turning Vision Into Reality With Code And Design."}
            className="text-6xl"
          />

          <p>
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioLayout;
