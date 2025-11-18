import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./MagicBento.css";
import camera from "../assets/Camera-FX9-1.webp";
import lens from "../assets/Lens.png";
import lights from "../assets/lights.png";
import mics from "../assets/mics.jfif";
import gimbal from "../assets/gimbal.jfif";
import monitor from "../assets/monitor.jfif";

const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    color: "#060010",
    description: "High-end bodies for narrative, ads & music videos.",
    label: "Cameras",
    bgImage: camera,
    items: [
      { name: "Sony Pxw 160" },
      { name: "Sony Pxw 200" },
      { name: "Sony Pmw 200" },
      { name: "Sony Pmw 300" },
      { name: "Sony Pxw 150" },
      { name: "Sony Fx3" },
      { name: "Sony Fx6" },
      { name: "Sony Fx9" },
      { name: "Sony A7SIII" },
      { name: "Sony A7M3" },
      { name: "Sony A7R3" },
      { name: "Canon 5D MarkIV" },
      { name: "Ikegami Multi Setup" },
      { name: "HDK - 73" },
      { name: "Red Dragon Camera" },
      { name: "Go pro 12" },
    ],
  },
  {
    color: "#060010",
    description: "Crisp glass for every focal length and mood.",
    label: "Lenses",
    bgImage: lens,
    items: [
      { name: "Sony G Master - 18mm" },
      { name: "Sony G Master - 25mm" },
      { name: "Sony G Master - 50mm" },
      { name: "Sony G Master - 85mm" },
      { name: "Sony G Master - 135mm" },
      { name: "Zeiss Batis - 18mm" },
      { name: "Zeiss Batis - 25mm" },
      { name: "Zeiss Batis - 40mm" },
      { name: "Zeiss Batis - 85mm" },
      { name: "Zeiss Batis - 135mm" },
      { name: "CP2 Lenses" },
      { name: "CP3 Lenses" },
      { name: "Red Prime Lenses" },
    ],
  },
  {
    color: "#060010",
    description: "Soft, hard & practical lighting for any scene.",
    label: "Lights",
    bgImage: lights,
    items: [
      { name: "Godox SL 200" },
      { name: "Aputure 300" },
      { name: "Aputure 600" },
      { name: "Aputure 1200" },
      { name: "Nanlite 300" },
      { name: "Nanlite 600" },
      { name: "Nanlite 1200" },
      { name: "LED Panel light" },
    ],
  },
  {
    color: "#060010",
    description: "Mics & recorders for clean sound.",
    label: "Sound",
    bgImage: mics,
    items: [
      { name: "Sennheiser Cordless Lapel Mic" },
      { name: "Sennheiser Cordless Hand Mic" },
      { name: "Sennheiser Boom Mic" },
      { name: "Digitek Dual Mic" },
      { name: "Hollyland Wireless Mic" },
      { name: "Zoom Recorder H8" },
    ],
  },
  {
    color: "#060010",
    description: "Tripods & gimbals for rock-steady motion.",
    label: "Support",
    bgImage: gimbal,
    items: [
      { name: "Tripods" },
      { name: "Zhiyun Crane 2" },
      { name: "Zhiyun Crane 3" },
      { name: "Zhiyun Crane 3s" },
      { name: "DJI Rs3 Gimbal" },
      { name: "DJI Rs4 Gimbal" },
      { name: "DJI Rs4 Pro Gimbal" },
    ],
  },
  {
    color: "#060010",
    description: "Monitors, batteries, media & more.",
    label: "Accessories",
    bgImage: monitor,
    items: [
      { name: "Lilliput Monitors 14Inches" },
      { name: "Atomos Shogun 7inches" },
      { name: "Atomos Ninja 5inches" },
      { name: "Batteries" },
      { name: "CF Express Cards" },
      { name: "SD Cards" },
    ],
  },
];

// ---------------------------------------------------------------------------

const calculateSpotlightValues = (radius) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

