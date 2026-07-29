import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import {
  FaExternalLinkAlt,
  FaCheckCircle,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { certs } from "../lib/certificates";

const Certifications = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const slides = certs.map((cert) => ({
    src: cert.image,
    alt: cert.title,
    title: cert.title,
    issuer: cert.issuer,
    verifyUrl: cert.verifyUrl,
  }));

  const renderSlide = ({ slide }) => (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-3xl mx-auto aspect-video">
        <img
          src={slide.src}
          alt={slide.alt}
          className="w-full h-full object-contain bg-black/5"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
        <p className="text-white/80 text-sm mb-3">{slide.issuer}</p>
        <a
          href={slide.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Verify Credential <FaExternalLinkAlt className="text-sm" />
        </a>
      </div>
    </div>
  );
  return (
    <>
      <section id="certifications" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Proof of Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900">
              Verified Certifications
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Every badge below can be independently verified—just click to see
              the official credential page.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {certs.map((cert, index) => (
              <div
                key={cert.title + index}
                className="transform transition-all duration-300 hover:-translate-y-1"
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="group relative w-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Certificate thumbnail */}
                  <div className="aspect-4/3 relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Verified overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-3">
                      <span className="text-white text-xs font-medium flex items-center gap-1">
                        <FaSearch /> View
                      </span>
                    </div>
                    {/* Verified badge top-right */}
                    <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full shadow-md">
                      <FaCheckCircle className="text-xs" />
                    </div>
                  </div>

                  {/* Info below image */}
                  <div className="p-3 text-left">
                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Yet Another React Lightbox */}
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={slides}
            index={currentIndex}
            render={{
              slide: renderSlide,
              buttonPrev: () => null,
              buttonNext: () => null,
              iconClose: () => (
                <button className="text-white hover:text-gray-300 transition-colors">
                  <FaTimes className="w-6 h-6" />
                </button>
              ),
            }}
            styles={{
              container: {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              },
            }}
            carousel={{
              finite: true,
            }}
            toolbar={{
              buttons: [
                <button
                  key="close"
                  onClick={() => setLightboxOpen(false)}
                  className="text-white hover:text-gray-300 transition-colors p-2"
                >
                  <FaTimes className="w-6 h-6" />
                </button>,
              ],
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Certifications;
