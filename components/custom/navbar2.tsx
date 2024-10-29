"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./icons";
import Logo from "./logo";

const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
    h-px inline-block w-0 bg-dark absolute
    left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href && "w-full"}
  `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar2: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-32 pt-10 pb-8 font-medium dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/project" title="Project" className="mx-4" />
        <CustomLink href="/article" title="Article" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap gap-3">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          className="size-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          className="size-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          className="size-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          className="size-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com"
          target="_blank"
          className="size-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

// Ensure you have an export here
export default Navbar2;
