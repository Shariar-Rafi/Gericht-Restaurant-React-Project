import Container from "./layer/Container";
import React from "react";
import Image from "./layer/Image";
import fork from "../assets/fork.png";
import spoon from "../assets/spoon.png";
import Rectangle from "../assets/Rectangle.png";
import blender from "../assets/blender.jpg";
import Button from './layer/Button';

const SpecialMenu = () => {
  return (
    <div className="my-[152px] h-[100vh]">
      <Container>
        <div className="flex flex-col gap-y-2 justify-center items-center">
          <p className="text-[#ffffff] font-CU text-[23px] font-bold leading-[30px]">
            Menu that fits you palatte
          </p>
          <div className="flex justify-center  gap-x-2">
            <Image className="rotate-180 cursor-auto" src={fork} />
            <Image className="cursor-auto" src={spoon} />
          </div>
          <h3 className="text-[#dcca87] font-CU text-[64px] mb-16 font-semibold leading-[83px]">
            Today’s Special
          </h3>
        </div>

        <div className="flex gap-x-8 items-center justify-center">
          {/* ============================== */}
          <div>
            <h3 className="text-[#FFF] font-CU text-[45px] font-semibold leading-[58.5px] text-center mb-12">
              Wine & Beer
            </h3>

            <div className="flex flex-col gap-y-10">
              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center w-[192px] ">
                    Chapel Hill Shiraz


                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$56</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  AU | Bottle
                </p>
              </div>

              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center w-[192px] ">
                    Catena Malbec


                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$59</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  AU | Bottle
                </p>
              </div>

              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center  w-[192px]">
                    La Vieille Rosé


                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$44</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  FR | 750 ml
                </p>
              </div>

              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center  w-[192px]">
                    Rhino Pale Ale


                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$31</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  CA | 750 ml
                </p>
              </div>

              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center  w-[192px]">
                    Irish Guinness



                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$26</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  IE | 750 ml
                </p>
              </div>

            </div>

          </div>

          {/* ===================== */}
          <Image src={blender} />
          {/* ==================== */}
          <div>
            <h3 className="text-[#FFF] font-CU text-[45px] font-semibold leading-[58.5px] text-center mb-12">
              Cocktails
            </h3>

            <div className="flex flex-col gap-y-10">
              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center w-[192px] ">
                    Aperol Spritz



                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$20</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  Aperol | Villa Marchesi prosecco | soda | 30ml
                </p>
              </div>

              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center w-[192px] ">
                    Dark 'N' Stormy



                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$16</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  Dark rum | Ginger beer | Slice of lime.
                </p>
              </div>

              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center  w-[192px]">
                    Daiquiri


                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$10</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  Rum | Citrus juice | Sugar
                </p>
              </div>

              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center  w-[192px]">
                    Old Fashioned



                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$31</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  Bourbon | Brown sugar | Angostura Bitters
                </p>
              </div>

              <div>


                <div className="flex items-center gap-x-8">
                  <p className="text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] capitalize flex gap-x-8 items-center  w-[192px]">
                    Negroni



                  </p>

                  <Image src={Rectangle} />

                  <p className="text-[#FFF]">$26</p>
                </div>
                <p className="text-[#AAA] font-OS text-[16px] font-normal leading-7">
                  Gin | Sweet Vermouth | Campari | Orange garnish
                </p>
              </div>

            </div>

          </div>

          {/* ==================== */}

        </div>
        <div className="flex justify-center items-center mt-16 ">
          <Button className='w-[136px] ' text="View More" />
        </div>


      </Container>
    </div>
  );
};

export default SpecialMenu;
