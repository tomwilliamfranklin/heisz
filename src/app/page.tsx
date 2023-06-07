import ProductViewer from "./productViewer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="site-core">
      <div className="wood-texture" />
      <div className="site-content">
        <section className="section-0 relative h-screen flex justify-center items-center pb-20 z-10">
          <ProductViewer />
        </section>
        <section className="section-1 bg-primary flex ml-auto mr-auto items-center">
          <div className="overflow-hidden h-full flex-1 cutout-back">
            <Image
              className="cutout-4 object-cover"
              alt="guitar"
              width={1920}
              height={1080}
              src={`http://davefarmiloe.com/wp-content/uploads/2022/08/T42-10.jpg`}
            />
          </div>
          <div className="flex flex-1 justify-center cutout-back">
            <div className="flex flex-col cutout-3 max-w-[800px] p-20 bg-whiteColor text-blackColor gap-y-10">
              <h1 className=" font-bold">Precision. Passion. Perfection.</h1>
              <h3 className=" text-blackColorSecondary">
                At our core, we believe in a comprehensive design approach that
                encompasses our deep understanding of what we aim to achieve and
                how to accomplish it with utmost professionalism. We embrace
                limitless possibilities in our creative process, taking pride in
                meticulously crafting every aspect. From hand-selecting seasoned
                woods to fabricating intricate components, including custom
                pickups and bridges, we pour our heart and soul into each
                instrument. Our commitment shines through in the end results,
                justifying the dedication and passion we infuse into every
                creation.
              </h3>
            </div>
          </div>
        </section>
        <section className="relative flex flex-col ml-auto mr-auto items-center justify-start">
          <div className="flex justify-center flex-col max-w-[1200px] text-center gap-y-10">
            <h2>Our Process</h2>
            <h4 className=" text-secondary">
              In each step, our comprehensive design approach and limitless
              creativity guide us, culminating in extraordinary instruments that
              speak volumes about our commitment to excellence.
            </h4>
          </div>
          <div className="flex flex-col max-w-[1700px]">
            <div className="h-full bg-accent w-[7px] absolute top-[200px] left-[50%] translate-x-[-50%] rounded-lg" />
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
                <div className="flex flex-col cutout-4 max-w-[800px] p-20 bg-primary text-whiteColor gap-y-10">
                  <h2 className=" font-bold">1: Consultation & Design.</h2>
                  <h4 className=" text-secondary">
                    Our collaborative process begins by deeply understanding the
                    client's aspirations, merging it with our expertise to
                    meticulously plan and execute a guitar design that captures
                    their vision with utmost professionalism and precision.
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
                <div className="flex flex-col cutout-3 max-w-[900px] p-20 bg-primary text-whiteColor gap-y-10">
                  <h2 className=" font-bold">2: Craftsmanship.</h2>
                  <h4 className=" text-secondary">
                    Imbued with passion, we painstakingly handcraft every
                    element of the guitar, devoting ourselves to the art of
                    selecting seasoned woods, honing our skills in fabricating
                    intricate components, including custom pickups and bridges,
                    to ensure each instrument is a testament to our unwavering
                    commitment to detail and craftsmanship.
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
                <div className="flex flex-col cutout-3 max-w-[800px] p-20 bg-primary text-whiteColor gap-y-10">
                  <h2 className=" font-bold">3: Finishing & Assembly.</h2>
                  <h4 className=" text-secondary">
                    Our dedication extends to the final stages, where we
                    skillfully apply impeccable finishes, harmoniously marrying
                    aesthetics and durability. With meticulous precision, we
                    assemble the guitar, paying utmost attention to alignment,
                    functionality, and balance, resulting in an instrument that
                    is not just visually captivating, but an embodiment of
                    flawless construction.
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
                <div className="flex flex-col cutout-4 max-w-[800px] p-20 bg-primary text-whiteColor gap-y-10">
                  <h2 className=" font-bold">4: Testing & Delivery.</h2>
                  <h4 className=" text-secondary">
                    Before we entrust our creation to its rightful owner, we
                    subject each guitar to rigorous testing. We meticulously
                    assess every nuance of sound quality, playability, and
                    responsiveness, ensuring that the instrument surpasses all
                    expectations. Finally, with pride and satisfaction, we
                    deliver the finished masterpiece, knowing that our
                    dedication and passion have been faithfully poured into
                    every aspect of its creation.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-3 bg-primary flex ml-auto mr-auto h-screen items-center justify-center">
          testimonials
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
