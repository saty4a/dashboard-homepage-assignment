import { FaEllipsis } from "react-icons/fa6";
import { HiTrendingUp } from "react-icons/hi";
import CircularStyle from "./circularStyle";

const Consultation = () => {
  return (
    <div className="bg-[#1B2C4F] flex justify-evenly items-center mt-5 py-6 rounded-3xl w-[20rem] md:w-[21rem] lg:hover:-translate-y-1 hover:scale-110 hover:ease-in-out duration-300">
      <div className="my-5">
        <p className="text-sm font-medium text-[#CCCCCC]">Consultation</p>
        <p className="font-bold text-2xl">82/100</p>
        <div className="bg-[#2C3A58] mt-4 rounded-3xl flex px-1 py-1 gap-4 items-center justify-center mt-5">
          <p className="font-bold text-base">82%</p>
          <HiTrendingUp size={20} className="" />
        </div>
      </div>
      <div className="">
        <FaEllipsis size={20} className="ms-[4rem] text-black" />
        <CircularStyle
          classStyle={"consultation-circle"}
          container={"consultation-container"}
          image={""}
        />
      </div>
    </div>
  );
};

export default Consultation;
