import react from "react";
import PatientsVisitedCard from "./patientsVisitedCard";
import EventCard from "./eventCard";
import StatisticsChart from "./statisticsChart";

const Statistics = () => {
  return (
    <div className="statistic-animation animate flex flex-col md:flex-row gap-5 items-start md:items-center">
      <div>
        <PatientsVisitedCard />
        <EventCard />
      </div>
      <StatisticsChart />
    </div>
  );
};

export default Statistics;
