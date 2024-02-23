import Image from "next/image";
import { useState } from "react";
import person from "../assets/person.png";
import aliza from "../assets/aliza.png";
import alexa from "../assets/alexa.png";
import maira from "../assets/maira.png";
import AvatarStack from "./avatarStack";
import ChatCard from "./chatCard";
import CircularStyle from "./circularStyle";
import { sendEmail } from "@/apiCalls/postData";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const avatars = [aliza, maira, alexa, "8+"];
  const [inputText, setInputText] = useState("")

  const handleSubscribe = () => {
    if (inputText !== "") {
        sendEmail(inputText).then((response) => {
            if (response.data.success) {
                setInputText("")
                toast.success(response.data.message, {
                    position: "top-center"
                })
            }
            else{
                toast.error(response.data.message, {
                    position: "top-center"
                })
            }
        })
    }
    else{
        toast.error("field cannot be empty", {
            position: "top-center"
        })
    }
    }

  return (
    <div className="bg-[#111729] animate profile-animation rounded-3xl mx-5 px-5 my-10 flex flex-col items-center 2xl:me-[3rem] h-[60.5rem] gap-8">
      <CircularStyle
        classStyle={"profile-circle"}
        container={"profile-container"}
        image={person}
      />
      <div className="text-center">
        <h4 className="font-bold text-2xl">ALIAM COLTER</h4>
        <p className="font-medium text-base text-[#CCCCCC]">Physician</p>
      </div>
      <div className="bg-[#1C2A4E] flex justify-between items-center w-full md:w-2/3 lg:w-full rounded-3xl px-5 py-5">
        <p className="font-semibold text-lg">Active Patients</p>
        <AvatarStack avatars={avatars} />
      </div>
      <div className="flex justify-center w-full ">
        <input
          type="email"
          placeholder="Enter your email"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="text-black ps-2 h-[50px] border-2 border-e-0 rounded-s-xl overflow-auto"
        ></input>
        <button
          onClick={handleSubscribe}
          className="bg-indigo-500 px-5 text-white rounded-e-xl text-base border hover:border-black shadow hover:shadow-lg"
        >
          Subscribe
        </button>
      </div>
      <ChatCard />
      <ToastContainer />
    </div>
  );
};

export default Profile;
