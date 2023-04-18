import { DynaPuff } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const dynaPuff = DynaPuff({ subsets: ["latin"] });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="h-20 w-full flex justify-between relative">
        <div className="w-fit h-full flex items-center">
          <div
            className={`${dynaPuff.className} w-fit text-2xl md:text-3xl text-blueText`}
          >{`{Hanzala Ahmed}`}</div>
        </div>
        {/* Desktop Nav */}
        <div className="zeroScreen:hidden h-full w-fit gap-12 navSm:flex items-center justify-between">
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
            <Link href={"https://github.com/Hanzala-Ahmed"} target="_blank">
              <Image src={"/githubIcon.svg"} alt="" width={25} height={25} />
            </Link>
            <Link href={""}>
              <Image src={"/twitterIcon.svg"} alt="" width={27} height={27} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/hanzala-ahmed-433535170/"}
              target="_blank"
            >
              <Image src={"/linkedInIcon.svg"} alt="" width={26} height={26} />
            </Link>
          </div>
        </div>

        {/* Mobile View Menu */}
        <div className="navSm:hidden zeroScreen:flex items-center justify-between">
          {isMenuOpen ? (
            <Image
              alt=""
              src={"/closeIcon.svg"}
              className="w-10 h-10 cursor-pointer"
              width={50}
              height={50}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          ) : (
            <Image
              alt=""
              src={"/menuIcon.svg"}
              className="w-10 h-10 cursor-pointer"
              width={50}
              height={50}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          )}
        </div>

        {isMenuOpen && (
          <div className="z-30 navSm:hidden zeroScreen:flex flex-col items-end gap-10 absolute bg-blueBg top-24 w-[200px] rounded-xl right-0 p-6">
            <ul className="flex gap-7 text-white flex-col text-right">
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
              <Link href={"https://github.com/Hanzala-Ahmed"} target="_blank">
                <Image
                  src={"/githubWhiteIcon.svg"}
                  alt=""
                  width={25}
                  height={25}
                />
              </Link>
              <Link href={""}>
                <Image
                  src={"/twitterWhiteIcon.svg"}
                  alt=""
                  width={27}
                  height={27}
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/hanzala-ahmed-433535170/"}
                target="_blank"
              >
                <Image
                  src={"/linkedInWhiteIcon.svg"}
                  alt=""
                  width={26}
                  height={26}
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
