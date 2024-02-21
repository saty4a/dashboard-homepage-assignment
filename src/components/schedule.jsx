import ActivePatients from "./activePatients";
import Consultation from "./consultation";
import TeamMeetingCard from "./teamMeetingCard";

const Schedule = () => {
  return (
    <div className="schedule-animation animate flex gap-2 flex-col md:flex-row">
      <div className="ms-5 mt-5">
        <p className="font-bold text-2xl text-center lg:text-start">
          Active Patients
        </p>
        <ActivePatients />
      </div>
      <div className="ms-5 mt-5">
        <p className="font-bold text-2xl text-center lg:text-start">
          Upcoming Events
        </p>
        <TeamMeetingCard />
        <Consultation />
      </div>
    </div>
  );
};

export default Schedule;
