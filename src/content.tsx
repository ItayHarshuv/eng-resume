import { ReactElement } from "react";
import { LanguageRow } from "./components/LanguageProficiency";
import { Time } from "./utility/time";

type Renderable = string | ReactElement;

export type Entry = {
  title: string;
  subtitle: string;
  timeframe?:
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
  name: "Itay Har-Shuv",
  title: "Full-Stack Developer Mobile & Web Apps",
  keywords: ["Full Stack Developer", "Engineer"],
  about: (
    <>
      <p>
        Computer Science B.Sc. graduate at the age of 19 and a Full-Stack Developer 
        with strong foundations in software design. Built a cross-platform research app 
        (iOS & Android) and contributed to open-source Angular projects. 
        Skilled in modern technologies and passionate about creating scalable,
        user-focused software solutions.
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
    email: "itay.hsh@gmail.com",
    phone: +972549985398,
    address: "European Union",
    github: "ItayHarshuv",
  },
  columns: [
    [
      {
        title: "Education",
        content: [
          {
            title: "B.Sc. in Computer Science",
            subtitle: "University of Haifa",
            timeframe: {
              start: {
                month: 6,
                year: 2018,
              },
              end: {
                month: 9,
                year: 2021,
              },
            },
            content: [
              <>
                An accelerated program for talented youth, in
                parallel to High School.
              </>,
              <>Final average 90/100</>,
            ],
          },
        ],
      },
      {
        title: "Work experience",
        content: [
          {
            title: "Full-Stack Developer",
            subtitle: "Ben-Gurion University of the Negev",
            timeframe: {
              start: {
                month: 1,
                year: 2023,
              },
              end: 'present',
            },
            content: [
              <>
                Built and launched a cross-platform (iOS & Android) research app for 40+ participants, improving data-collection efficiency and accuracy.
              </>,
              <>
                Designed a scalable backend using Node.js, TypeScript, MongoDB, REST APIs, handling 100K+ data entries with smooth frontend performance.
              </>,
              <>
                Developed an accessible Angular UI with 0% user complaints through close collaboration with the research group.

              </>,
              <>Integrating AI tools (Cursor, ChatGPT) resulting 3X faster development.</>,
              <>Reduced maintenance time by implementing component-based UI, clean code standards, and a Git workflow, enabling updates in &lt; 1 hour.</>,
              <>Expanded expertise through self-study of React Native, focusing on cross-platform UI and mobile deployment principles.</>,
            ],
          },
        ],
      },
      {
        title: "Skills",
        content: [
          "React",
          "Angular",
          "HTML5",
          "CSS3",
          "Node.js",
          "Express.js",
          "REST API",
          "MongoDB",
          "JavaScript",
          "TypeScript",
          "Java",
          "C#",
          "Python",
          "C++",
          "Git",
          "Firebase",
        ],
        keywords: ["Full-Stack Development", "Frontend Development", "Backend Development", "Web Development", "REST API", "API Design", "GraphQL", "JavaScript", "TypeScript", "React", "Angular", "Next.js", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "MongoDB", "MySQL", 
                    "PostgreSQL", "SQLite", "Redis", "Firebase", "Git", "GitHub", "Docker", "CI/CD", "Agile", "Scrum", "Project Management", "Problem Solving", "Team Collaboration", "Communication", "Leadership", "Mentorship", "Time Management", "Debugging", "Testing", "Unit Testing", 
                    "Integration Testing", "End-to-End Testing", "Test-Driven Development", "Code Reviews", "Performance Optimization", "Responsive Design", "Accessibility (a11y)", "Version Control", "Software Architecture", "System Design", "Data Modeling", "Database Design", "CRUD Operations", 
                    "DevOps", "Cloud Computing", "AWS", "Azure", "Google Cloud", "Kubernetes", "Serverless Computing", "Microservices", "Security", "DevSecOps", "Machine Learning", "Artificial Intelligence", "Data Engineering", "Data Visualization", "Big Data", "Event-Driven Architecture", "Message Queues","1+","2+","3+","4+","5+",
                    "Kafka", "RabbitMQ", "Build Automation", "Webpack", "Vite", "Prisma", "ORM", "NPM", "Command Line", "Linux", "Postman", "Swagger", "Jest", "Cypress", "Mocha", "Vercel", "Netlify", "Heroku", "DigitalOcean", "Performance Monitoring", "Clean Code", "Team Player", "Self-Learner", "Entrepreneurial Spirit", "Bachelor’s Degree", "Computer Science", "Programming", "Python", "Java", "C#", "C++", "Go", "Rust", "SQL", "NoSQL"
                  ],
      },
    ],
    [
      {
        title: "Open Source Contributions",
        content: [
          {
            title: "OpenEar",
            subtitle: "Ear training app for musicians",
            timeframe: {
              start: {
                month: 11,
                year: 2022,
              },
              end: "present",
            },
            content: [
              <>
                Collaborate via GitHub workflows (PRs, branching, code reviews) to improve UI performance and documentation.
              </>,
              <>
                Applied responsive design and Angular best practices for scalable, user-friendly interfaces.
              </>,
            ],
          },
        ],
      },
      {
        title: "Personal Projects",
        content: [
          {
            title: "University Projects",
            subtitle: "3D game with Unity and C#",
            timeframe: {
              start: {
                month: 10,
                year: 2020,
              },
              end: {
                month: 9,
                year: 2021,
              }
            },
            content: [
              <>
                Created a 3D educational game in Unity (C#) featuring physics-based interactions and intuitive UI.
              </>,
              <>
                Applied object-oriented programming principles (C++) in coursework, designing reusable class structures and efficient algorithms for problem-solving.  
              </>
            ],
          },
          {
            title: "High-School Final Project",
            subtitle: "Machine-learning model in Python",
            timeframe: {
              start: {
                month: 9,
                year: 2019,
              },
              end: {
                month: 6,
                year: 2020,
              }
            },
            content: [
              <>
                Built a machine-learning model (Python) to predict mushroom edibility using train-test split, preprocessing, and feature engineering.
              </>,
            ],
          },
          
        ]
      },
      {
        title: "Languages",
        content: [
          {
            title: "",
            subtitle: "",
            content: <LanguageRow name="English" level={5} />,
          },
          {
            title: "",
            subtitle: "",
            content: <LanguageRow name="Spanish" level={4} />,
          },
          {
            title: "",
            subtitle: "",
            content: <LanguageRow name="German" level={2} />,
          },
          {
            title: "",
            subtitle: "",
            content: <LanguageRow name="Hebrew" level={5} />,
          },
        ],
      },
      
    ],
  ],
};
