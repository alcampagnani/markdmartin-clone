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
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[800px] px-4">
        <h2 className="mb-4 text-center text-3xl font-bold uppercase tracking-[2px] text-[#2c3540] md:text-4xl">
          Testimonials
        </h2>
        <div className="mx-auto mb-12 h-[2px] w-[60px] bg-[#c5a55a]" />

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <button
            onClick={goPrev}
            className="flex h-10 w-10 shrink-0 items-center justify-center transition-colors hover:text-[#c5a55a]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-[#2c3540]" />
          </button>

          <div className="flex min-h-[160px] max-w-[600px] flex-col items-center justify-center">
            <div
              className="transition-opacity duration-300"
              style={{ opacity: isTransitioning ? 0 : 1 }}
            >
              <p className="mb-6 text-center text-lg leading-relaxed italic text-[#2c3540] md:text-xl">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              <p className="text-center text-sm text-[#2c3540]/70">
                &mdash; {testimonials[currentIndex].author}
              </p>
            </div>
          </div>

          <button
            onClick={goNext}
            className="flex h-10 w-10 shrink-0 items-center justify-center transition-colors hover:text-[#c5a55a]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-[#2c3540]" />
          </button>
        </div>
      </div>
    </section>
  );
}
