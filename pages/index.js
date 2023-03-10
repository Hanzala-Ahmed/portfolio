import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineHtml5,
} from "react-icons/ai";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiGit,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiRedux,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import SkillsBox from "../components/SkillsBox";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} relative`}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="lg:flex-row flex-col-reverse flex justify-between items-center gap-20 w-full">
            <div className="mx-auto bg-gradient-to-b from-teal-500 lg:mb-40 rounded-full relative overflow-hidden mt-6 h-[356px] w-[450px]">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
            <div className="text-center w-[80%]">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Hanzala Ahmed
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl font-mono">
                MERN Developer
              </h3>

              <p className="text-md py-5 px-4 leading-8 text-gray-800 dark:text-gray-200 max-w-xxl mx-auto md:text-xl text-center">
                My name is Chaitanya Gupta, I am a Full Stack Web Developer and
                Web Designer. An Open Source enthusiast and a Computer Science
                student from India. I love working on new and exciting
                technologies emerging nowadays. I have good work experience as a
                MERN Stack Developer in startup(s) and UI/UX Designer where I
                was core member of the development team and done quite some
                contribution to open source as well.
              </p>
              <h3 className="text-2xl py-2 dark:text-white text-gray-600 md:text-3xl font-mono font-bold">
                Tech i'm familiar with
              </h3>
              <div className="text-center shadow-lg p-10 rounded-xl my-4 dark:bg-white bg-gray-100 flex-1">
                <div className="text-1xl flex justify-center gap-6 py-3 text-gray-600 dark:text-gray-400 flex-wrap">
                  <SkillsBox text={"HTML5"} icon={<FaHtml5 />} />
                  <SkillsBox text={"CSS3"} icon={<FaCss3 />} />
                  <SkillsBox text={"SAAS"} />
                  <SkillsBox text={"Bootstrap"} icon={<SiBootstrap />} />
                  <SkillsBox text={"JavaScript"} icon={<FaJs />} />
                  <SkillsBox text={"TypeScript"} icon={<SiTypescript />} />
                  <SkillsBox text={"React"} icon={<FaReact />} />
                  <SkillsBox text={"Redux"} icon={<SiRedux />} />
                  <SkillsBox text={"Next.Js"} icon={<SiNextdotjs />} />
                  <SkillsBox text={"Jest"} icon={<SiJest />} />
                  <SkillsBox text={"Webpack"} icon={<SiWebpack />} />
                  <SkillsBox text={"Node.js"} icon={<SiNodedotjs />} />
                  <SkillsBox text={"Express.js"} icon={<SiExpress />} />
                  <SkillsBox text={"MongoDB"} icon={<SiMongodb />} />
                  <SkillsBox text={"Firebase"} icon={<SiFirebase />} />
                  <SkillsBox text={"Python"} icon={<SiPython />} />
                  <SkillsBox text={"Git"} icon={<SiGit />} />
                </div>
              </div>

              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 sticky top-0">
                <a href="" alt="">
                  <AiFillTwitterCircle />
                </a>
                <a href="" alt="">
                  <AiFillLinkedin />
                </a>
                <a href="" alt="">
                  <AiFillYoutube />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="md:mt-24 mt-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
