import React from "react";
import Image from "next/image";
import * as HOME from "../content/site/home.json";
import { createValidImageURL } from "@/data/Utils";

export default function CreationProcessTimeline() {
  const home = HOME;

  return (
    <div className="flex flex-col max-w-[1700px] relative pt-5 mb-10">
      <div className="h-full bg-accent w-[7px] absolute left-[50%] translate-x-[-50%] rounded-lg" />
      {home.processSteps.map((step, index) => {
        return (
          <div
            key={index}
            className={`timeline-entry ${
              (index + 1) % 2 == 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="bg-accent h-[3px] w-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg " />
            <div className="timeline-box">
              <Image
                className="cutout-2 h-full w-auto object-cover"
                alt="guitar"
                width={1920}
                height={1080}
                src={createValidImageURL(step.image)}
              />
            </div>
            <div className="timeline-box flex justify-center cutout-back">
              <h1
                className={`timeline-number ${
                  (index + 1) % 2 == 0
                    ? "right-[0px] left-[20px] 2xl:left-[unset] 2xl:right-[-50px]"
                    : "left-[20px] 2xl:left-[-50px]"
                }`}
              >
                1.
              </h1>
              <div className="text-box cutout-4 max-w-[800px] bg-primary text-whiteColor">
                <h3 className=" font-bold">{step.stepTitle}</h3>
                <h5 className=" text-secondary">{step.stepDescription}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
