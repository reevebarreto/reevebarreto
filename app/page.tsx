import Tab from "@/components/Tab";
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
    <div className="relative w-full bg-dark">
      {/* Navbar */}
      <div className="absolute left-0 right-0 top-0  flex items-start justify-between p-6">
        <Image
          src={"/Logo.png"}
          alt="Logo"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <div className="flex items-center">
          <div className="font-code text-xs">
            <span className="text-primary">01. </span>
            <span className="text-white">About</span>
          </div>
          <p className="p-4"></p>
          <div className="font-code text-xs">
            <span className="text-primary">02. </span>
            <span className="text-white">Experience</span>
          </div>
          <p className="p-4"></p>
          <div className="font-code text-xs">
            <span className="text-primary">03. </span>
            <span className="text-white">Work</span>
          </div>
          <p className="p-4"></p>
          <div className="font-code text-xs">
            <span className="text-primary">04. </span>
            <span className="text-white">Contact</span>
          </div>
          <p className="p-4"></p>
          <button className="rounded border border-primary px-3 py-2 font-code text-sm text-primary">
            Resume
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto w-3/4">
        {/* Header */}
        <div className="flex h-screen flex-col justify-end pb-10">
          <p className="p-4"></p>
          <p className="text-md font-code text-primary">Hi, my name is</p>
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
            <button className="rounded border border-primary px-6 py-4 font-code text-sm text-primary">
              Check out my work!
            </button>
          </div>
        </div>

        <p className="p-4"></p>

        {/* About Me Section */}
        <div className="flex min-h-screen flex-col p-8">
          <div className="flex w-full max-w-[66%] items-center">
            <div>
              <span className="font-code text-lg text-primary">01. </span>
              <span className="text-2xl font-semibold text-white">
                About Me
              </span>
            </div>
            <p className="p-2"></p>
            <div className="h-[1px] grow border border-light_dark"></div>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="col-span-2 text-light">
              <span>
                Hi there! My name is Reeve and I’m from Goa, India. I began my
                journey into the web development world in early 2020. This was
                during the pandemic and I had a lot of time to learn. But still,
                CSS always makes me refer the internet for mundane things!
              </span>
              <p className="p-2"></p>
              <span>
                Fast forward to today, I’ve recently completed my Bachelors in
                Science in Computer Science from{" "}
                <span className="text-primary">
                  {" "}
                  Parvatibai Chowgule College of Arts & Science
                </span>
                . In that time I’ve had the privilege of interning for a{" "}
                <span className="text-primary">
                  traceability and visions company
                </span>
                , and I have also done freelance work for a{" "}
                <span className="text-primary">local business</span>.
              </span>
              <p className="p-2"></p>
              <span>
                I now have the time to build projects like I’ve always wanted
                before my further studies and it’s pretty exciting!
              </span>
              <p className="p-2"></p>
              <span>
                Here are a few technologies I’ve been working with recently:
              </span>
              <ul className="mt-6 grid list-disc grid-cols-2 gap-2 font-code text-sm">
                <li>Typescript</li>
                <li>Nextjs</li>
                <li>tRPC</li>
                <li>Vercel</li>
                <li>Upstash</li>
                <li>Prisma</li>
              </ul>
            </div>
            <div className="grid place-items-start justify-items-center">
              <Image
                src={"/reeve-smile.png"}
                alt="Reeve"
                width={250}
                height={250}
                className="h-[250px] w-[250px] rounded object-cover"
              />
            </div>
          </div>
        </div>

        <p className="p-4"></p>

        {/* Experience Section */}
        <div className="mx-auto flex min-h-screen max-w-[75%] flex-col p-8">
          <div className="flex w-full items-center">
            <div>
              <span className="font-code text-lg text-primary">02. </span>
              <span className="text-2xl font-semibold text-white">
                Where I've worked
              </span>
            </div>
            <p className="p-2"></p>
            <div className="h-[1px] grow border border-light_dark"></div>
          </div>
          <Tab />
        </div>
      </main>

      {/* Side Socials */}
      <div className="fixed bottom-0 left-[5%] flex -translate-x-1/2 flex-col items-center">
        <a
          href="https://github.com/reeveboy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl text-light" />
        </a>
        <p className="p-2"></p>
        <a
          href="https://www.instagram.com/reeeevve/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-xl text-light" />
        </a>
        <p className="p-2"></p>
        <a
          href="https://www.linkedin.com/in/reeve-barreto-779620220"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-xl text-light" />
        </a>
        <p className="p-2"></p>
        <div className="h-20 w-[1px] border border-light"></div>
      </div>
      <div className="fixed bottom-0 right-[5%]  flex translate-x-1/2 flex-col items-center">
        <a
          href="mailto:reeveboy10@gmail.com"
          className="-translate-y-20 rotate-90 font-code text-sm text-light"
        >
          reeveboy10@gmail.com
        </a>
        <p className="p-2"></p>
        <div className="h-20 w-[1px] border border-light"></div>
      </div>
    </div>
  );
}
