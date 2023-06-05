import ProductViewer from "./productViewer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="site-core">
      <div className="wood-texture" />
      <div className="site-content">
        <section className="relative flex justify-center items-center pb-20">
          <ProductViewer />
        </section>
        <section className="flex ml-auto mr-auto h-[200px]  justify-center items-center">
          news wheel
        </section>
        <section className="flex ml-auto mr-auto h-screen  justify-center items-center">
          testimonials
        </section>
      </div>
    </main>
  );
}
