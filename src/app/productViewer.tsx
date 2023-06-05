import React from "react";
import Image from "next/image";
import arrow from "../../public/arrow.svg";

export default function ProductViewer() {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-[600px] max-w-[1300px] m-auto relative mb-[3rem]">
        <div className="relative">
          <h1 className="font-Gazzetta instrument-header">Gatekeeper</h1>
          <div className="absolute left-0 top-[50%] bg-opacity-[0.7] h-[50px] w-[50px] translate-y-[-50%] bg-background rounded-full flex justify-center items-center">
            <Image
              className=" rotate-[-90deg] w-[20px] mr-[5px] fill-whiteColor invert"
              src={arrow}
              alt="arrowleft"
            />
          </div>
          <div className="absolute right-0 top-[50%] h-[50px] w-[50px] translate-y-[-50%] bg-background rounded-full flex justify-center items-center bg-opacity-[0.7]">
            <Image
              className=" rotate-[90deg] w-[20px] mr-[-5px] invert"
              src={arrow}
              alt="arrowleft"
            />
          </div>
          <Image
            alt="guitar placeholder"
            width={1536}
            height={726}
            src="/guitar-placeholder1.png"
            className="instrument"
          />
        </div>

        <h2 className="instrument-primary-tooltip">
          24 fret guitar
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </h4>
        </h2>
        <h2 className="text-accent font-verveine font-bold absolute right-[35rem] top-[7rem] rotate-[10deg]">
          NEW!
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row max-w-[1300px] ml-auto mr-auto gap-10">
        <div className="flex flex-col flex-1 gap-y-10">
          {/* <div className="flex flex-col">
            <label className=" text-secondary">Designed</label>
            <label>Charles Farmiloe</label>
          </div>
          <div className="flex flex-col">
            <label className=" text-secondary">Frets</label>
            <label>24</label>
          </div> */}
          <button>ORDER NOW</button>
        </div>
        <div className="images flex justify-end gap-[40px] flex-[3]">
          <div className="flex flex-col gap-5 flex-1 uppercase font-bold">
            <Image
              alt="guitar placeholder"
              width={800}
              height={400}
              src="http://davefarmiloe.com/wp-content/uploads/2022/08/T42-6.jpg"
              className="h-[10rem] object-cover rounded-xl"
            />
            <h5>
              Hardware fitted - Charlie Christian design neck and bridge pickups
            </h5>
          </div>
          <div className="flex flex-col gap-5 flex-1 uppercase font-bold">
            <Image
              alt="guitar placeholder"
              width={800}
              height={400}
              src="http://davefarmiloe.com/wp-content/uploads/2022/08/T42-10.jpg"
              className="h-[10rem] object-cover rounded-xl"
            />
            <h5>A bespoke design from Farmiloe</h5>
          </div>
          <div className="flex flex-col gap-5 flex-1 uppercase font-bold">
            <Image
              alt="guitar placeholder"
              width={800}
              height={400}
              src="http://davefarmiloe.com/wp-content/uploads/2022/09/T42-Front.jpg"
              className="h-[10rem] object-cover rounded-xl"
            />
            <h5>Constructed with backset single action truss rod</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