// ---------------------------------------------------------------------------

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    // Create spotlight element
    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 700px;
      height: 700px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(
        circle,
        rgba(${glowColor}, 0.25) 0%,
        rgba(${glowColor}, 0.12) 25%,
        rgba(${glowColor}, 0.06) 50%,
        transparent 80%
      );
      opacity: 0;
      transform: translate(-50%, -50%);
      z-index: 200;
      mix-blend-mode: screen;
    `;

    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMove = (e) => {
      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      if (!rect) return;

      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll(".magic-bento-card");

      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.3 });
        cards.forEach((card) =>
          card.style.setProperty("--spotlight-intensity", "0")
        );
        return;
      }

      // move spotlight
      gsap.to(spotlight, {
        left: e.clientX,
        top: e.clientY,
        opacity: 0.6,
        duration: 0.1,
        ease: "power2.out",
      });

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cx = cardRect.left + cardRect.width / 2;
        const cy = cardRect.top + cardRect.height / 2;

        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        const maxDist = spotlightRadius;

        // intensity: 1 near center → 0 far away
        const intensity = Math.max(0, 1 - dist / maxDist);

        card.style.setProperty("--spotlight-intensity", intensity);
      });
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      spotlight.remove();
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

// ---------------------------------------------------------------------------

const BentoCardGrid = ({ children, gridRef }) => (
  <div className="card-grid bento-section" ref={gridRef}>
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------

const MagicBento = ({
  textAutoHide = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  enableTilt = true,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardMouseMove = (e) => {
    if (shouldDisableAnimations) return;
    const el = e.currentTarget;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // ⭐ Restore glow coordinates
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    el.style.setProperty("--glow-x", `${xPercent}%`);
    el.style.setProperty("--glow-y", `${yPercent}%`);
    el.style.setProperty("--glow-radius", "260px");

    // Tilt effect
    if (enableTilt) {
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.12,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    }

    // Magnetism effect
    if (enableMagnetism) {
      gsap.to(el, {
        x: (x - centerX) * 0.05,
        y: (y - centerY) * 0.05,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleCardMouseLeave = (e) => {
    if (shouldDisableAnimations) return;
    const el = e.currentTarget;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      duration: 0.25,
    });
  };

  const handleCardClick = (e, card) => {
    setExpandedCard(card);
  };

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight gridRef={gridRef} spotlightRadius={spotlightRadius} />
      )}

      <BentoCardGrid gridRef={gridRef}>
        {cardData.map((card, index) => {
          const className = [
            "magic-bento-card",
            textAutoHide ? "magic-bento-card--text-autohide" : "",
            enableBorderGlow ? "magic-bento-card--border-glow" : "",
          ].join(" ");

          return (
            <div
              key={index}
              className={className}
              style={{
                backgroundColor: card.color,
                "--glow-color": glowColor,
                "--spotlight-intensity": 0,
              }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              onClick={(e) => handleCardClick(e, card)}
            >
              {card.bgImage && (
                <div
                  className="magic-bento-card__bg"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                />
              )}

              <div className="magic-bento-card__overlay" />

              <div className="magic-bento-card__inner">
                <div className="magic-bento-card__header">
                  <div className="magic-bento-card__label">
                    <b>{card.label}</b>
                  </div>
                </div>
                <div className="magic-bento-card__content">
                  <h2 className="magic-bento-card__title">{card.title}</h2>
                  <p className="magic-bento-card__description">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </BentoCardGrid>

      {/* EXPANDED MODAL */}
      {expandedCard && (
        <div
          className="expanded-card-overlay"
          onClick={() => setExpandedCard(null)}
        >
          <div className="expanded-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setExpandedCard(null)}>
              ×
            </button>

            <h2 className="expanded-title">{expandedCard.label}</h2>
            <p className="expanded-sub">{expandedCard.description}</p>

            {/* GRID OF ITEMS */}
            <div className="items-grid">
              {expandedCard.items?.map((item, index) => (
                <div key={index} className="item-card">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MagicBento;
