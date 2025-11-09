import { useState, useEffect, useRef, useCallback } from "react";
import FocusTrap from "focus-trap-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
// removed ExternalLinkIcon since the "View Project" action was removed
import { Link } from "react-router-dom";
import CustomHolleyECU from "../images/CustomHolleyECU.jpg";
import StockSteeringWheelButtonHolder from "../images/StockSteeringWheelButtonHolder.jpg";
import WheelButtonHolders from "../images/WheelButtonHolders.jpg";
import RockerPanel from "../images/RockerPanel.jpg";
import S550TurboKit from "../images/S550TurboKit.jpg";
import TubeFront from "../images/TubeFront.jpg";
import end2000Camaro from "../images/end2000Camaro.jpg";
import HydraulicBrake from "../images/HydraulicBrake.jpg";
import weld from "../images/weld.jpg";
export const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  // lightbox state: index of opened project in filteredProjects (or null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxMounted, setLightboxMounted] = useState(false);
  const prevActiveElement = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const projects = [
    {
      title: "Stock Steering Wheel Button Holder",
      category: "Printing",
      description:
        "Designed and printed a custom button holder for a stock steering wheel using durable materials.",
      image: StockSteeringWheelButtonHolder,
      tags: ["Printing"],
    },
    {
      title: "Steering Wheel Button Holder",
      category: "Designs",
      description: "Steering wheel button holder for a custom car build.",
      image: WheelButtonHolders,
      tags: ["Printing", "Designs"],
    },
    {
      title: "Rocker Panel Replacement-1970 C10",
      category: "Fabrication",
      description: "Replacement rocker panels for a 1970 C10 truck.",
      image: RockerPanel,
      tags: ["Fabrication", "Designs"],
    },
    {
      title: "Turbo Kit",
      category: "Fabrication",
      description:
        "S550 turbo kit with custom fabricated exhaust manifold and downpipe.",
      image: S550TurboKit,
      tags: ["Fabrication", "Designs"],
    },
    {
      title: "Tube Front End-2000 Camaro",
      category: "Fabrication",
      description: "Tube front end for a 2000 Camaro.",
      image: TubeFront,
      tags: ["Welding & Fabrication", "Designs"],
    },
    {
      title: "Tube Front End Camaro",
      category: "Fabrication",
      description:
        "Tube front end for a 2000 Camaro, custom fabricated for strength and style.",
      image: end2000Camaro,
      tags: ["Welding & Fabrication", "Designs"],
    },
    {
      title: "Hydraulic Brake Caliper Bracket Addition",
      category: "Welding & Fabrication",
      description:
        "Hydraulic brake caliper bracket addition for improved braking.",
      image: HydraulicBrake,
      tags: ["Designs", "Welding & Fabrication"],
    },
    {
      title: "Welding & Fabrication Project",
      category: "Welding & Fabrication",
      description:
        "Welding and fabrication project showcasing custom metalwork.",
      image: weld,
      tags: ["Welding & Fabrication", "Designs"],
    },
    {
      title: "Custom Holley ECU",
      category: "Printing",
      description: "Custom-tuned Holley ECU installation and calibration.",
      image: CustomHolleyECU,
      tags: ["Printing", "SLS Printing"],
    },
  ];
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  const openLightbox = (index: number) => {
    prevActiveElement.current = document.activeElement as HTMLElement;
    setLightboxIndex(index);
    // mount then animate in
    setLightboxMounted(false);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setLightboxMounted(true))
    );
  };

  const closeLightbox = () => {
    setLightboxMounted(false);
    setTimeout(() => {
      setLightboxIndex(null);
      if (prevActiveElement.current) prevActiveElement.current.focus();
    }, 250); // matches animation
  };

  // import { useCallback } from "react"; // moved to top

  const gotoPrev = useCallback(() => {
    if (lightboxIndex == null) return;
    const prev =
      (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setLightboxMounted(false);
    setTimeout(() => {
      setLightboxIndex(prev);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setLightboxMounted(true))
      );
    }, 180);
  }, [lightboxIndex, filteredProjects.length]);

  const gotoNext = useCallback(() => {
    if (lightboxIndex == null) return;
    const next = (lightboxIndex + 1) % filteredProjects.length;
    setLightboxMounted(false);
    setTimeout(() => {
      setLightboxIndex(next);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setLightboxMounted(true))
      );
    }, 180);
  }, [lightboxIndex, filteredProjects.length]);

  // keyboard handling (Escape, arrows, Tab trap)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex == null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") gotoPrev();
      if (e.key === "ArrowRight") gotoNext();
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filteredProjects.length, gotoPrev, gotoNext]);

  // helper to generate src and srcSet for responsive images
  function getSrcAndSrcSet(image: unknown): { src: string; srcSet?: string } {
    if (typeof image === "string") {
      try {
        const url = new URL(image);
        const params = url.searchParams;
        const w = params.get("w");
        if (w) {
          const widths = [600, 1050, 1600, 2400];
          const src = image;
          const srcSet = widths
            .map((width) => {
              const copy = new URL(image);
              copy.searchParams.set("w", String(width));
              return `${copy.toString()} ${width}w`;
            })
            .join(", ");
          return { src, srcSet };
        }
      } catch (e) {
        // not a valid URL, fallthrough
      }
      return { src: image, srcSet: undefined };
    }
    // imported images (module) -> string
    return { src: String(image), srcSet: undefined };
  }

  // preload current lightbox image
  useEffect(() => {
    if (lightboxIndex == null) return;
    const project = filteredProjects[lightboxIndex];
    const { src } = getSrcAndSrcSet(project.image);
    const img = new Image();
    img.src = src;
    // preload adjacent images for instant navigation
    const prev =
      filteredProjects[
        (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length
      ];
    const next =
      filteredProjects[(lightboxIndex + 1) % filteredProjects.length];
    const { src: prevSrc } = getSrcAndSrcSet(prev.image);
    const { src: nextSrc } = getSrcAndSrcSet(next.image);
    const p = new Image();
    p.src = prevSrc;
    const n = new Image();
    n.src = nextSrc;
  }, [lightboxIndex, filteredProjects]);
  const categories = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "Welding & Fabrication",
      label: "Welding & Fabrication",
    },
    {
      id: "SLS Printing",
      label: "SLS Printing",
    },
    {
      id: "FDM Printing",
      label: "FDM Printing",
    },
    {
      id: "Resin Printing",
      label: "Resin Printing",
    },
    {
      id: "Durable Powder Coating",
      label: "Durable Powder Coating",
    },
    {
      id: "Designs",
      label: "Designs",
    },
  ];
  return (
    <main className="pt-20">
      <section className="section-padding bg-light">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            Explore our diverse portfolio showcasing our expertise in 3D
            printing, fabrication, and custom designs. From intricate prototypes
            to robust metalworks, see how we bring ideas to life with precision
            and creativity.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 mx-2 mb-2 rounded-md transition-colors ${
                  filter === category.id
                    ? "bg-accent text-white"
                    : "bg-light text-primary hover:bg-accent/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover-effect"
              >
                {/* clickable card: accessible via click or keyboard (Enter / Space) */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {lightboxIndex != null &&
        (() => {
          const project = filteredProjects[lightboxIndex];
          const { src, srcSet } = getSrcAndSrcSet(project.image);
          return (
            <div
              role="dialog"
              aria-modal="true"
              aria-label={project.title}
              className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity ${
                lightboxMounted ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeLightbox}
            >
              <FocusTrap
                focusTrapOptions={{
                  clickOutsideDeactivates: true,
                  escapeDeactivates: false,
                }}
              >
                <div
                  ref={modalRef}
                  className={`relative max-w-[1200px] w-full transform transition-transform ${
                    lightboxMounted ? "scale-100" : "scale-95"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeLightbox}
                    aria-label="Close image"
                    className="absolute -top-8 right-0 text-white bg-black/40 p-2 rounded-md hover:bg-black/60"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      gotoPrev();
                    }}
                    aria-label="Previous"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-md hover:bg-black/50"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      gotoNext();
                    }}
                    aria-label="Next"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-md hover:bg-black/50"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  <img
                    src={src}
                    srcSet={srcSet}
                    sizes="(max-width: 768px) 90vw, 1200px"
                    alt={project.title}
                    className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg mx-auto"
                  />

                  {project.title && (
                    <div className="mt-3 text-center text-white">
                      <div className="text-lg font-semibold">
                        {project.title}
                      </div>
                    </div>
                  )}
                  {/* image counter */}
                  <div className="mt-2 text-center text-white/80">
                    {lightboxIndex != null && (
                      <span>
                        {lightboxIndex + 1} / {filteredProjects.length}
                      </span>
                    )}
                  </div>
                </div>
              </FocusTrap>
            </div>
          );
        })()}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-light/90 max-w-2xl mx-auto mb-8">
            Ready to start your next project? We'd love to hear about your ideas
            and how we can help bring them to life.
          </p>
          <Link
            to="/contact"
            className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent/90 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
};
// imports consolidated at the top
