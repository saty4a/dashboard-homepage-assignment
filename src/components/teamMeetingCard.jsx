import { FaRegBell } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoAlarmOutline } from "react-icons/io5";
import mark from "../assets/mark.png";
import maira from "../assets/maira.png";
import brick from "../assets/brick.png";
import AvatarStack from "./avatarStack";

const TeamMeetingCard = () => {
  const avatars = [mark, maira, brick, "4+"];

  return (
    <div className="bg-[#1B2C4F] rounded-3xl mt-5 py-6 w-[20rem] md:w-[21rem] lg:hover:-translate-y-1 hover:scale-110 hover:ease-in-out duration-300">
      <div className="flex items-center justify-evenly gap-5">
        <div>
          <p className="font-bold text-xl mt-3">Team Meeting</p>
          <div className="flex gap-1 items-center text-[#DCDCDC]">
            <IoAlarmOutline size={20} className="" />
            <p className="font-medium text-xs">05:00-06:00</p>
          </div>
        </div>
        <div className="bell-icon bg-[#2C3A58] mb-5 mt-4 ms-5 lg:mb-0 lg:ms-0">
          <FaRegBell size={20} className="mx-auto mt-2 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-around ms-[3.6rem] mt-8 pb-3">
        <AvatarStack avatars={avatars} />
        <div className="bg-[#409BEE] rounded-3xl px-3 py-1 ms-5">
          <FaArrowRight
            size={20}
            className="mx-auto text-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMeetingCard;
