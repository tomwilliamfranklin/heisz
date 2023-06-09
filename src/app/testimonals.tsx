import React from "react";
import Image from "next/image";

export default function Testimonals() {
  return (
    <div className=" w-full pl-10 pr-10 flex flex-col items-center gap-5 lg:gap-10 overflow-hidden ">
      <div className="max-w-[1200px] flex flex-col text-center gap-5 lg:gap-10">
        <h2>Testimonals</h2>
        <h5 className=" text-secondary">
          In each step, our comprehensive design approach and limitless
          creativity guide us, culminating in extraordinary instruments that
          speak volumes about our commitment to excellence.
        </h5>
      </div>
      <div className="flex gap-10 flex-1 flex-wrap">
        <div className="flex flex-1 justify-center cutout-back min-w-[350px]">
          <div className="testimony">
            <Image
              className="cutout-4 object-cover h-[50%] max-h-[400px]"
              alt="guitar"
              width={1920}
              height={1080}
              src={`http://davefarmiloe.com/wp-content/uploads/2022/07/David.jpg`}
            />
            <h1 className="absolute left-5 top-5 h-[125px] w-[125px] text-accent font-verveine text-9xl">
              "
            </h1>
            <h1 className="absolute right-5 bottom-[-40px] h-[125px] w-[125px] text-accent font-verveine text-9xl scale-x-[-100%]">
              "
            </h1>
            <div className="flex-[2] flex flex-col gap-5 lg:gap-10">
              <h4 className=" font-bold">Dave's Ukelele</h4>
              <h6 className=" text-blackColorSecondary">
                "it has completely stolen my heart. From its stunning mahogany
                body to its flawless craftsmanship, this instrument is a work of
                art. Its enchanting design is only matched by the mesmerizing
                sound it produces. Each strum resonates with clarity, warmth,
                and unexpected depth, filling the air with harmonies that
                captivate the soul. Whether playing gentle melodies or lively
                tunes, this ukelele brings every note to life, making it an
                absolute joy to play and a constant companion for moments of
                pure musical bliss.""
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center cutout-back min-w-[350px]">
          <div className="testimony">
            <Image
              className="cutout-3 object-cover h-[50%] max-h-[400px]"
              alt="guitar"
              width={1920}
              height={1080}
              src={`http://davefarmiloe.com/wp-content/uploads/2022/09/IMG_5999-scaled-e1664185958818.jpg`}
            />
            <h1 className="absolute left-5 top-5 h-[125px] w-[125px] text-accent font-verveine text-9xl">
              "
            </h1>
            <h1 className="absolute right-5 bottom-[-40px] h-[125px] w-[125px] text-accent font-verveine text-9xl scale-x-[-100%]">
              "
            </h1>
            <div className="flex-[2] flex flex-col gap-5 lg:gap-10">
              <h4 className=" font-bold">Thank you for the Dola</h4>
              <h6 className=" text-blackColorSecondary">
                "The Dola Guitar is a true gem, capturing my heart with its
                unique charm and delightful sound. With its distinct body shape
                and exquisite craftsmanship, this guitar stands out as a work of
                art. Its mahogany construction produces warm and resonant tones,
                while the smooth playability allows my fingers to effortlessly
                glide across the fretboard. From gentle strums to powerful
                chords, the Dola Guitar fills the air with a captivating melody,
                igniting a sense of joy and creativity that is truly
                enchanting."
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center cutout-back min-w-[350px]">
          <div className="testimony">
            <Image
              className="cutout-1 object-cover h-[50%] max-h-[400px]"
              alt="guitar"
              width={1920}
              height={1080}
              src={`http://davefarmiloe.com/wp-content/uploads/2023/01/IMG-20230130-WA0005.jpg`}
            />
            <h1 className="absolute left-5 top-5 h-[125px] w-[125px] text-accent font-verveine text-9xl">
              "
            </h1>
            <h1 className="absolute right-5 bottom-[-40px] h-[125px] w-[125px] text-accent font-verveine text-9xl scale-x-[-100%]">
              "
            </h1>
            <div className="flex-[2] flex flex-col gap-5 lg:gap-10">
              <h4 className=" font-bold">Custom T-42</h4>
              <h6 className=" text-blackColorSecondary">
                "The Luminous Harmony Acoustic Guitar has become my musical
                soulmate, captivating me with its exceptional craftsmanship and
                breathtaking sound. With a solid spruce top and mahogany back
                and sides, this instrument exudes both elegance and power. Each
                strum of the strings unlocks a harmonic symphony, resonating
                with warmth, depth, and clarity. Whether I'm playing soulful
                ballads or energetic riffs, the Luminous Harmony effortlessly
                translates my emotions into melodic expressions, becoming an
                indispensable companion in my musical journey."
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
