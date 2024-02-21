import react from "react";
import { HiTrendingUp } from "react-icons/hi";
const PatientsVisitedCard = () => {
  return (
    <div className="flex ms-5 mt-10 rounded-3xl patient-card w-[20rem] md:w-[21rem] justify-around">
      <div className="mt-10">
        <h3 className="font-bold text-3xl">42</h3>
        <p className="mt-5 font-bold text-base">Patients Visited</p>
        <p className="font-medium text-xs">This Month</p>
      </div>
      <div className="rounded-full trend py-5 px-2 my-10">
        <HiTrendingUp size={20} className="mx-auto mt-1" />
        <p>70%</p>
      </div>
    </div>
  );
};

export default PatientsVisitedCard;
