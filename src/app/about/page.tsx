import React from "react";

export default function about() {
  return (
    <div className="min-h-[100vh] flex justify-center align-center pt-[200px]">
      <div className="wood-texture" />
      <section className="section-about flex flex-col items-center max-w-[1200px]">
        <div className="flex justify-center flex-col max-w-[1200px] text-center gap-y-10">
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
          <h2 className="font-verveine text-accent">START</h2>
        </div>
      </section>
    </div>
  );
}
