import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectsCarousel({ projects }) {
  const router = useRouter();

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false, // Continue autoplay even after user interaction
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} onClick={() => router.push(`/projectDetails/${index}`)}>
          <Image
            width={1500}
            height={500}
            src={project.img}
            alt={project.title}
            className="cursor-pointer"
          />
          <div className="text-center mt-2 mb-8 font-bold">{project.title}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const ProjectsCarousel = ({ projects }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically slide every 5 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === projects?.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, [projects]);

//   // Function to manually go to the next or previous slide
//   const handlePrev = () => {
//     setCurrentIndex(
//       currentIndex === 0 ? projects?.length - 1 : currentIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex(
//       currentIndex === projects?.length - 1 ? 0 : currentIndex + 1
//     );
//   };

//   return (
//     <div
//       className="relative w-full"
//       id="projects-carousel"
//       data-carousel="slide"
//     >
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {projects?.map((project, index) => (
//           <Link
//             key={index}
//             href={`/projectDetails/${index}`}
//             rel="noopener noreferrer"
//             className={`absolute block w-full transition-opacity duration-700 ease-in-out ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ zIndex: index === currentIndex ? 1 : 0 }}
//           >
//             <Image
//               width={500}
//               height={500}
//               src={project?.img}
//               alt={project?.title}
//               className="block w-full h-56 md:h-96 object-cover"
//             />
//           </Link>
//         ))}
//       </div>

//       {/* Slider indicators */}
//       <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//         {projects?.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-gray-900" : "bg-gray-300"
//             }`}
//             aria-current={currentIndex === index}
//             onClick={() => setCurrentIndex(index)}
//             aria-label={`Slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Slider controls */}
//       <button
//         type="button"
//         className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
//         onClick={handlePrev}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
//           <svg
//             className="w-6 h-6 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
//         onClick={handleNext}
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
//           <svg
//             className="w-6 h-6 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default ProjectsCarousel;
