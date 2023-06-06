import ProductViewer from "./productViewer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="site-core">
      <div className="wood-texture" />
      <div className="site-content">
        <section className="relative h-screen flex justify-center items-center pb-20">
          <ProductViewer />
        </section>
        <section className="section-1 bg-blackColor flex ml-auto mr-auto h-screen justify-center items-center">
          news wheel
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
