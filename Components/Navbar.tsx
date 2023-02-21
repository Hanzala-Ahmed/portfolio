import { Box } from "@chakra-ui/react";
import { Kavoon } from "@next/font/google";

const kavoon = Kavoon({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <Box width="100%">
      <Box
        className={`${kavoon.className} w-[40%] h-[70%] flex items-center text-2xl`}
      ></Box>
      <Box className="w-[40%] h-[80%] flex justify-end items-center text-2xl">
        <label htmlFor="burger" className="burger">
          <input id="burger" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </Box>
    </Box>
    // <Box className=" h-20 w-[100vw] flex justify-evenly items-center">
    //   <Box
    //     className={`${kavoon.className} w-[40%] h-[70%] flex items-center text-2xl`}
    //   >
    //     Hanzala Ahmed
    //   </Box>
    //   <Box className="w-[40%] h-[80%] flex justify-end items-center text-2xl">
    //     <label htmlFor="burger" className="burger">
    //       <input id="burger" type="checkbox" />
    //       <span></span>
    //       <span></span>
    //       <span></span>
    //     </label>
    //   </Box>
    // </Box>
  );
};

export default Navbar;
