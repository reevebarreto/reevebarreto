"use client";

import classNames from "classnames";
import { useState } from "react";

const EXPERIENCE = [
  {
    id: 0,
    title: "Software Developer",
    company: "Born In Goa UK",
    companyLink: "https://www.borningoa.com/",
    date: "Jan – July 2024",
    description: [
      "Designed and developed the company’s e-commerce website from scratch, showcasing full-stack development skills.",
      "Created graphics for t-shirts, contributing to product design and branding.",
      "Devised and executed digital marketing strategies, leading to an 80% increase in online sales and brand visibility.",
      "Integrated analytics tools to track website performance and improve user engagement.",
    ],
  },
  {
    id: 1,
    title: "Freelance Software Developer",
    company: "Pratos de Goa",
    companyLink: "https://www.pratosdegoa.co.uk/",
    date: "June – Dec 2023",
    description: [
      "Independently built and launched a full-stack web application for a local business.",
      "Implemented SEO best practices, boosting organic traffic by 60%.",
      "Led a targeted digital marketing campaign, increasing brand reach by 120%.",
      "Managed the entire project life cycle, from concept to deployment and post-launch maintenance.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Optel Group",
    companyLink: "https://www.optelgroup.com/en/about-optel/",
    date: "July - August 2022",
    description: [
      "Developed a duty and calendar management web application for employee tracking.",
      "Worked in an Agile environment, participating in sprints and code reviews.",
      "Gained hands-on experience with enterprise software development and CI/CD pipelines.",
    ],
  },
  {
    id: 3,
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
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-8">
      <div className="flex font-code text-sm text-light sm:col-span-2 sm:flex-col">
        {EXPERIENCE.map((exp, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(EXPERIENCE[index])}
            className={classNames(
              "cursor-pointer px-4 py-3 transition-all hover:bg-dark_light hover:text-primary sm:border-l-2 xs:border-b-2",
              exp.id === activeTab.id
                ? "border-primary text-primary"
                : "border-light_dark"
            )}
          >
            {exp.company}
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:col-span-6">
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
