import Image from "next/image";
import { Dancing_Script, DynaPuff, Titillium_Web } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import Header from "@/components/Header";
import { stackData } from "@/public/utils/helper";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: "200",
});
const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hanzala Ahmed - Software Engineer | Frontend Developer</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <main
        className={`${titilliumWeb.className} flex min-h-screen flex-col items-center md:px-32 md:py-0 p-5`}
      >
        <Header />

        <div className="h-full w-full mt-10 flex justify-between items-center py-10 mb-20 lg:flex-row flex-col">
          <div className="h-full w-full lg:w-[56%] text-center lg:text-justify flex justify-center flex-col text-xl">
            <div className="font-extrabold text-4xl mb-5">
              Hi 🤝<sup className="text-pinkText text-lg">{`}`}</sup>,{" "}
              <p className="mb-2">My name is</p>{" "}
              <p className={`${dancingScript.className} text-blueText mb-2`}>
                Hanzala Ahmed
              </p>
            </div>
            <p className="my-3">
              {`I'm a frontend developer with
            2 years of experience. I've always been passionate
            about creating beautiful and functional websites and web
            applications, and I love the constant challenge of keeping up with
            the latest technologies and design trends.`}
            </p>
            <p className="my-3">
              {`I have a strong background in HTML, CSS, JavaScript, and various frontend 
            frameworks like React and Next.Js. I'm also skilled in UX/UI design, 
            responsive design, and cross-browser compatibility. I've worked on a wide range
            of projects, from small business websites to large-scale web applications, and 
            I'm always eager to take on new challenges.`}
            </p>
          </div>
          <div className="h-full flex justify-center items-center my-14">
            <div className="w-72 h-72 border-4 border-blueBorder p-2 rounded-full">
              <Image
                src={"/pic.jpg"}
                alt=""
                width={400}
                height={400}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="h-fit w-full flex flex-col justify-center items-center mb-20">
          <div className="w-fit flex flex-col items-center">
            <p className="font-extrabold text-4xl text-blueText">
              My Teck Stack
            </p>
            <p className="text-grayText mt-4 text-xl text-center">
              Technologies I’ve been working with recently
            </p>
          </div>
          <div className="w-[80%] h-fit flex gap-14 mt-14 justify-center items-center flex-wrap">
            {stackData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  alt=""
                  src={item.src}
                  width={50}
                  height={50}
                  className="w-16 h-16"
                />
                <span className="text-white text-[10px] px-3 py-0.5 bg-blueBg mt-2 rounded-full">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
