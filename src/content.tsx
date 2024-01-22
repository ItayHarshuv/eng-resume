import { ReactElement } from "react";
import { Time } from "./utility/time";

type Renderable = string | ReactElement;

export type Entry = {
  title: string;
  subtitle: string;
  timeframe:
    | {
    start: Time;
    end: Time;
  }
    | Time;
  content: Renderable | Renderable[]; // array will use ul
};

export type Section = {
  title: string;
  content: Entry[] | string[]; // string[] will use badges
  keywords?: string[];
};

export const content: {
  name: string;
  title: string;
  keywords: string[];
  about: string | ReactElement;
  contact: {
    email: string;
    phone: number;
    address: string;
    github: string;
  };
  columns: [Section[], Section[]];
} = {
  name: "Clay Herzberg",
  title: "Sr. Front-End Web Developer",
  keywords: ["Full Stack Developer", "Senior", "Tech Lead", "Engineer"],
  about: (
    <>
      <p>
        After graduating a talented youth program with a B.A. in Computer Science at age of 19, Clay has had 6 years of experience in the Front-End world with different technologies including React, Angular,
        TypeScript, GraphQL and others. He loves the web and finding ways to improve DX and streamline productivity.
        As a tech-lead, he's managed SCRUM teams, led architectural designs and development for client-side web
        applications, as well as mentored and reviewed work by junior
        developers.
      </p>
      {/*<p>*/}
      {/*  He loves innovating and finding better ways to solve problems, emphasizing*/}
      {/*  both developer and user experience, while improving productivity and*/}
      {/*  stability of code.*/}
      {/*  /!*Through my years working as a developer, I've worked on various*/}
      {/*   such tools, such as GraphQL query to typed-code in TS generation,*/}
      {/*   automated code refactoring tools, improved typings for existing*/}
      {/*   libraries ect.*!/*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  I'm a strong believer in the Functional Programming paradigm, since it*/}
      {/*  makes it so much easier to reuse, expand and test code. This is why I'm*/}
      {/*  a big fan of react and specifically react hooks.{" "}*/}
      {/*  /!*TODO: consider giving real world examples*!/*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  I'm looking for my next challenge in an aspiring and innovative work*/}
      {/*  environment, where I can both learn from others and contribute from my*/}
      {/*  knowledge and expertise.*/}
      {/*</p>*/}
    </>
  ),
  contact: {
    email: "clay.herzberg@gmail.com",
    phone: 3322519964,
    address: "New York City, USA",
    github: "ShacharHarshuv",
  },
  columns: [
    [
      {
        title: "Work experience",
        content: [
          {
            title: "Front-End Developer",
            subtitle: "Ubimo, A Quotient Brand",
            timeframe: {
              start: {
                month: 11,
                year: 2018,
              },
              end: 'present'
            },
            content: [
              <>
                Led the development of client-side web applications using ever-evolving modern
                Web technology.
              </>,
              <>
                Relocated from Tel-Aviv to help integrate the New York City
                system into the main platform.
              </>,
              <>
                Developed various generic development tools to increase team
                productivity and code stability
              </>,
              <>
                Helped rebuilt a generic OOH-Planning platform from scratch in a
                team of two developers as well as maintaining and enhancing a
                large scale self-service DSP for running campaign on media
              </>,
              <>Worked closely with product managers and stakeholders</>,
              <>Was part of two acquisitions</>
            ],
          },
        ],
      },
      {
        title: "Open Source Contribution",
        content: [
          {
            title: "OpenEar (Founder)",
            subtitle: "Ear training app for musicians",
            timeframe: {
              start: {
                month: 11,
                year: 2021,
              },
              end: "present",
            },
            content: [
              <>
                Envisioned, created and maintained the OpenEar open-source ear
                training app, which current has more then 3.5K active users</>,
            ],
          },
          {
            title: "Reactive Forms (Contribution)",
            subtitle: "A library for Angular forms",
            timeframe: {
              month: 10,
              year: 2010,
            },
            content: [
              <>
                Improved type definition for forms for the ngneat/react-forms
                repo (50 Forks in 590 stars)
              </>,
            ],
          },
        ],
      },
    ],
    [
      {
        title: "Education",
        content: [
          {
            title: "B.A. in Computer Science",
            subtitle: "University of Haifa",
            timeframe: {
              start: {
                month: 6,
                year: 2014,
              },
              end: {
                month: 8,
                year: 2018,
              },
            },
            content: [
              <>
                An accelerated program for talented youth, in
                parallel to High School.
              </>,
              <>Final average 89/100, without taking any test twice.</>,
            ],
          },
          {
            title: "The Program for Talented Youth in Math",
            subtitle: "Bar-Ilan University, Tel-Aviv",
            timeframe: {
              start: {
                month: 9,
                year: 2012,
              },
              end: {
                month: 7,
                year: 2015,
              },
            },
            content: [
              <>
                Special nation-wide program for talented youth in math (only
                about 30 students from the city of Haifa)
              </>,
            ],
          },
          {
            title: "High School",
            subtitle: "The Hebrew Reali School in Haifa",
            timeframe: {
              start: {
                month: 9,
                year: 2014,
              },
              end: {
                month: 7,
                year: 2017,
              },
            },
            content: [
            <>Final average for national High School exams (Bagrut): 93</>,
            <>
              Highest-level grouping in the following classes: Math (99),
              English (97), Art (96), Arabic (95), Music (96)
            </>,
            ],
          },
        ],
      },
      {
        title: "Skills",
        content: [
          "React",
          "Angular",
          "TypeScript",
          "GraphQL",
          "MongoDB",
          "RxJS",
          "Javascript",
          "HTML",
          "SCSS",
          "Tailwindcss",
          "styled-components",
          "Formik",
          "nodejs",
          "Ionic",
          "MongoDB",
        ],
        keywords: ["Full Stack", "back end", "back-end", "REST APIs", "javascript", "web development", "web design", "php", ".net", "API", "APIs", "REST", "design", "mysql", "angular js", "front end web", "computer science", "cs", "C.S.", "B.A.", "Bachelor's Degree", "Web Application", "web app", "web architecture", "architect", "system architecture", "software architecture", "languages", "programming", "coding", "node", "node.js", "nodejs", "react", "angular", "nextjs", "typescript", "graphql", "rxjs", "mongodb", "tailwindcss", "tailwind", "CSS", "Ruby", "Java", "python", "oracle", "front end languages", "programming languages", "project management skills", "attention to detail", "management skills", "organizational skills", "problem solving skills", "scrum", "agile", "scrum master", "excellent verbal communication", "designing", "2+", "3+", "4+", "5", "5+", "6", "years of experience", "user experience", "UX", "developer experience", "DX", "customer support", "relational databases", "databases", "DB", "SQL", "full-stack web development", "leadership", "mentorship", "collaborative", "highly motivated", "technical skills", "entrepreneurial spirit"]
      },
      // {
      //   title: "languages",
      //   content: [], // todo: think if we want this
      // },
    ],
  ],
};
