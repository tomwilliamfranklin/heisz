import React from "react";
import SocialMedia from "./socialMedia";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-screen pb-20 font-bold flex flex-col items-center ml-auto mr-auto justify-center text-secondar">
      <SocialMedia />
      <h5 className="text-center mt-10">
        © {new Date().getFullYear()} Farmiloe Instruments{" "}
      </h5>
      <h5 className="text-center mt-5 text-secondary">
        Website designed, made and maintained by{" "}
        <a className="text-accent" href="https://tomfranklin.dev/">
          Tom Franklin
        </a>
      </h5>
    </footer>
  );
}
