import react from "react";
import ActivePatientCard from "./activePatientCard";
import mark from "../assets/mark.png";
import maira from "../assets/maira.png";
import brick from "../assets/brick.png";
import alexa from "../assets/alexa.png";
const ActivePatients = () => {
  const segments = [
    { length: 8 },
    { length: 8 },
    { length: 8 },
    { length: 8 },
    { length: 8 },
    { length: 8 },
  ];

  const BreakCard = () => {
    return (
      <div className="bg-[#111729] rounded-3xl relative w-[15rem] my-3 lg:hover:-translate-y-1 hover:scale-110 hover:ease-in-out duration-300">
        <p className="font-semibold text-xs text-[#CCCCCC] px-5 py-2 text-center">
          Break Time
        </p>
      </div>
    );
  };

  const todaySchedule = [
    {
      time: "08:00 am",
      card: (
        <ActivePatientCard
          duration={"08:00-09:00 am"}
          image={mark}
          name={"Mark Jaxon"}
        />
      ),
      place: 1,
    },
    {
      time: "09:00 am",
      card: (
        <ActivePatientCard
          duration={"09:00-10:00 am"}
          image={maira}
          name={"Maira Khan"}
        />
      ),
      place: 0,
    },
    {
      time: "10:00 am",
      card: (
        <ActivePatientCard
          duration={"10:00-11:00 am"}
          image={brick}
          name={"Brick Zon"}
        />
      ),
      place: 5,
    },
    { time: "11:00 am", card: <BreakCard />, place: 3 },
    {
      time: "12:00 am",
      card: (
        <ActivePatientCard
          duration={"12:00-13:00 am"}
          image={alexa}
          name={"Alexa Max"}
        />
      ),
      place: 1,
    },
  ];

  const ScheduleDetails = ({ value, card }) => {
    return (
      <div className="horizontal-divided-line gap-1 w-full lg:w-1/2">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="line" style={{ width: segment.length }}></div>
            {value === index ? <div className="divider">{card}</div> : ""}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#1B2C4F] rounded-3xl mt-6 w-[20rem] md:w-[22rem] lg:w-[28rem] pe-9 mb-5">
      {todaySchedule &&
        todaySchedule.map((data, index) => (
          <div
            className="flex flex-col lg:flex-row items-center justif-start gap-2 mt-2 ms-0 md:ms-4"
            key={index}
          >
            <p className="pe-5 mt-3 md:mt-0">{data.time}</p>
            <ScheduleDetails value={data.place} card={data.card} />
          </div>
        ))}
    </div>
  );
};

export default ActivePatients;
