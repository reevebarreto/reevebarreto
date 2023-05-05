import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const IMAGE_SIZE = 60;

export default function Home() {
  return (
    <div className="bg-dark font-sans relative w-full">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0  flex justify-between items-start p-6">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <div className="flex items-center">
          <div className="text-xs font-code">
            <span className="text-primary">01. </span>
            <span className="text-white">About</span>
          </div>
          <p className="p-4"></p>
          <div className="text-xs font-code">
            <span className="text-primary">02. </span>
            <span className="text-white">Experience</span>
          </div>
          <p className="p-4"></p>
          <div className="text-xs font-code">
            <span className="text-primary">03. </span>
            <span className="text-white">Work</span>
          </div>
          <p className="p-4"></p>
          <div className="text-xs font-code">
            <span className="text-primary">04. </span>
            <span className="text-white">Contact</span>
          </div>
          <p className="p-4"></p>
          <button className="border border-primary text-primary text-sm rounded px-3 py-2 font-code">
            Resume
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-3/4 mx-auto">
        {/* Header */}
        <div className="h-screen flex flex-col justify-center">
          <p className="p-4"></p>
          <p className="font-code text-md text-primary">Hi, my name is</p>
          <p className="p-4"></p>
          <p className="text-7xl font-bold text-white">Reeve Barreto.</p>
          <p className="p-2"></p>
          <p className="text-6xl font-bold text-light">
            I Build things for the Web.
          </p>
          <p className="p-4"></p>
          <p className="text-md max-w-lg text-light">
            Just your average run of the mill computer science graduate who is
            very interested in web development and technology. Currently, I’m
            focused on building my portfolio.
          </p>
          <p className="p-4"></p>
          <div>
            <button className="border border-primary text-primary text-sm rounded px-6 py-4 font-code">
              Check out my work!
            </button>
          </div>
        </div>
      </main>

      {/* Side Socials */}
      <div className="flex flex-col items-center fixed bottom-0 left-[5%] -translate-x-1/2">
        <a
          href="https://github.com/reeveboy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-light text-xl" />
        </a>
        <p className="p-2"></p>
        <a
          href="https://www.instagram.com/reeeevve/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-light text-xl" />
        </a>
        <p className="p-2"></p>
        <a
          href="https://www.linkedin.com/in/reeve-barreto-779620220"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-light text-xl" />
        </a>
        <p className="p-2"></p>
        <div className="border border-light h-20 w-[1px]"></div>
      </div>
      <div className="flex flex-col items-center  fixed bottom-0 right-[5%] translate-x-1/2">
        <a
          href="mailto:reeveboy10@gmail.com"
          className="font-code text-sm text-light rotate-90 -translate-y-20"
        >
          reeveboy10@gmail.com
        </a>
        <p className="p-2"></p>
        <div className="border border-light h-20 w-[1px]"></div>
      </div>
    </div>
  );
}
