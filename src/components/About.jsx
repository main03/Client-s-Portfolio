import React from "react";
import DevImg from "./ui/DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Sheharyar Khalid",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92-3325535019",
  },
  {
    icon: <MailIcon size={20} />,
    text: "sheharyarkhalid154@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Sheharyar Khalid",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Ghauri Town Phase 5A Islamabad, Pakistan",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Szabist Islamabad",
        qualification: "Bachelor in Computer Science",
        years: "2019 - 2023",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "Peritus Engineering",
        qualification: "Full Stack Engineer",
        years: "2022 - 2023",
      },
      {
        company: "Tekrowe Digital",
        qualification: "Full Stack Engineer",
        years: "2023 - Present",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Frontend",
    data: [
      {
        name: "Frontend",
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Redux",
          "HTML",
          "CSS3",
          "JavaScript",
          "SCSS",
          "Tailwind CSS",
          "Bootstrap",
          "Material-UI",
          "shadcn",
          "Webpack",
        ],
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express.js", "Nest.js", "Spring Boot"],
      },
      {
        name: "Database Management",
        skills: [
          "SQL",
          "PostgreSQL",
          "MongoDB",
          "ORMs",
          "TypeORM",
          "Sequelize",
        ],
      },
      {
        name: "Tools",
        skills: ["Git", "GitHub", "Trello", "Jira", "Asana"],
      },
      {
        name: "Containerization",
        skills: ["Docker", "AWS Services", "EC2", "S3"],
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image  */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/dp1.png"
            />
          </div>

          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">personal info</TabsContent>
                <TabsContent value="qualification">
                  Qualification info
                </TabsContent>
                <TabsContent value="skills">Skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
