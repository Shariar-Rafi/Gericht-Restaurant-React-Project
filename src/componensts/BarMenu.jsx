import React from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import Listitem from "./layer/Listitem";
import bg from "../assets/glass.jpg";
const BarMenu = () => {
  return (
    <div className="h-[100vh]">
      <div className="relative ">
        <Image className="absolute w-full cursor-default" src={bg} />
      </div>
      <Container className="bg-slate-500 z-40">
        <ul className="flex flex-col gap-y-16 text-[#fff] absolute mt-[262px]     ">
          <Listitem className="text-[64px] font-semibold leading-[84px] capitalize font-CU  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-[261px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" text="Bar Menu" />
          <Listitem className="text-[64px] font-semibold leading-[84px] capitalize font-CU  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-[289px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" text="Food Menu" />
          <Listitem className="text-[64px] font-semibold leading-[84px] capitalize font-CU  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-[378px] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" text="Desserts Menu" />
        </ul>
      </Container>
    </div>
  )
}

export default BarMenu;
