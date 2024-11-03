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
        className={`h-px inline-block w-0 bg-black dark:bg-white absolute
          left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            pathname === href ? "w-full" : ""
          }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar2: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 pt-10 pb-8 font-medium dark:text-white">
      <nav>
        <CustomLink
          href="/"
          title="Home"
          className="mr-4 text-gray-800 dark:text-gray-200"
        />
        <CustomLink
          href="/about"
          title="About"
          className="mx-4 text-gray-800 dark:text-gray-200"
        />
        <CustomLink
          href="/project"
          title="Projects"
          className="mx-4 text-gray-800 dark:text-gray-200"
        />
        <CustomLink
          href="/article"
          title="Articles"
          className="ml-4 text-gray-800 dark:text-gray-200"
        />
      </nav>

      <nav className="flex items-center justify-center flex-wrap gap-3">
        <motion.a
          href="https://twitter.com"
          target="_blank"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 transition"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-700 transition"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://pinterest.com"
          target="_blank"
          className="text-gray-800 dark:text-gray-200 hover:text-red-600 transition"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://dribbble.com"
          target="_blank"
          className="text-gray-800 dark:text-gray-200 hover:text-pink-500 transition"
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
