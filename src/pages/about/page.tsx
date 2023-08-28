import React from "react";
import Image from "next/image";

export default function about() {
  return (
    <div className="min-h-[100vh] flex justify-center align-center pt-[150px] lg:pt-[0px] pb-[250px] flex-col">
      <div className="wood-texture" />
      <section className="flex flex-col w-screen text-center max-w-[1500px] gap-y-10 p-5 lg:p-20 items-center ml-auto mr-auto">
        <h2>
          Crafting Harmonies,
          <br /> Rooted in Family Tradition
        </h2>
      </section>
      <section className="section-1 bg-primary flex ml-auto mr-auto items-center flex-wrap p-5 gap-10 mt-[200px]">
        <div className="overflow-hidden h-full flex-1 cutout-back basis-[500px]">
          <Image
            className="cutout-4 object-cover"
            alt="guitar"
            width={1920}
            height={1080}
            src={`/Workshop_placeholder.png`}
          />
        </div>
        <div className="flex flex-1 justify-center cutout-back basis-[800px] max-w-full">
          <div className="text-box cutout-3 max-w-[800px] bg-whiteColor text-blackColor">
            <h2 className=" font-bold">Our Workshop</h2>
            <h6 className=" text-blackColorSecondary">
              At the heart of our instrument making process is our workshop.
              With meticulous craftsmanship and unwavering dedication, we shape
              raw materials into exceptional instruments that capture the
              essence of music. Step inside and experience the atmosphere filled
              with the sounds of tools and the aroma of freshly cut wood. Our
              workshop is equipped with specialized instruments and equipment
              that support our creative vision. We blend traditional techniques
              with modern advancements to carefully craft each instrument,
              ensuring the highest quality standards. This workshop is where our
              passion and expertise converge, bringing melodies to life and
              fulfilling the dreams of musicians seeking reliable and inspiring
              instruments.
            </h6>
          </div>
        </div>
      </section>
      <section className="section-about flex flex-col items-center p-5 lg:p-20 pt-0 lg:pt-0 max-w-[1500px] ml-auto mr-auto">
        <div className="flex justify-center flex-col text-center gap-y-10">
          <div className="flex flex-col gap-y-20 mt-20">
            <h2>Our Team</h2>
            <div className="flex flex-row gap-5 lg:gap-20 flex-wrap">
              <div className="about-us-box basis-[400px] max-h-[800px] self-center">
                <Image
                  className="cutout-2 h-full w-auto object-cover"
                  alt="dave"
                  width={1920}
                  height={1080}
                  src={`http://davefarmiloe.com/wp-content/uploads/2022/07/David.jpg`}
                />
              </div>
              <div className="about-us-box flex justify-center cutout-back">
                <div className="text-box cutout-4 max-w-[800px] bg-primary text-whiteColor">
                  <h3 className=" font-bold">David - Head Engineer</h3>
                  <h6 className=" text-secondary">
                    After the debacle of my first guitar in 1974 I applied to
                    study instrument making in Wales. Mentor Alan Shiers,
                    Harpmaker and Bernard Richardson of Cardiff University set
                    the bar high and made the difference; enabling me to win a
                    local ‘Jon Award’ for a carved top semi-acoustic guitar. In
                    1979 after 3 years of learning, I got my discharge papers
                    and started my workshop, which essentially, I have retained
                    and used to make instruments throughout the years. 
                    <br /> <br />
                    In 1985 I was contracted to assist Fender UK distributer
                    Arbiter looking after quality control in Hendon, and at
                    Fender’s artist relations and custom shop centre in London.
                    I had a great time for a few years that involved making,
                    prototype and design work. Later I worked for Kaman, who
                    owned Ovation and Hamer guitars, taking me to the factories
                    at New Hartford and Chicago, and a visit to the renowned
                    Martin factory in Nazareth. After sporadic involvement with
                    Takamine and Parker and a spell with Charlie Chandlers I
                    rejoined Fender in 2009, at their East Grinstead repair
                    department. 
                    <br /> <br />I returned to making in the workshop in 2014.
                    Until recently I also ran a Gibson warranty centre.
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-5 lg:gap-20 flex-wrap">
              <div className="about-us-box basis-[400px] max-h-[800px] self-center">
                <Image
                  className="cutout-2 h-full w-auto object-cover"
                  alt="charles"
                  width={1920}
                  height={1080}
                  src={`http://davefarmiloe.com/wp-content/uploads/2022/07/Charles-1024x768.jpg`}
                />
              </div>
              <div className="about-us-box flex justify-center cutout-back">
                <div className="text-box cutout-4 max-w-[800px] bg-primary text-whiteColor">
                  <h3 className=" font-bold">Charles - Engineer</h3>
                  <h6 className=" text-secondary">
                    Since a young age, I've been captivated by the art of
                    crafting instruments. Even before university, I embarked on
                    my inaugural project—a beautifully crafted soprano ukulele.
                    Throughout my academic years at Coventry, where I pursued a
                    degree in Product Design, I dedicated my holiday breaks to
                    refining my skills and expanding my knowledge in the realm
                    of instrument making.
                    <br /> <br />
                    The summer of 2021 marked a significant milestone as I
                    joined forces with David, a revered master in the field.
                    Together, we bring a dynamic fusion of expertise to the
                    table. With my Product Design background and a focus on
                    integrating CAD/CAM technologies into our workflow, we
                    harmonize the rich traditions of instrument making with the
                    advancements of modern technology. This convergence allows
                    us to achieve unrivaled precision, enhance efficiency, and
                    unlock new realms of creative innovation. Our unwavering
                    commitment to meticulous craftsmanship and the relentless
                    pursuit of pushing engineering boundaries defines our
                    approach to creating exceptional instruments. With every
                    instrument we lovingly craft, our goal is to ignite a sense
                    of inspiration and exceed the expectations of musicians who
                    hold our creations in their hands.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
