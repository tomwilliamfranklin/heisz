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
          <div className=" overflow-hidden h-full flex-1 cutout-back">
            <Image
              className="cutout-2"
              alt="guitar"
              width={1920}
              height={1080}
              src={`http://davefarmiloe.com/wp-content/uploads/2023/03/0aedd690-5f45-4795-8b0d-961a9b9dc076.jpg`}
            />
          </div>
          <div className="flex flex-1 justify-center cutout-back">
            <div className="flex flex-col cutout-3 max-w-[800px] p-20 bg-whiteColor text-blackColor gap-y-10">
              <h1 className=" font-bold">Precision. Passion. Perfection.</h1>
              <h3 className="">
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
        <section className="flex ml-auto h-screen mr-auto items-center justify-center">
          the design process
        </section>
        <section className="flex ml-auto mr-auto h-screen  justify-center items-center">
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
