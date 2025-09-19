

// import { useEffect, useRef, useState } from "react";

// const Carousel = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const slideCount = 3;
//   const timerRef = useRef(null);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const carouselTimerDelay = 5000;

//   const slides = [ 
//     // {
//     //   src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1740&auto=format&fit=crop",
//     //   alt: "Japan",
//     // },
//     // {
//     //   src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=1740&auto=format&fit=crop",
//     //   alt: "Italy",
//     // },
//     // {
//     //   src: "https://images.unsplash.com/photo-1587974136998-4fcc253b6183?q=80&w=1710&auto=format&fit=crop",
//     //   alt: "Slide 3",
//     // },

//       {
        
//       src: "/public/sante-slide1.jpg",
//       alt: "Japan",
//     },
//     {
//       src: "/public/sante-slide2.jpg",
//       alt: "Italy",
//     },
//     {
//       src: "/public/sante-slide.jpg",
//       alt: "Slide 3",
//     },
//   ];

//   const resetTimer = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slideCount);
//     }, carouselTimerDelay);
//   };

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.changedTouches[0].screenX;
//   };

//   const handleTouchEnd = (e) => {
//     touchEndX.current = e.changedTouches[0].screenX;
//     const diff = touchStartX.current - touchEndX.current;
//     const swipeThreshold = 50;
//     if (Math.abs(diff) > swipeThreshold) {
//       if (diff > 0) {
//         nextSlide();
//       } else {
//         prevSlide();
//       }
//     }
//   };

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % slideCount);
//     resetTimer();
//   };

//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
//     resetTimer();
//   };

//   const goToSlide = (index) => {
//     setActiveSlide(index);
//     resetTimer();
//   };

//   useEffect(() => {
//     resetTimer();
//     return () => clearInterval(timerRef.current);
//   }, []);

//   return (
//     <section className="bg-gray-100">
//       <div className="w-full h-[20px] sm:h-[500px] relative group overflow-hidden">
//         {/* Carousel Content */}
//         <div
//           className="flex transition-transform duration-500 ease-in-out h-full"
//           style={{ transform: `translateX(-${activeSlide * 100}%)` }}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           {slides.map((slide, idx) => (
//             <div
//               key={idx}
//               className="carousel-item w-full h-full flex items-center justify-center flex-shrink-0"
//             >
//               <img
//                 src={slide.src}
//                 alt={slide.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Prev Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 sm:p-3 transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//           </svg>
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 sm:p-3 transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//           </svg>
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => goToSlide(idx)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 idx === activeSlide ? "bg-white" : "bg-white opacity-50 hover:opacity-75"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//             <div className=" text-center py-4 px-6 bg-blue-100 ">
//             <p className=" font-semibold text-2xl text-left ml-10 mr-10">
//               Devenez acteur du bien-être avec nos formations en santé, en ligne et accessibles à tous.
//             </p>
//           </div>

//             <div className="bg-blue-50 flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-6">
//         {/* Texte */}
//         <div className="md:w-1/2">
//           <h2 className="text-2xl font-bold mb-4 ml-10 mr-10">
//             Atteignez vos objectifs de carrière avec <span className="text-black">Santé Plus</span>
//           </h2>
//           <p className="text-gray-700 mb-6 ml-10 mr-10">
//             Profitez gratuitement de formations de pointe et acquérez des compétences prêtes à l'emploi, issues d'institutions de renommée mondiale.
//           </p>
//           <button className="bg-blue-800 text-white px-5 py-2 rounded-full ml-10 mr-10 coursor-pointer">
//             Commencer à suivre la formation
//           </button>
//         </div> 

//         {/* Image droite */}
//         <div className="md:w-50 pt- ml-40 ">
//           <img
//             src="public/medecine_doite.jpg"
//             alt="formation santé"
//             className="rounded-lg"
//           />    
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Carousel;


import { useState } from "react";

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const slides = [
    { src: "/sante-slide1.jpg", alt: "Japan" },
    { src: "/sante-slide2.jpg", alt: "Italy" },
    { src: "/sante-slide.jpg", alt: "Slide 3" },
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full relative group overflow-hidden">
      {/* Conteneur du carousel */}
      <div className="relative w-full h-[100px] sm:h-[400px] md:h-[500px]">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Bouton gauche */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        ◀
      </button>

      {/* Bouton droit */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        ▶
      </button>

      {/* Petits points indicateurs */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
