import Image from "next/image";
import React from "react";

const SkillsBox = ({ text, icon }) => {
  return (
    <>
      <span className="border-2 flex justify-center items-center text-black px-3 py-1.5 rounded-md gap-2">
        {icon}
        {text}
      </span>
    </>
  );
};

export default SkillsBox;
