"use client";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  img: string;
  direction?: "vertical" | "horizontal";
  onClick?: (imgName: string) => void;
  className?: string;
  targetImg?: string;
}

const Card: React.FC<Props> = ({
  img,
  direction = "horizontal",
  onClick,
  className,
  targetImg,
}) => {
  const size = direction === "horizontal" ? 300 : 500;
  return (
    <div
      className={clsx(
        "card",
        "flex cursor-pointer items-center gap-[10px] bg-white p-[10px] ",
        {
          "flex-row": direction === "horizontal",
          "flex-col": direction === "vertical",
        },
      )}
    >
      <Image
        data-src={img}
        onClick={(e) => onClick?.(img)}
        className={clsx({
          target: img === targetImg,
        })}
        src={img}
        alt="card"
        width={size}
        height={size}
        style={{
          aspectRatio: 1,
        }}
      />
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quod voluptatem quos voluptate
        voluptatum, quas doloribus quae quidem. Quisquam voluptatibus,
        quibusdam, quia, quod voluptatem quos voluptate voluptatum, quas
        doloribus quae quidem. Quisquam voluptatibus, quibusdam, quia, quod
        voluptatem quos voluptate voluptatum, quas doloribus quae quidem.
        Quisquam voluptatibus, quibusdam, quia, quod voluptatem quos voluptate
      </p>
    </div>
  );
};

export default Card;
