"use client";
import React from "react";
import { AnimatedTooltip } from "./AnimatedTooltip";
import Image from "next/image";
import Avatar01 from '@/public/images/avatar-01.jpg'
import nft1 from '@/public/images/nft/nft.jpg'
const people = [
  {
    id: 1,
    name: "Guilherme",
    designation: "FrontEnd Developer",
    image:
    nft1.src,
  },
  {
    id: 2,
    name: "Robert",
    designation: "Solidity Developer",
    image:
    nft1.src,
  },
  {
    id: 3,
    name: "Sean",
    designation: "Blockchain Researcher",
    image:
    nft1.src,
  },
  {
    id: 4,
    name: "Joseph",
    designation: "Smart Contrat Hacker",
    image:
      nft1.src,
  },
];

export function AnimatedTooltipPreview() {
  console.log(nft1.src, "e")
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">

      <AnimatedTooltip items={people} />
      <div className="text-lg text-white font-bold ml-8 ">+120K</div>

    </div>
  );
}
