"use client";
import Image from "next/image";

interface Props {
  img: string;
  description: string;
}

const Card: React.FC<Props> = ({ img, description }) => {
  return (
    <div className="flex items-center gap-[10px] bg-white p-[10px]">
      <Image src={img} alt="card" width={300} height={300} />
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
