"use client";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";

const IMAGE_SIZE = 60;

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Experience", href: "#", current: false },
  { name: "Work", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

export default function Navbar() {
  return (
    <Disclosure>
      <div className="relative flex justify-between p-6">
        <Image
          src={"/Logo.png"}
          alt="Logo"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <div className="hidden items-center md:flex">
          <a href="#" className="font-code text-xs">
            <span className="text-primary">01. </span>
            <span className="text-white hover:text-primary">About</span>
          </a>
          <p className="p-4"></p>
          <a href="#" className="font-code text-xs">
            <span className="text-primary">02. </span>
            <span className="text-white hover:text-primary">Experience</span>
          </a>
          <p className="p-4"></p>
          <a href="#" className="font-code text-xs">
            <span className="text-primary">03. </span>
            <span className="text-white hover:text-primary">Work</span>
          </a>
          <p className="p-4"></p>
          <a href="#" className="font-code text-xs">
            <span className="text-primary">04. </span>
            <span className="text-white hover:text-primary">Contact</span>
          </a>
          <p className="p-4"></p>
          <button className="rounded border border-primary px-3 py-2 font-code text-sm text-primary">
            Resume
          </button>
        </div>
        <Disclosure.Button className="absolute right-0 top-0 p-6 md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-2xl text-primary" />
        </Disclosure.Button>
        <Transition
          className="fixed right-0 top-0 z-40 h-screen w-1/2 rounded bg-dark_light p-6 md:hidden"
          enter="transition duration-250 ease-in"
          enterFrom="transform translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition duration-250 ease-out"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform translate-x-full opacity-0"
        >
          <Disclosure.Panel className="">
            <Disclosure.Button className="w-full text-right">
              <FontAwesomeIcon icon={faX} className="text-2xl text-primary" />
            </Disclosure.Button>
            <div className="flex h-full flex-col items-center justify-around pb-8 pt-8">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-md mb-6 flex flex-col items-center font-code"
                >
                  <span className="text-sm text-primary">0{index + 1}.</span>
                  <span className="text-white transition-all duration-300 hover:text-primary">
                    {item.name}
                  </span>
                </Disclosure.Button>
              ))}
              <button className="rounded border border-primary px-6 py-4 font-code text-sm text-primary">
                Resume
              </button>
            </div>
          </Disclosure.Panel>
        </Transition>
      </div>
    </Disclosure>
  );
}
