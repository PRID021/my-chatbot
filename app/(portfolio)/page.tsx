import Image from "next/image";
import Link from "next/link";

import developerPic1Png from "@/app/(portfolio)/developer-pic-1.png";
import AnimatedText from "@/components/custom/animated-text";
import { LinkArrow } from "@/components/custom/icons";

export default async function Page() {
  return (
    <div className="grow size-full flex justify-start items-center ">
      <Image src={developerPic1Png} className="w-1/2 h-auto" alt="Codebucks" />
      <div className="w-1/2 flex flex-col items-center self-center text-black dark:text-white">
        <AnimatedText
          text={"Turning Vision Into Reality With Code And Design."}
          className="!text-7xl text-left"
        />
        <p className="my-4 text-xl font-medium">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="flex items-center self-start space-x-4">
          <Link
            href={"./cv.pdf"}
            target="_blank"
            download={true}
            className="flex items-center px-6 py-2 bg-blue-600 text-white hover:text-black dark:hover:text-white font-semibold rounded-lg border-2 border-solid border-blue-600
              hover:bg-transparent hover:border-gray-800 transition duration-300 dark:bg-blue-700 dark:border-blue-700 dark:hover:bg-transparent dark:hover:border-white"
          >
            <span>Resume</span>
            <LinkArrow className="w-6 ml-2" />
          </Link>
          <Link
            href="mailto:hoangduc.uit.dev@gmail.com"
            target="_blank"
            className="px-10 py-2 bg-[#003366] text-white font-semibold rounded-lg border-2 border-solid border-[#003366]
              hover:bg-transparent hover:text-[#003366] hover:border-gray-800 transition duration-300
              dark:bg-[#004080] dark:border-[#004080] dark:hover:bg-transparent dark:hover:text-[#004080]"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
