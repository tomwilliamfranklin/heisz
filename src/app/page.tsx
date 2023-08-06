"use client";
import ProductViewer from "./productViewer";
import Image from "next/image";
import CreationProcessTimeline from "./creationProcessTimeline";
import Testimonals from "./testimonals";
import * as HOME from "../content/site/home.json";
import { createValidImageURL } from "@/data/Utils";

export default function Home() {
  const home = HOME;

  return (
    <main className="site-core">
      <div className="wood-texture" />
      <div className="site-content">
        <section className="section-0 relative flex justify-center items-center pb-20 z-10 min-h-[90vh]">
          <ProductViewer />
        </section>
        <section className="section-1 bg-primary flex ml-auto mr-auto items-center flex-wrap p-5 gap-10">
          <div className="overflow-hidden h-full flex-1 cutout-back basis-[500px]">
            <Image
              className="cutout-4 object-cover"
              alt={home.slogan}
              width={1920}
              height={1080}
              src={createValidImageURL(home.sloganImage)}
            />
          </div>
          <div className="flex flex-1 justify-center cutout-back basis-[800px] max-w-full">
            <div className="text-box cutout-3 lg:max-w-[800px] bg-whiteColor text-blackColor">
              <h2 className=" font-bold">{home.slogan}</h2>
              <h5 className=" text-blackColorSecondary">
                {home.sloganDescription}
              </h5>
            </div>
          </div>
        </section>
        <section className="relative flex flex-col ml-auto mr-auto items-center justify-start">
          <div className="flex justify-center flex-col max-w-[1200px] text-center gap-y-10">
            <h3>{home.ourProcessHeader}</h3>
            <h5 className=" text-secondary">{home.ourProcessDescription}</h5>
            <h2 className="font-verveine text-accent">
              {home.ourProcessStart}
            </h2>
          </div>
          <CreationProcessTimeline />
          <div className="flex justify-center flex-col max-w-[1200px] text-center gap-y-10">
            <h2 className="font-verveine text-accent">
              {home.ourProcessFinish}
            </h2>
          </div>
        </section>
        <section className="section-3 bg-primary flex ml-auto mr-auto items-center justify-center">
          <Testimonals />
        </section>
        <svg preserveAspectRatio="none">
          <clipPath id="platform-mask-odd" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.0088 0.009)"
              d="M4.812 10.61 100.109.678l4.726 68.908 5.395.007 2.94 33.077-103.39 8.77L.868 25.895l5.395.007L4.812 10.61Z"
            ></path>
          </clipPath>
        </svg>
      </div>
    </main>
  );
}
