"use client";

import classNames from "classnames";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="top-0 left-0 z-40 w-screen ">
      <div className="flex items-start justify-start pt-5">
        <div className="absolute  left-0 h-[200px] ml-[50px]">
          <Image
            className="h-auto w-[300px] p-[25px]"
            src="/logo.png"
            width={250}
            height={1}
            alt="Farmiloe"
          />
        </div>
        <div className="h-[100px] w-screen justify-end hidden lg:flex">
          <div className="h-[100px] fixed z-20 cutout-back flex min-w-[400px] xl:pr-[5%]">
            <div className="cutout-1 h-full">
              <nav className="block pr-20 pl-20 h-full">
                <ul className="h-full flex items-center gap-7 relative">
                  <li
                    className={classNames("relative text-secondary", {
                      "text-whiteColor font-bold": pathname === "/",
                    })}
                  >
                    <Link className="link" href="/">
                      <h4>Home</h4>
                    </Link>
                  </li>
                  <li
                    className={classNames("relative text-secondary", {
                      "text-whiteColor font-bold": pathname === "/about",
                    })}
                  >
                    <Link className="link" href="/about">
                      <h4>About</h4>
                    </Link>
                  </li>
                  <li
                    className={classNames("relative text-secondary", {
                      "text-whiteColor font-bold": pathname === "/contact",
                    })}
                  >
                    <Link className="link" href="/contact">
                      <h4>Purchase</h4>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className=" h-full flex flex-1"> </div>
          </div>
        </div>
      </div>
    </header>
  );
}
