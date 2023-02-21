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
};

export const content: {
  name: string;
  title: string;
  about: string | ReactElement;
  contact: {
    email: string;
    phone: number;
    address: string;
    github: string;
  };
  sections: Section[];
} = {
  name: "Clay Herzberg",
  title: "Sr. Front-End Web Developer",
  about: (
    <>
      <p>
        I'm a skilled Front-End web developer with experience in React, Angular,
        TypeScript, GraphQL and other modern web technologies.
      </p>
      <p>
        I love innovating and finding better ways to solve problems, emphasizing
        both developer and user experience, while improving productivity and
        stability of code.
        {/*Through my years working as a developer, I've worked on various
        such tools, such as GraphQL query to typed-code in TS generation,
        automated code refactoring tools, improved typings for existing
        libraries ect.*/}
      </p>
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
    address: "Manhattan, New York",
    github: "ShacharHarshuv",
  },
  sections: [
    {
      title: "Work experience",
      content: [
        {
          title: "Sr. Front-End Tech-Lead",
          subtitle: "Quotient Technology Inc.",
          timeframe: {
            start: {
              month: 11,
              year: 2019,
            },
            end: "present",
          },
          content: [
            <>
              Led the development of client-side web applications using Angular
              with Typescript, RxJS, lodash and other tools.
            </>,
            <>
              Conducted code and design reviews, providing constructive feedback
              to junior developers to improve code quality and maintainability.
            </>,
            <>
              Mentored junior developers, providing guidance on coding best
              practices and troubleshooting techniques.
            </>,
            <>Led a SCRUM (Social CRM) agile team.</>,
            <>
              Relocated from Tel-Aviv to help integrate the New York City system
              into the main platform.
            </>,
            <>
              Improved runtime performance in various features of the platform,
              including very difficult, CPU-intensive flows.
            </>,
            <>
              Worked closely with product managers and stakeholders to
              understand project requirements and ensure the final product met
              user needs.
            </>,
            <>
              Developed various generic development tools to increase team
              productivity and code stability, including GQL query to
              typed-executable code generation, strictly typed forms solution,
              AST-based solution for programmatic refactoring of code, and
              various utilities for the testing library Jasmine for specific
              use-cases.
            </>,
          ],
        },
        {
          title: "Front-End Developer",
          subtitle: "Ubimo",
          timeframe: {
            start: {
              month: 11,
              year: 2018,
            },
            end: {
              month: 11,
              year: 2019,
            },
          },
          content: [
            <>
              Helped rebuilt a generic OOH-Planning platform from scratch in a
              team of two developers.
            </>,
            <>
              Transformed and maintained a self-managed DSP solution to a
              generic branded “CPG-Retailer” platform, after acquisition by
              Quotient Technology Inc
            </>,
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
              training app, using Angular with ionic.
            </>,
            <>
              Available on Google Play and App Store, with more then 3.5K active
              users
            </>,
            <>
              This app enables users to practice difference musical pattern
              recognition skills, which in turn helps in musical development.
            </>,
            <>
              This app has a polymorphic architecture that uses Function
              Programming principles to make it easy to expand it with more
              exercises, while reusing similar behaviors and a common exercise
              engine.
            </>,
            <>Check out code at: https://github.com/ShacharHarshuv/open-ear</>,
            <>
              Also created a complimentary tool to help add songs to the chord
              progression data base of the app, using react and Material UI.
              Available in:
              https://github.com/ShacharHarshuv/openear-progressions-transcriber
            </>,
          ],
        },
        {
          title: "Reactive Forms",
          subtitle: "A library for Angular forms",
          timeframe: {
            month: 10,
            year: 2010,
          },
          content: [
            <>
              Improved type definition for forms for the ngneat/react-forms repo
              (50 Forks in 590 stars)
            </>,
            <>PR available on github.com/ngneat/reactive-forms/pull/35</>,
          ],
        },
      ],
    },
    {
      title: "Formal education",
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
              Studied in an accelerated program for talented youth, in parallel
              to High School studied. Graduated one year after High School.
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
              Special nation-wide program for talented youth in math (only about
              30 students from the city of Haifa)
            </>,
            <>
              Finish High-School math finals in the 10th grade (two years early)
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
      title: "Technologies",
      content: [
        "React",
        "Angular",
        "TypeScript",
        "GraphQL",
        "MongoDB",
        "RxJS",
        "HTML",
        "SCSS",
        "Tailwindcss",
        "styled-components",
        "Formik",
        "nodejs",
        "Ionic",
        "MongoDB",
      ],
    },
    // {
    //   title: "languages",
    //   content: [], // todo: think if we want this
    // },
  ],
};
