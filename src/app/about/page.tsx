import React from "react";
import Image from "next/image";

export default function about() {
  return (
    <div className="min-h-[100vh] flex justify-center align-center pt-[150px] pb-[250px]">
      <div className="wood-texture" />
      <section className="section-about flex flex-col items-center p-5 lg:p-20 max-w-[1500px]">
        <div className="flex justify-center flex-col text-center gap-y-10">
          <h2>
            Crafting Harmonies,
            <br /> Rooted in Family Tradition
          </h2>
          <h5 className=" text-secondary">
            Crafting harmonies with heart, our family-owned guitar company
            embodies tradition and artistry. Meticulously handcrafted, each
            instrument carries our legacy and personal touch. From premium
            materials to soulful curves, our passion drives every step. Welcome
            to a world of melodic wonders.
          </h5>
          <div className="flex flex-row gap-5 lg:gap-20 items-center flex-wrap lg:mt-10">
            <div className="about-us-box flex-[1] max-h-[1000px] basis-[450px]">
              <Image
                className="cutout-2 h-full w-auto object-cover"
                alt="workshop"
                width={1920}
                height={1080}
                src={`/Workshop_placeholder.png`}
              />
            </div>
            <div className="about-us-box flex-[1] flex justify-center cutout-back basis-[500px]">
              <div className="text-box cutout-4 max-w-[800px] bg-primary text-whiteColor">
                <h3 className=" font-bold">Our Workshop</h3>
                <h6 className=" text-secondary">
                  Our workshop is the heart of our instrument making process.
                  With meticulous craftsmanship and unwavering dedication, we
                  shape raw materials into exceptional instruments that capture
                  the essence of music. Step inside and experience the
                  atmosphere filled with the sounds of tools and the aroma of
                  freshly cut wood. Our workshop is equipped with specialized
                  instruments and equipment that support our creative vision. We
                  blend traditional techniques with modern advancements to
                  carefully craft each instrument, ensuring the highest quality
                  standards. This workshop is where our passion and expertise
                  converge, bringing melodies to life and fulfilling the dreams
                  of musicians seeking reliable and inspiring instruments.
                </h6>
              </div>
            </div>
          </div>
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
                  <h3 className=" font-bold">Charles - Apprentice</h3>
                  <h6 className=" text-secondary">
                    I started making my first instrument before I went to
                    university, a soprano ukulele. I completed it in my holidays
                    to learn more of the skills and to keep me busy. After
                    finishing my degree in Product Design at Coventry in Summer
                    of 2021 I joined David in making instruments fulltime.
                    <br />
                    <br />I am bringing new technologies and skills learnt on my
                    course into the business, currently focussing on CAD/CAM
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
