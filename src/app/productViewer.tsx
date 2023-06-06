"use client";

import React, { useState } from "react";
import Image from "next/image";
import arrow from "../../public/arrow.svg";
import classNames from "classnames";

export type Product = {
  image: string;
  name: string;
  tags?: { label: string; posX: number; posY: number; rotate: number }[];
};

export default function ProductViewer() {
  const products: Product[] = [
    {
      image: "guitar-placeholder1.png",
      name: "T-42",
      tags: [
        { label: "T-42", posX: 30, posY: 65, rotate: 0 },
        { label: "NEW!", posX: 40, posY: 20, rotate: 10 },
      ],
    },
    // {
    //   image: "guitar-placeholder2.png",
    //   name: "Gatekeeper",
    //   tags: [
    //     { label: "Gatekeeper", posX: 20, posY: 20, rotate: 0 },
    //     { label: "THE ORIGINAL", posX: 20, posY: 70, rotate: -20 },
    //   ],
    // },
    {
      image: "guitar-placeholder3.png",
      name: "The Shrek",
      tags: [{ label: "THE SHREK", posX: 20, posY: 70, rotate: 0 }],
    },
    {
      image: "guitar-placeholder4.png",
      name: "Gatesmasher",
      tags: [{ label: "GATESMASHER", posX: 20, posY: 70, rotate: 0 }],
    },
    {
      image: "guitar-placeholder5.png",
      name: "Gatesmasher",
      tags: [{ label: "COMING SOON", posX: 20, posY: 70, rotate: 0 }],
    },
  ];

  const [currentProduct, setCurrentProduct] = useState(0);
  const [leftAnimate, setLeftAnimate] = useState(false);
  const [rightAnimate, setRightAnimate] = useState(false);
  const [endLeftAnimate, setEndLeftAnimate] = useState(false);
  const [endRightAnimate, setEndRightAnimate] = useState(false);

  const onAnimateEnd = (e: any) => {
    console.log(e.currentTarget.className);
    if (e.propertyName === "transform") {
      if (e.currentTarget.className.includes("leftAnimate")) {
        setLeftAnimate(false);
        setEndRightAnimate(true);
        setCurrentProduct(
          currentProduct === 0 ? products.length - 1 : currentProduct - 1
        );
      } else if (e.currentTarget.className.includes("rightAnimate")) {
        setRightAnimate(false);
        setEndLeftAnimate(true);
        setCurrentProduct(
          currentProduct === products.length - 1 ? 0 : currentProduct + 1
        );
      } else if (
        e.currentTarget.className.includes("endRightAnimate") ||
        e.currentTarget.className.includes("endLeftAnimate")
      ) {
        setEndLeftAnimate(false);
        setEndRightAnimate(false);
      }
    }
  };

  const prevProduct = () => {
    setLeftAnimate(true);

    // setCurrentProduct(
    //   currentProduct === 0 ? products.length - 1 : currentProduct - 1
    // );
  };

  const nextProduct = () => {
    setRightAnimate(true);
    // setCurrentProduct(
    //   currentProduct === products.length - 1 ? 0 : currentProduct + 1
    // );
  };

  const currentProductData = products[currentProduct];

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="w-full flex flex-col max-w-[1500px] m-auto relative flex-1">
        <div className="relative flex flex-1 items-center justify-center mt-10 mb-20">
          {/* <h1 className="font-Gazzetta instrument-header">Gatekeeper</h1> */}
          <div className="flex flex-col h-fit relative">
            <Image
              className={classNames("instrument", {
                leftAnimate,
                rightAnimate,
                endLeftAnimate,
                endRightAnimate,
              })}
              onTransitionEnd={onAnimateEnd}
              alt="guitar placeholder"
              width={1536}
              height={726}
              src={`/product-heros/${currentProductData.image}`}
            />
            {currentProductData.tags?.map((t) => {
              return (
                <h2
                  key={Math.random()}
                  className={classNames(
                    `highlighter-outline absolute opacity-0`,
                    {
                      draw:
                        !endLeftAnimate &&
                        !endRightAnimate &&
                        !rightAnimate &&
                        !leftAnimate,
                    }
                  )}
                  style={{
                    top: t.posY + "%",
                    right: t.posX + "%",
                    rotate: t.rotate + "deg",
                  }}
                >
                  {t.label}
                </h2>
              );
            })}
          </div>
          <button className="button-alt button left-0" onClick={prevProduct}>
            <Image
              className=" rotate-[-90deg] w-[50px] mr-[5px] fill-whiteColor invert"
              src={arrow}
              alt="arrowleft"
            />
          </button>
          <button className="button-alt right-0" onClick={nextProduct}>
            <Image
              className=" rotate-[90deg] w-[50px] mr-[-5px] invert"
              src={arrow}
              alt="arrowleft"
            />
          </button>
        </div>
        <div className="flex justify-between gap-10 flex-wrap">
          <div className="instrument-primary-tooltip flex flex-col max-w-xl flex-[3] min-w-[400px]">
            <h2>24 fret guitar</h2>
            <h4 className="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </h4>
            <div className="flex items-center mt-10 gap-10">
              <button className="">ORDER NOW</button>
              <h3 className="">£3,500</h3>
            </div>

            <button className="mt-10 alt items-center flex">
              How it's made{" "}
              <div className="inline-block ml-2 p-2 rounded-full">
                <Image
                  className="rotate-[180deg]  w-[30px] mr-[-5px] invert"
                  src={arrow}
                  alt="arrowleft"
                />
              </div>
            </button>
          </div>

          {/* <h5 className="instrument-secondary-tooltip flex-1 min-w-[300px] max-w-[400px] text-greyColor xl:top-[-50px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </h5>
          <h5 className="instrument-secondary-tooltip flex-1 min-w-[300px] max-w-[400px] text-greyColor xl:top-[-150px]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </h5> */}
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
        <div className="images flex justify-end gap-[40px] flex-[3] xl:mt-[-300px]">
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
