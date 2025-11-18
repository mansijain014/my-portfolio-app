// "use client";

// import { useState } from "react";

// export default function FullScreenButton() {
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const toggleFullscreen = () => {
//     const element = document.documentElement;

//     if (!isFullscreen) {
//       // request fullscreen
//       if (element.requestFullscreen) element.requestFullscreen();
//       else if (element.webkitRequestFullscreen)
//         element.webkitRequestFullscreen(); // iOS Safari
//       else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
//       else if (element.msRequestFullscreen) element.msRequestFullscreen();
//       setIsFullscreen(true);
//     } else {
//       // exit fullscreen
//       if (document.exitFullscreen) document.exitFullscreen();
//       else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
//       else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
//       else if (document.msExitFullscreen) document.msExitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   return (
//     !isFullscreen && (
//       <button
//         onClick={toggleFullscreen}
//         className="
//     fixed bottom-6 right-6 z-[9999]
//     w-12 h-12 rounded-full flex items-center justify-center
//     bg-white/10 border border-white/20 backdrop-blur-md
//     hover:bg-purple-500 hover:border-purple-400 hover:text-white
//     transition-all duration-300 shadow-lg"
//       >
//         <span className="text-lg">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-5 h-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="1.5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 8V4h4m12 0h-4m4 0v4M4 16v4h4m12 0h-4m4 0v-4"
//             />
//           </svg>
//         </span>{" "}
//       </button>
//     )
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function FullScreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const element = document.documentElement;

    if (!isFullscreen) {
      if (element.requestFullscreen) element.requestFullscreen();
      else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
      else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
      else if (element.msRequestFullscreen) element.msRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const handler = () => {
      const fs =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      setIsFullscreen(!!fs);
    };

    document.addEventListener("fullscreenchange", handler);
    document.addEventListener("webkitfullscreenchange", handler);
    document.addEventListener("mozfullscreenchange", handler);
    document.addEventListener("MSFullscreenChange", handler);

    return () => {
      document.removeEventListener("fullscreenchange", handler);
      document.removeEventListener("webkitfullscreenchange", handler);
      document.removeEventListener("mozfullscreenchange", handler);
      document.removeEventListener("MSFullscreenChange", handler);
    };
  }, []);

  return (
    !isFullscreen && (
      <button
        onClick={toggleFullscreen}
        className="
        fixed bottom-6 right-6 z-[9999]
        w-12 h-12 rounded-full flex items-center justify-center
        bg-white/10 border border-white/20 backdrop-blur-md
        hover:bg-purple-500 hover:border-purple-400 hover:text-white
        transition-all duration-300 shadow-lg
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8V4h4m12 0h-4m4 0v4M4 16v4h4m12 0h-4m4 0v-4"
          />
        </svg>
      </button>
    )
  );
}
