import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was introduced to Mark Martin and was extremely satisfied with his professional approach and guidance",
    author: "L.T.",
  },
  {
    quote:
      "Martin & Oliveira offered such a great service...we recommend Martin & Oliveira Law Firm.",
    author: "J.S.",
  },
  {
    quote:
      "Extremely professional and really takes your case...helped with my case under the Hague convention for child abduction.",
    author: "M.S.",
  },
  {
    quote: "In less than 3 months, Dr Mark solved the problem",
    author: "Cris Guerra",
  },
  {
    quote: "Corrected the date of my American divorce in Brazil",
    author: "Rafael Barriola",
  },
  {
    quote:
      "Impeccable work. My son and I are at the beginning of a new life",
    author: "Renata Barleben",
  },
  {
    quote:
      "Provided me with a high quality and highly professional service to rectify my Brazilian marriage certificate",
    author: "Gracielle Graça",
  },
  {
    quote: "Professionalism, attention and frequent communication",
    author: "Natalia Silva Harwood",
  },
  {
    quote: "Excellent professionals...great knowledge",
    author: "Flávio De Souza Morgado",
  },
  {
    quote: "Competence, punctuality, seriousness, honesty, consideration",
    author: "Livia Amaral",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 300);
    },
    [currentIndex]
  );

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % testimonials.length);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  }, [currentIndex, goTo]);

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section className="bg-[#2c3540] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[3px] text-[#c5a55a]">
          What Our Clients Say
        </p>
        <h2 className="mb-16 text-center text-3xl font-bold uppercase tracking-[2px] text-white md:text-4xl">
          Testimonials
        </h2>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all hover:border-[#c5a55a] hover:bg-[#c5a55a]/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          {/* Testimonial Content */}
          <div className="flex min-h-[200px] max-w-[700px] flex-col items-center justify-center">
            {/* Quote marks */}
            <div className="mb-6 text-6xl leading-none text-[#c5a55a]/40">&ldquo;</div>

            <div
              className="transition-opacity duration-300"
              style={{ opacity: isTransitioning ? 0 : 1 }}
            >
              <p className="mb-6 text-center text-xl leading-relaxed italic text-white/90 md:text-2xl">
                {testimonials[currentIndex].quote}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-[#c5a55a]" />
                <p className="text-sm font-bold uppercase tracking-wider text-[#c5a55a]">
                  {testimonials[currentIndex].author}
                </p>
                <div className="h-px w-8 bg-[#c5a55a]" />
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all hover:border-[#c5a55a] hover:bg-[#c5a55a]/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#c5a55a]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
