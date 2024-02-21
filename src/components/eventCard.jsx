import { FaArrowRight } from "react-icons/fa6";
import CircularStyle from "./circularStyle";
import { IoAlarmOutline } from "react-icons/io5";
import aliza from "../assets/aliza.png";

const EventCard = () => {
  return (
    <div className="bg-[#1B2C4F] rounded-3xl pb-5 mt-8 ms-5 w-[20rem] md:w-[21rem]">
      <div className="flex gap-3 pt-3 mb-5 mx-5">
        <div className="bg-[#409BEE] rounded-3xl px-3 py-1">
          <FaArrowRight
            size={20}
            className="mx-auto text-black cursor-pointer"
          />
        </div>
        <p className="font-bold text-base">Upcoming Events</p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mx-5 items-center justify-center">
        <CircularStyle
          classStyle={"event-circle"}
          container={"event-container"}
          image={aliza}
        />
        <div>
          <p className="font-bold text-xl">Aliza shah</p>
          <div className="flex gap-3 items-center">
            <IoAlarmOutline size={20} className="" />
            <p>08:00-09:00 Am</p>
          </div>
          <div className="bg-[#2C3A58] mt-4 rounded-3xl">
            <p className="font-medium text-xs text-center py-2">
              Visited 7 days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
