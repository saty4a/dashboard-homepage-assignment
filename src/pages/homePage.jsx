import HomePageHeader from "@/components/homePageHeader";
import Profile from "@/components/profile";
import Schedule from "@/components/schedule";
import Statistics from "@/components/statistics";
import react from "react";

const HomePage = () => {
  return (
    <section className="homepage my-5 mx-2 flex flex-col lg:flex-row 2xl:w-[85rem] 2xl:justify-evenly">
      <div>
        <HomePageHeader />
        <Statistics />
        <Schedule />
      </div>
      <Profile />
    </section>
  );
};

export default HomePage;
