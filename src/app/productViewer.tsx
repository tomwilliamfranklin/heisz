import React from "react";
import Image from "next/image";
import arrow from "../../public/arrow.svg";

export default function ProductViewer() {
  return (
    <div className="relative w-full h-full">
      <div className="w-full max-w-[1500px] m-auto relative">
        <div className="relative flex justify-center mt-10 mb-20">
          {/* <h1 className="font-Gazzetta instrument-header">Gatekeeper</h1> */}
          <Image
            className="instrument"
            alt="guitar placeholder"
            width={1536}
            height={726}
            src="/guitar-placeholder1.png"
          />
          <div className="button-alt left-0">
            <Image
              className=" rotate-[-90deg] w-[20px] mr-[5px] fill-whiteColor invert"
              src={arrow}
              alt="arrowleft"
            />
          </div>
          <div className="button-alt right-0">
            <Image
              className=" rotate-[90deg] w-[20px] mr-[-5px] invert"
              src={arrow}
              alt="arrowleft"
            />
          </div>
          <h2 className="highlighter-outline absolute right-[42%] top-[20%] rotate-[10deg]">
            NEW!
          </h2>
          <h2 className="highlighter-outline absolute right-[30%] bottom-[20%] rotate-[0deg]">
            Gatekeeper
          </h2>
        </div>
        <div className="flex justify-between gap-10 flex-wrap">
          <div className="instrument-primary-tooltip flex flex-col max-w-xl flex-[3] min-w-[400px]">
            <h2>24 fret guitar</h2>
            <h4 className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </h4>
            <button className="mt-10">ORDER NOW</button>
          </div>

          <h5 className="instrument-secondary-tooltip flex-1 min-w-[300px] max-w-[400px] text-greyColor xl:top-[-50px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </h5>
          <h5 className="instrument-secondary-tooltip flex-1 min-w-[300px] max-w-[400px] text-greyColor xl:top-[-150px]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h5>
        </div>
      </div>
      <div className="flex flex-col max-w-[1500px] ml-auto mr-auto gap-10 mt-10 lg:flex-row">
        <div className="flex flex-col gap-y-10 xl:flex-[2]">
          {/* <div className="flex flex-col">
            <label className=" text-secondary">Designed</label>
            <label>Charles Farmiloe</label>
          </div>
          <div className="flex flex-col">
            <label className=" text-secondary">Frets</label>
            <label>24</label>
          </div> */}
        </div>
        <div className="images flex justify-end gap-[40px] flex-[3] xl:mt-[-150px]">
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
