import React from "react";
import Image from "next/image";

export default function CreationProcessTimeline() {
  return (
    <div className="flex flex-col max-w-[1700px] relative pt-5 mb-10">
      <div className="h-full bg-accent w-[7px] absolute left-[50%] translate-x-[-50%] rounded-lg" />
      <div className="timeline-entry flex-row-reverse">
        <div className="bg-accent h-[3px] w-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg " />
        <div className="timeline-box">
          <Image
            className="cutout-2 h-full w-auto object-cover"
            alt="guitar"
            width={1920}
            height={1080}
            src={`http://davefarmiloe.com/wp-content/uploads/2022/07/Charles-1024x768.jpg`}
          />
        </div>
        <div className="timeline-box flex justify-center cutout-back">
          <h1 className="timeline-number right-[0px] left-[20px] 2xl:left-[unset] 2xl:right-[-50px]">
            1.
          </h1>
          <div className="text-box cutout-4 max-w-[800px] bg-primary text-whiteColor">
            <h3 className=" font-bold">Consultation & Design.</h3>
            <h5 className=" text-secondary">
              Our collaborative process begins by deeply understanding the
              client's aspirations, merging it with our expertise to
              meticulously plan and execute a guitar design that captures their
              vision with utmost professionalism and precision.
            </h5>
          </div>
        </div>
      </div>
      <div className="timeline-entry">
        <div className="bg-accent h-[3px] w-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg" />
        <div className="timeline-box">
          <Image
            className="cutout-1 h-full w-full object-cover"
            alt="guitar"
            width={1920}
            height={1080}
            src={`http://davefarmiloe.com/wp-content/uploads/2023/01/IMG-20230130-WA0012.jpg`}
          />
        </div>
        <div className="flex timeline-box justify-center cutout-back">
          <h1 className="timeline-number left-[20px] 2xl:left-[-50px]">2</h1>
          <div className="text-box cutout-3 max-w-[800px] bg-primary text-whiteColor">
            <h3 className=" font-bold">Craftsmanship.</h3>
            <h5 className=" text-secondary">
              Imbued with passion, we painstakingly handcraft every element of
              the guitar, devoting ourselves to the art of selecting seasoned
              woods, honing our skills in fabricating intricate components,
              including custom pickups and bridges, to ensure each instrument is
              a testament to our unwavering commitment to detail and
              craftsmanship.
            </h5>
          </div>
        </div>
      </div>
      <div className="timeline-entry flex-row-reverse">
        <div className="bg-accent h-[3px] w-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg" />
        <div className="timeline-box">
          <Image
            className="cutout-1 h-full w-full object-cover"
            alt="guitar"
            width={1920}
            height={1080}
            src={`http://davefarmiloe.com/wp-content/uploads/2023/03/4f986883-a8ff-449c-9745-0debeb4db00f.jpg`}
          />
        </div>
        <div className="flex timeline-box justify-center cutout-back">
          <h1 className="timeline-number right-[0px] left-[20px] 2xl:left-[unset] 2xl:right-[-70px]">
            3*
          </h1>
          <div className="text-box cutout-3 max-w-[800px] bg-primary text-whiteColor">
            <h3 className=" font-bold">Finishing & Assembly.</h3>
            <h5 className=" text-secondary">
              Our dedication extends to the final stages, where we skillfully
              apply impeccable finishes, harmoniously marrying aesthetics and
              durability. With meticulous precision, we assemble the guitar,
              paying utmost attention to alignment.
            </h5>
          </div>
        </div>
      </div>
      <div className="timeline-entry">
        <div className="bg-accent h-[3px] w-[60px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg" />
        <div className="timeline-box">
          <Image
            className="cutout-1 h-full w-auto object-cover"
            alt="guitar"
            width={1920}
            height={1080}
            src={`http://davefarmiloe.com/wp-content/uploads/2023/01/IMG-20230130-WA0007.jpg`}
          />
        </div>
        <div className="flex timeline-box justify-center cutout-back">
          <h1 className="timeline-number left-[20px] 2xl:left-[-50px]">4-</h1>
          <div className="text-box cutout-4 max-w-[800px] bg-primary text-whiteColor">
            <h3 className=" font-bold"> Testing & Delivery.</h3>
            <h5 className=" text-secondary">
              Before we entrust our creation to its rightful owner, we subject
              each guitar to rigorous testing. We meticulously assess every
              nuance of sound quality, playability, and responsiveness, ensuring
              that the instrument surpasses all expectations.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
