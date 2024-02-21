import react from "react";
import { VscBellDot } from "react-icons/vsc";

const HomePageHeader = () => {
  return (
    <div className="homepage-header-animation animate slide-in flex flex-col items-center lg:flex-row gap-5">
      <p className="text-white mt-5 flex gap-2 lg:flex-col font-normal text-3xl mx-5">
        Hello
        <span className="font-extrabold">
          Dr.Colter! <span className="waving-hand">👋🏻</span>
        </span>
      </p>
      <input
        type="text"
        className="bg-[#2C3A58] rounded-2xl w-[20rem] md:w-[36rem] py-3 ps-4 mt-4 ms-5 lg:ms-0"
        placeholder=" 🔍 search"
      />
      <div className="bell-icon bg-[#409BEE] mb-5 me-10 mt-4 ms-5 lg:mb-0 lg:ms-0 hover:border hover:border-2 hover:border-white">
        <VscBellDot size={20} className="mx-auto mt-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default HomePageHeader;
