import Image from "next/image";

const AvatarStack = ({ avatars }) => {
  return (
    <div className="relative flex items-center">
      <Image
        src={avatars[0]}
        height={0}
        width={0}
        objectFit="contain"
        layout="responsive"
        className="z-10 relative right-[3.5rem] image-style container border-2 border-[#1B2C4F]"
        alt="logo"
      />
      <Image
        src={avatars[1]}
        height={0}
        width={0}
        objectFit="contain"
        layout="responsive"
        className="z-20 absolute right-[2.1rem] image-style container border-2 border-[#1B2C4F]"
        alt="logo"
      />
      <Image
        src={avatars[2]}
        height={0}
        width={0}
        objectFit="contain"
        layout="responsive"
        className="z-30 absolute right-[0.8rem] image-style container border-2 border-[#1B2C4F]"
        alt="logo"
      />
      <div className="z-40 absolute left-[0.5rem] container border-2 border-black text-black text-center">
        {avatars[3]}
      </div>
    </div>
  );
};

export default AvatarStack;
