import Image from "next/image";
import alexa from "../assets/alexa.png";
import person from "../assets/person.png";
import { BiMicrophone } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";

const ChatCard = () => {
  const messages = [
    { text: "Hi, Doctor.", img: alexa, sender: "patient" },
    {
      text: "I got knee jerk. What should i do right now?",
      img: alexa,
      sender: "patient",
    },
    { text: "Hi, Alexa.", img: person, sender: "doctor" },
    {
      text: "This help maintain balance and posture. dont worry.",
      img: person,
      sender: "doctor",
    },
  ];

  const chatText = (textClass, text, sender) => {
    return (
      <div
        className={`flex flex-col ${sender === "doctor" ? `items-end` : ""} `}
      >
        <div
          className={`${textClass} my-2 rounded-full ${
            sender === "doctor" ? `bg-[#BDD8F0]` : `bg-[#F1F1F1]`
          }`}
        >
          <p className={`font-medium text-xs text-black`}>{text}</p>
        </div>
        <p
          className={`text-[#CCCCCC] font-semibold text-xs ${
            sender === "doctor" ? `me-3` : "ms-3"
          }`}
        >
          Tue 02:32pm
        </p>
      </div>
    );
  };

  return (
    <div className="bg-[#1C2A4E] rounded-3xl h-[30rem] pt-4 mb-5 ">
      <div className="flex justify-between items-center mx-4 my-1">
        <div className="flex items-center">
          <Image
            src={alexa}
            height={0}
            width={0}
            objectFit="contain"
            layout="responsive"
            className="chat-image-style border-2 border-[#1B2C4F]"
            alt="logo"
          />
          <div className="ms-3">
            <p className="font-bold text-base">Alexa Max</p>
            <p className="font-medium text-xs text-[#CCCCCC]">
              Active 5 min ago
            </p>
          </div>
        </div>
        <div className="bell-icon bg-[#2C3A58] text-[#409BEE] ">
          <FaPhone size={20} className="mx-auto mt-2 cursor-pointer" />
        </div>
      </div>
      <hr className="w-[16rem] md:w-[22rem] mx-3 mt-3 border-white" />
      <div className="chat-screen mt-0">
        <div className="messages-container">
          {messages &&
            messages.map((message, index) => (
              <div key={index} className={`message ${message?.sender} gap-2`}>
                <Image
                  src={message?.img}
                  height={0}
                  width={0}
                  objectFit="contain"
                  layout="responsive"
                  className={`${
                    message.sender === "doctor" ? "order-last me-5" : "ms-5"
                  } mb-4 image-style container border-2 border-[#1B2C4F]`}
                  alt="logo"
                />
                {chatText("message-text", message?.text, message.sender)}
              </div>
            ))}
        </div>
        <div className="bg-[#2C3A58] flex rounded-3xl items-center justify-evenly my-2 mx-2 py-2 px-3 md:px-0">
          <BiMicrophone size={20} className="cursor-pointer" />
          <input
            type="text"
            placeholder="Type your text....."
            className="bg-transparent outline-none"
          />
          <div className="bell-icon bg-[#409BEE]">
            <FiSend size={20} className="mx-auto mt-[0.6rem] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
