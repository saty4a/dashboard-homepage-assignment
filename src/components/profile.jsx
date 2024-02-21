import Image from "next/image";
import person from "../assets/person.png";
import aliza from "../assets/aliza.png";
import alexa from "../assets/alexa.png";
import maira from "../assets/maira.png";
import AvatarStack from "./avatarStack";
import ChatCard from "./chatCard";
import CircularStyle from "./circularStyle";

const Profile = () => {
    const avatars = [
        aliza,
        maira,
        alexa,
        "8+"
      ]

    return(
        <div className="bg-[#111729] animate profile-animation rounded-3xl mx-5 px-5 my-10 flex flex-col items-center 2xl:me-[3rem] h-[60.5rem] gap-8">
            <CircularStyle classStyle={"profile-circle"} container={"profile-container"} image={person} />
            <div className="text-center">
            <h4 className="font-bold text-2xl">ALIAM COLTER</h4>
            <p className="font-medium text-base text-[#CCCCCC]">Physician</p>
            </div>
            <div className="bg-[#1C2A4E] flex justify-between items-center w-full md:w-2/3 lg:w-full rounded-3xl px-5 py-5">
                <p className="font-semibold text-lg">Active Patients</p>
                <AvatarStack avatars={avatars} />
            </div>
            <ChatCard />
        </div>
    )
}

export default Profile;