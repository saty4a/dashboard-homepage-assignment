import Image from "next/image";

const CircularStyle = ({ classStyle, container, image }) => {
  return (
    <div className={`${classStyle} flex items-center justify-center`}>
      <div className={`${container}`}>
        {image && (
          <Image
            src={image}
            height={0}
            width={0}
            objectFit="contain"
            layout="responsive"
            className=""
            alt="logo"
          />
        )}
      </div>
    </div>
  );
};

export default CircularStyle;
