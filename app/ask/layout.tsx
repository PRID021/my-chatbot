import React from "react";

import { Navbar } from "@/components/custom/navbar";

async function AskLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className="w-full h-screen flex flex-col ">
      <Navbar />
      {children}
    </div>
  );
}

export default AskLayout;
