"use client";

import classNames from "classnames";
import { useState } from "react";

const EXPERIENCE = [
  {
    id: 0,
    title: "Software Engineer Intern",
    company: "Optel Vision",
    companyLink: "https://www.optelgroup.com/en/about-optel/",
    date: "July - August 2022",
    description: [
      "Worked on a web application that allows employees to track their working hours effeciently.",
      "Developed the application with modern technologies like ES6, React, Firebase.",
    ],
  },
  {
    id: 1,
    title: "Freelance Work",
    company: "Tanggies",
    companyLink: "https://www.instagram.com/tanggiesgoa/",
    date: "Winter 2021",
    description: [
      "Designed a responsive company website including graphical user interface design and coding.",
      "Developed web pages according to client specifications.",
      "Optimised the site for SEO and speed.",
    ],
  },
];

export default function Tab() {
  const [activeTab, setActiveTab] = useState(EXPERIENCE[0]);

  return (
    <div className="mt-10 grid grid-cols-8 gap-4">
      <div className="col-span-2 flex flex-col font-code text-sm text-light">
        {EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(EXPERIENCE[index])}
            className={classNames(
              "cursor-pointer border-l-2 px-4 py-3 transition-all hover:bg-dark_light hover:text-primary",
              exp.id === activeTab.id
                ? "border-primary text-primary"
                : "border-light_dark"
            )}
          >
            {exp.company}
          </div>
        ))}
      </div>
      <div className="col-span-6 flex flex-col">
        <div className="text-lg font-medium">
          <span className="text-white">{activeTab.title} </span>
          <span className="font-semibold text-primary">
            <span>@ </span>
            <a href={activeTab.companyLink}>{activeTab.company}</a>
          </span>
        </div>
        <p className="p-1"></p>
        <div className="font-code text-xs font-semibold text-light">
          {activeTab.date}
        </div>
        <p className="p-3"></p>
        <ul className="list-disc">
          {activeTab.description.map((desc, index) => (
            <li key={index} className="mb-2 text-sm text-light">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
