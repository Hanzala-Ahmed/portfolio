import { Kavoon } from "@next/font/google";

const kavoon = Kavoon({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div className=" h-20 w-[100vw] flex justify-evenly items-center">
      <div
        className={`${kavoon.className} w-[40%] h-[70%] flex items-center text-2xl`}
      >
        Hanzala Ahmed
      </div>
      <div className="w-[40%] h-[80%] flex justify-end items-center text-2xl">
        <label htmlFor="burger" className="burger">
          <input id="burger" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
