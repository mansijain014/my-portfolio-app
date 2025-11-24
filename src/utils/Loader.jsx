"use client";

import Lottie from "lottie-react";
import loaderAnimation from "../lottie/loader.json";

export default function Loader({ fadeOut }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-[99999]
      transition-opacity duration-700 
      ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="w-40 h-40">
        <Lottie animationData={loaderAnimation} loop={true} />
      </div>
    </div>
  );
}
