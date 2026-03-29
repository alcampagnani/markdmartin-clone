import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'I was introduced to Mark Martin and was extremely satisfied with his professional approach and guidance',
    author: 'L.T.',
  },
  {
    quote:
      'Martin & Oliveira offered such a great service...we recommend Martin & Oliveira Law Firm.',
    author: 'J.S.',
  },
  {
    quote:
      'Extremely professional and really takes your case...helped with my case under the Hague convention for child abduction.',
    author: 'M.S.',
  },
  {
    quote: 'In less than 3 months, Dr Mark solved the problem',
    author: 'Cris Guerra',
  },
  {
    quote: 'Corrected the date of my American divorce in Brazil',
    author: 'Rafael Barriola',
  },
  {
    quote:
      'Impeccable work. My son and I are at the beginning of a new life',
    author: 'Renata Barleben',
  },
  {
    quote:
      'Provided me with a high quality and highly professional service to rectify my Brazilian marriage certificate',
    author: 'Gracielle Graça',
  },
  {
    quote: 'Professionalism, attention and frequent communication',
    author: 'Natalia Silva Harwood',
  },
  {
    quote: 'Excellent professionals...great knowledge',
    author: 'Flávio De Souza Morgado',
  },
  {
    quote: 'Competence, punctuality, seriousness, honesty, consideration',
    author: 'Livia Amaral',
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
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-16 uppercase tracking-[2px]"
          style={{ color: '#2c3540' }}
        >
          Testimonials
        </h2>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>

          {/* Testimonial Content */}
          <div className="flex flex-col items-center max-w-[700px] min-h-[200px] justify-center">
            <Quote
              className="w-10 h-10 mb-6"
              style={{ color: '#15779b', opacity: 0.3 }}
            />

            <div
              className="transition-opacity duration-300"
              style={{ opacity: isTransitioning ? 0 : 1 }}
            >
              <p
                className="text-center italic text-xl leading-relaxed mb-6"
                style={{ color: '#2b2b2b' }}
              >
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              <p
                className="text-center font-bold"
                style={{ color: '#757575' }}
              >
                &mdash; {testimonials[currentIndex].author}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className="w-3 h-3 rounded-full transition-colors duration-300"
              style={{
                backgroundColor:
                  index === currentIndex ? '#15779b' : '#d2d2d2',
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
