import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-[1300px] font-bold flex flex-col items-center ml-auto mr-auto justify-center text-secondary h-[100px]">
      <h5>© {new Date().getFullYear()} Farmiloe Instruments </h5>
      <h5>Website made and maintained by Tom Franklin</h5>
    </footer>
  );
}
