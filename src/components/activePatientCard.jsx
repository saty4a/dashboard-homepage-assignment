import Image from "next/image";
import { IoAlarmOutline } from "react-icons/io5";

const ActivePatientCard = ({ duration, image, name }) => {
  return (
    <div className="rounded-3xl bg-[#F5E5E5] flex items-center px-5 my-3 w-[15rem] gap-4 lg:hover:-translate-y-1 hover:scale-110 hover:ease-in-out duration-300">
      <Image
        src={image && image}
        height={0}
        width={0}
        objectFit="contain"
        layout="responsive"
        className="image-style container border-2 border-[#1B2C4F]"
        alt="logo"
      />
      <div className="text-black">
        <p className="font-bold text-xl">{name && name}</p>
        <div className="flex gap-1 items-center">
          <IoAlarmOutline size={20} className="" />
          <p className="">{duration && duration}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivePatientCard;
