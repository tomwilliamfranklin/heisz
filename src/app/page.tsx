import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Image from "next/image";
import arrow from "../../public/arrow.svg";
import ProductViewer from "./productViewer";

export default function Home() {
  return (
    <main className="site-core">
      <div className="site-content">
        <section className="relative flex justify-center items-center">
          <ProductViewer />
        </section>
        <section>news wheel</section>
        <section>something else</section>
      </div>
    </main>
  );
}
