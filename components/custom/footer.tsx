import Link from "next/link";
import React from "react";

function Footer({
  className,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
}>) {
  return (
    <footer
      className={`w-full flex items-center justify-between border-t-2 border-solid border-slate-900 bg-light
    font-medium  py-4 px-32 text-lg
    ${className}`}
    >
      <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      <div className="flex items-center absolute left-1/2  -translate-x-1/2 ">
        Build With &nbsp;
        <span className="text-purple-700 text-xl">&#9825;</span>
        &nbsp;by&nbsp;
        <Link
          href={"https://dev.dreaming.com"}
          className=" underline underline-offset-2"
        >
          HoangPham
        </Link>
      </div>
      <Link href={"/ask"} className=" underline underline-offset-2">
        Say hello
      </Link>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
