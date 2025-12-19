"use client";

import audi from "../assets/audi.webp";
import microsoft from "../assets/microsoft.webp";
import hclTech from "../assets/hcl.webp";
import sharpSight from "../assets/sharp-sight-eye-hospitals.webp";
import ashoka from "../assets/ashoka-university.webp";
import nlu from "../assets/nlu-delhi.webp";
import ihff from "../assets/ihff.webp";
import rekhta from "../assets/rekhta-foundation.webp";
import screwDriverFilms from "../assets/screwdriver-films.webp";
import teamworkArts from "../assets/teamwork-arts.webp";
import nbcc from "../assets/nbcc.webp";
import LogoLoop from "../utils/LogoLoop";

const brands = [
  { name: "AUDI", src: audi },
  { name: "Microsoft", src: microsoft },
  { name: "HCL Tech", src: hclTech },
  { name: "Sharp Sight Eye Hospitals", src: sharpSight },
  { name: "Ashoka University", src: ashoka },
  { name: "NLU Delhi", src: nlu },
  { name: "ScrewDriver Films", src: screwDriverFilms },
  { name: "IHFF", src: ihff },
  { name: "Rekhta Foundation", src: rekhta },
  { name: "Teamwork Arts", src: teamworkArts },
  { name: "NBCC", src: nbcc },
];

export default function BrandPartners() {
  return (
    <section
      id="brand-partners"
      className="relative bg-black py-20 overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-center text-white uppercase tracking-[0.25em] text-xs md:text-sm mb-10">
        Trusted By Leading Brands & Institutions
      </h2>

      <LogoLoop logos={brands} speed={50} logoHeight={70} />

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
}
