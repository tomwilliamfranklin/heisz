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
    <header className="sticky top-0 left-0 z-40 flex w-screen overflow-hidden items-center justify-start pt-[40px]">
      <Image
        className="h-auto ml-[40px]"
        src="/logo.png"
        width={250}
        height={1}
        alt="Farmiloe"
      />
      <div className="h-[60px] w-[800px]">
        <nav className="block pr-20 pl-20 h-full">
          <ul className="h-full flex items-center gap-7 relative">
            <li
              className={classNames("relative", {
                "text-secondary font-bold": pathname === "/",
              })}
            >
              <Link className="link" href="/">
                Home
              </Link>
            </li>
            <li
              className={classNames("relative", {
                "text-secondary font-bold": pathname === "/about",
              })}
            >
              <Link className="link" href="/about">
                About
              </Link>
            </li>
            <li
              className={classNames("relative", {
                "text-secondary font-bold": pathname === "/content",
              })}
            >
              <Link className="link" href="/content">
                Purchase
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}