import react from "react";
import Image from "next/image";
import gradient from "../assets/gradient.png";
import wave from "../assets/wave.png";
import { FaAngleDown, FaRegMessage } from "react-icons/fa6";
import { HiTrendingUp } from "react-icons/hi";
import CircularStyle from "./circularStyle";

const StatisticsChart = () => {
  return (
    <div className="bg-[#1B2C4F] rounded-3xl ms-4 px-5 pb-2 mt-9 h-[25rem] w-[20rem] md:w-[27.6rem] me-5 lg:hover:-translate-y-1 hover:scale-110 hover:ease-in-out duration-300">
      <div className="flex justify-between items-center mx-4 my-6 w-full">
        <div>
          <h4 className="font-bold text-2xl mt-2">Statistics</h4>
          <p className="font-medium text-base text-[#DCDCDC]">November 2023</p>
        </div>
        <div className="flex gap-2 me-5 font-medium items-center rounded-xl border-2 border-[#409BEE] text-[#DCDCDC] px-3 py-2 border hover:border-black shadow hover:shadow-lg">
          <span className="text-xs font-semibold">Weekly</span>
          <FaAngleDown className="cursor-pointer" size={20} />
        </div>
      </div>
      <div className="relative">
        <div className="bg-[#111729] w-[5rem] py-[0.5rem] px-1 rounded-2xl flex justify-evenly items-center absolute left-[7.4rem] top-[1rem] lg:left-[9.4rem] lg:top-[1.8rem]">
          <p>82%</p>
          <HiTrendingUp size={20} className="" />
        </div>
        <Image
          src={wave}
          height={0}
          width={0}
          objectFit="contain"
          layout="responsive"
          className="absolute top-7 left-[0.8rem] wave-gradient"
          alt="logo"
        />
        <Image
          src={gradient}
          height={0}
          width={0}
          objectFit="contain"
          layout="responsive"
          className=""
          alt="logo"
        />
        <div className="absolute bottom-[2.9rem] left-[7.1rem] md:bottom-[3.9rem] lg:bottom-[7.1rem] lg:left-[9.3rem]">
          <div className="indicator-circle absolute bottom-[2.4rem] left-[1.5rem]"></div>
          <div className="indicator-line"></div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
