import Image from "next/image";
import { DynaPuff, Titillium_Web } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: "200",
});
const dynaPuff = DynaPuff({ subsets: ["latin"] });

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
        className={`${titilliumWeb.className} flex min-h-screen flex-col items-center px-24`}
      >
        <div className="h-20 w-full flex justify-between">
          <div className="w-[25%] h-full flex items-center">
            <div
              className={`${dynaPuff.className} text-3xl text-blueText`}
            >{`{Hanzala Ahmed}`}</div>
          </div>
          <div className="h-full gap-12 flex items-center justify-between">
            <ul className="flex gap-7 text-grayText">
              <li className="text-lg">
                <Link href={""}>Home</Link>
              </li>
              <li className="text-lg">
                <Link href={""}>About</Link>
              </li>
              <li className="text-lg">
                <Link href={""}>Tech Stack</Link>
              </li>
              <li className="text-lg">
                <Link href={""}>Projects</Link>
              </li>
              <li className="text-lg">
                <Link href={""}>Contact</Link>
              </li>
            </ul>
            <div className="gap-7 flex">
              <Link href={""}>
                <Image src={"/githubIcon.svg"} alt="" width={25} height={25} />
              </Link>
              <Link href={""}>
                <Image src={"/twitterIcon.svg"} alt="" width={27} height={27} />
              </Link>
              <Link href={""}>
                <Image
                  src={"/linkedInIcon.svg"}
                  alt=""
                  width={26}
                  height={26}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full w-full mt-10 flex justify-between items-center py-10 mb-20 border-b-2">
          <div className="h-full w-[60%] text-justify flex justify-center flex-col text-xl">
            <p className="mb-5">
              {`Hi 🤝! My name is Hanzala Ahmed and I'm a frontend developer with
            2 years of experience. I've always been passionate
            about creating beautiful and functional websites and web
            applications, and I love the constant challenge of keeping up with
            the latest technologies and design trends.`}
            </p>
            <p className="mb-5">
              {`I have a strong background in HTML, CSS, JavaScript, and various frontend 
            frameworks like React and Next.Js. I'm also skilled in UX/UI design, 
            responsive design, and cross-browser compatibility. I've worked on a wide range
            of projects, from small business websites to large-scale web applications, and 
            I'm always eager to take on new challenges.`}
            </p>
          </div>
          <div className="w-[35%] h-full flex justify-center items-center">
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

        <div className="h-[400px] w-full mt-10 flex justify-between items-center py-10 border-b-2 mb-20"></div>
      </main>
    </>
  );
}
