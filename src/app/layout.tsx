import "./globals.scss";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Head from "next/head";
import ReactDOM from "react-dom";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farmiloe Instruments",
  description: "Bespoke Isntruments and Woodworking",
  alternatives: {
    stylesheet: {},
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" overflow-x-hidden">
      {/* TODO FONTS  */}
      <link
        id="1"
        rel="stylesheet"
        href="https://use.typekit.net/vex5gtt.css"
      />
      <link rel="stylesheet" href="https://use.typekit.net/vex5gtt.css"></link>
      <link rel="stylesheet" href="https://use.typekit.net/vex5gtt.css"></link>
      <body
        className={classNames(
          inter.className,
          "relative overflow-x-h pb-[250px] w-screen overflow-x-hidden"
        )}
      >
        <div className="svgs">
          <svg preserveAspectRatio="none">
            <clipPath id="section-top" clipPathUnits="objectBoundingBox">
              <path
                transform="scale(0.001,0.008)"
                d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              ></path>
            </clipPath>

            <clipPath id="section-bottom" clipPathUnits="objectBoundingBox">
              <path
                transform="scale(0.0009 0.00555)"
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              ></path>
            </clipPath>
          </svg>
        </div>
        <div className="bg-accent top-0 w-full font-bold">
          <div className="flex w-full justify-center gap-5">
            <h6>
              Our new T-42 is in stock! call or email to purchase | 07525 849608
              | farmiloeinstruments@yahoo.com
            </h6>
          </div>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
