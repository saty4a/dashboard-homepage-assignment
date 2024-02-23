import { getText } from "@/apiCalls/fetchData";
import react, { useEffect, useState } from "react";
import { VscBellDot } from "react-icons/vsc";

const HomePageHeader = () => {
  const [changeText, setChangeText] = useState("");

  useEffect(() => {
    getText("header").then((res) => {
      if (res.data.success) {
        setChangeText(res.data.textData.text);
      }
    })
  },[])

  return (
    <div className="homepage-header-animation animate slide-in flex flex-col items-center lg:flex-row gap-5">
      <p className="text-white mt-5 flex gap-2 lg:flex-col font-normal text-3xl mx-5 lg:me-0 font-extrabold">
      {changeText ? `${changeText.split(",")[0]}` : "Hello,"}
        <span className="font-extrabold">
        {changeText ? `${changeText.split(",")[1]}` : "Dr.Colter!"} 👋🏻
        </span>
      </p>
      <input
        type="text"
        className="bg-[#2C3A58] rounded-2xl w-[20rem] md:w-[33rem] py-3 ps-4 mt-4"
        placeholder=" 🔍 search"
      />
      <div className="bell-icon bg-[#409BEE] mb-5 me-10 mt-4 ms-5 lg:mb-0 lg:ms-0 hover:border hover:border-2 hover:border-white">
        <VscBellDot size={20} className="mx-auto mt-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default HomePageHeader;
