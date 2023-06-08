import React from "react";
import Image from "next/image";

export default function CreationProcessTimeline() {
  return (
    <div className="flex flex-col max-w-[1700px] relative pt-5 mb-10">
      <div className="h-full bg-accent w-[7px] absolute left-[50%] translate-x-[-50%] rounded-lg" />
      <div className="flex relative gap-40 p-20 flex-row-reverse max-h-[700px]">
        <div className="bg-accent h-[3px] w-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg" />
        <div className="flex-1">
          <Image
            className="cutout-2 h-full w-auto object-cover"
            alt="guitar"
            width={1920}
            height={1080}
            src={`http://davefarmiloe.com/wp-content/uploads/2022/07/Charles-1024x768.jpg`}
          />
        </div>
        <div className="flex flex-1 justify-center cutout-back">
          <h1 className=" absolute z-[1] top-[0%] translate-y-[-50%] right-[-50px] inline-block font-verveine text-accent leading-10">
            1.
          </h1>
          <div className="flex flex-col cutout-4 max-w-[800px] p-20 bg-primary text-whiteColor gap-y-10">
            <h2 className=" font-bold">Consultation & Design.</h2>
            <h4 className=" text-secondary">
              Our collaborative process begins by deeply understanding the
              client's aspirations, merging it with our expertise to
              meticulously plan and execute a guitar design that captures their
              vision with utmost professionalism and precision.
            </h4>
          </div>
        </div>
      </div>
      <div className="flex relative gap-40 p-20 max-h-[700px]">
        <div className="bg-accent h-[3px] w-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg" />
        <div className="flex-1">
          <Image
            className="cutout-1 h-full w-full object-cover"
            alt="guitar"
            width={1920}
            height={1080}
            src={`http://davefarmiloe.com/wp-content/uploads/2023/01/IMG-20230130-WA0012.jpg`}
          />
        </div>
        <div className="flex flex-1 justify-center cutout-back">
          <h1 className=" absolute z-[1] top-[0%] translate-y-[-50%] left-[-50px] inline-block font-verveine text-accent leading-10">
            2
          </h1>
          <div className="flex flex-col cutout-3 max-w-[900px] p-20 bg-primary text-whiteColor gap-y-10">
            <h2 className=" font-bold">Craftsmanship.</h2>
            <h4 className=" text-secondary">
              Imbued with passion, we painstakingly handcraft every element of
              the guitar, devoting ourselves to the art of selecting seasoned
              woods, honing our skills in fabricating intricate components,
              including custom pickups and bridges, to ensure each instrument is
              a testament to our unwavering commitment to detail and
              craftsmanship.
            </h4>
          </div>
        </div>
      </div>
      <div className="flex relative gap-40 p-20 flex-row-reverse max-h-[700px]">
        <div className="bg-accent h-[3px] w-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg" />
        <div className="flex-1">
          <Image
            className="cutout-1 h-full w-full object-cover"
            alt="guitar"
            width={1920}
            height={1080}
            src={`http://davefarmiloe.com/wp-content/uploads/2023/03/4f986883-a8ff-449c-9745-0debeb4db00f.jpg`}
          />
        </div>
        <div className="flex flex-1 justify-center cutout-back">
          <h1 className=" absolute z-[1] top-[0px] translate-y-[-50%] right-[-70px] inline-block font-verveine text-accent leading-10 rotate-3">
            3*
          </h1>
          <div className="flex flex-col cutout-3 max-w-[800px] p-20 bg-primary text-whiteColor gap-y-10">
            <h2 className=" font-bold">Finishing & Assembly.</h2>
            <h4 className=" text-secondary">
              Our dedication extends to the final stages, where we skillfully
              apply impeccable finishes, harmoniously marrying aesthetics and
              durability. With meticulous precision, we assemble the guitar,
              paying utmost attention to alignment.
            </h4>
          </div>
        </div>
      </div>
      <div className="flex relative gap-40 p-20 max-h-[700px]">
        <div className="bg-accent h-[3px] w-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg" />
        <div className="flex-1">
          <Image
            className="cutout-1 h-full w-auto object-cover"
            alt="guitar"
            width={1920}
            height={1080}
            src={`http://davefarmiloe.com/wp-content/uploads/2023/01/IMG-20230130-WA0007.jpg`}
          />
        </div>
        <div className="flex flex-1 justify-center cutout-back">
          <h1 className=" absolute z-[1] top-[0%] translate-y-[-50%] left-[-50px] inline-block font-verveine text-accent leading-10 rotate-[-3deg]">
            4
          </h1>
          <div className="flex flex-col cutout-4 max-w-[800px] p-20 bg-primary text-whiteColor gap-y-10">
            <h2 className=" font-bold"> Testing & Delivery.</h2>
            <h4 className=" text-secondary">
              Before we entrust our creation to its rightful owner, we subject
              each guitar to rigorous testing. We meticulously assess every
              nuance of sound quality, playability, and responsiveness, ensuring
              that the instrument surpasses all expectations.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
