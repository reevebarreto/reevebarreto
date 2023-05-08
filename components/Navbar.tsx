"use client";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";

const IMAGE_SIZE = 50;

const navigation = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Work", href: "work" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrollDown, setScrollDown] = useState(false);
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setScrollDown(false);
    } else {
      setScrollDown(true);
    }
    prevScrollpos = currentScrollPos;
  };
  console.log(scrollDown);

  return (
    <Disclosure>
      <div
        id="navbar"
        className={classNames(
          "fixed left-0 right-0 top-0 z-30 bg-dark transition-all duration-300",
          scrollDown ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="relative flex justify-between p-3">
          <Image
            src={"/Logo.png"}
            alt="Logo"
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
          <div className="hidden items-center md:flex">
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
              className="font-code text-xs"
            >
              <span className="text-primary">01. </span>
              <span className="text-white hover:text-primary">About</span>
            </button>
            <p className="p-4"></p>
            <button
              onClick={() =>
                document.getElementById("experience")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
              className="font-code text-xs"
            >
              <span className="text-primary">02. </span>
              <span className="text-white hover:text-primary">Experience</span>
            </button>
            <p className="p-4"></p>
            <button
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
              className="font-code text-xs"
            >
              <span className="text-primary">03. </span>
              <span className="text-white hover:text-primary">Work</span>
            </button>
            <p className="p-4"></p>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
              className="font-code text-xs"
            >
              <span className="text-primary">04. </span>
              <span className="text-white hover:text-primary">Contact</span>
            </button>
            <p className="p-4"></p>
            <button className="rounded border border-primary px-3 py-2 font-code text-sm text-primary">
              Resume
            </button>
          </div>
          <Disclosure.Button className="absolute right-0 top-0 p-6 md:hidden">
            <FontAwesomeIcon icon={faBars} className="text-2xl text-primary" />
          </Disclosure.Button>
          <Transition
            className="fixed right-0 top-0 z-40 h-screen w-[60%] rounded bg-dark_light p-6 shadow-sm md:hidden md:w-1/2"
            enter="transition duration-250 ease-in"
            enterFrom="transform translate-x-full opacity-0"
            enterTo="transform translate-x-0 opacity-100"
            leave="transition duration-250 ease-out"
            leaveFrom="transform translate-x-0 opacity-100"
            leaveTo="transform translate-x-full opacity-0"
          >
            <Disclosure.Panel className="h-full">
              <Disclosure.Button className="w-full text-right">
                <FontAwesomeIcon icon={faX} className="text-2xl text-primary" />
              </Disclosure.Button>
              <div className="flex h-full flex-col items-center justify-center pb-8 pt-8">
                {navigation.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() =>
                      document.getElementById(item.href)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      })
                    }
                    className="text-md mb-6 flex flex-col items-center font-code"
                  >
                    <span className="text-sm text-primary">0{index + 1}.</span>
                    <span className="text-white transition-all duration-300 hover:text-primary">
                      {item.name}
                    </span>
                  </button>
                ))}
                <button className="rounded border border-primary px-6 py-4 font-code text-sm text-primary">
                  Resume
                </button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      </div>
    </Disclosure>
  );
}
