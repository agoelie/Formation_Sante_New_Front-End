// // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css"; 
// // import "slick-carousel/slick/slick-theme.css";

// // const NewsHome = () => {
// //   const news = [
// //     {
// //       id: 1,
// //       title: "Nouveau programme de formation",
// //       text: "Découvrez notre nouveau module sur la santé numérique, accessible dès aujourd’hui.",
// //       image: "https://source.unsplash.com/1600x900/?health,doctor",
// //     },
// //     {
// //       id: 2,
// //       title: "Atelier en ligne",
// //       text: "Rejoignez notre atelier sur la prévention médicale, animé par des experts internationaux.",
// //       image: "https://source.unsplash.com/1600x900/?medicine,hospital",
// //     },
// //     {
// //       id: 3,
// //       title: "Partenariat universitaire",
// //       text: "Nous collaborons désormais avec des universités pour élargir nos programmes.",
// //       image: "https://source.unsplash.com/1600x900/?university,education",
// //     },
// //   ];

// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 1000,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 5000,
// //     pauseOnHover: false,
// //     arrows: false,
// //   };

// //   return (
// //     <div className="w-full h-screen">
// //       <Slider {...settings} className="h-screen">
// //         {news.map((item) => (
// //           <div key={item.id} className="relative w-full h-screen">
// //             <img
// //               src={item.image}
// //               alt={item.title}
// //               className="w-full h-screen object-cover"
// //             />
// //             <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
// //               <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
// //                 {item.title}
// //               </h2>
// //               <p className="text-lg md:text-2xl text-gray-200 max-w-3xl drop-shadow-md">
// //                 {item.text}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default NewsHome;

// import { useEffect, useState } from "react";

// const newsData = [
//   {
//     id: 1,
//     title: "Lancement du nouveau programme de santé",
//     description: "Notre plateforme innove avec des formations spécialisées pour les professionnels de santé.",
//     image: "https://source.unsplash.com/1200x500/?health,doctor"
//   },
//   {
//     id: 2,
//     title: "Conférence internationale en ligne",
//     description: "Un événement virtuel pour partager les dernières découvertes médicales.",
//     image: "https://source.unsplash.com/1200x500/?conference,medicine"
//   },
//   {
//     id: 3,
//     title: "Nouveaux cours disponibles",
//     description: "Découvrez nos cours interactifs pour rester à jour dans votre domaine.",
//     image: "https://source.unsplash.com/1200x500/?education,health"
//   }
// ];

// const NewsSection = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto défilement toutes les 5 secondes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % newsData.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-[500px] relative overflow-hidden rounded-2xl shadow-xl">
//       {newsData.map((news, index) => (
//         <div
//           key={news.id}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === current ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={news.image}
//             alt={news.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
//             <h2 className="text-3xl font-bold text-white mb-4">{news.title}</h2>
//             <p className="text-lg text-gray-200 max-w-2xl">{news.description}</p>
//           </div>
//         </div>
//       ))}

//       {/* Points de navigation */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
//         {newsData.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`w-4 h-4 rounded-full ${
//               idx === current ? "bg-white" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsSection;

// const newsData = [
//   {
//     id: 1,
//     title: "Lancement du nouveau programme de santé",
//     subtitle: "Publié le 15 Septembre 2025",
//     body: "Notre plateforme innove avec des formations spécialisées pour les professionnels de santé. Ce programme inclut des ateliers pratiques, des conférences en ligne et des certifications reconnues.",
//     image: "./public/temoignage1.jpg"
//   },
//   {
//     id: 2,
//     title: "Conférence internationale en ligne",
//     subtitle: "Publié le 12 Septembre 2025",
//     body: "Un événement virtuel a réuni plus de 2000 participants du monde entier pour partager les dernières découvertes médicales et les bonnes pratiques.",
//     image: "./public/temoignage1.jpg"
//   },
//   {
//     id: 3,
//     title: "Nouveaux cours disponibles",
//     subtitle: "Publié le 08 Septembre 2025",
//     body: "Découvrez nos cours interactifs dans divers domaines de la médecine. Chaque cours est conçu pour être flexible, accessible et certifiant.",
//     image: "./public/temoignage1.jpg"
//   }
// ];

// const NewsPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
//       {/* Header de la page */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-extrabold text-gray-900">📰 Actualités</h1>
//         <p className="text-lg text-gray-600 mt-2">
//           Découvrez les dernières annonces, événements et mises à jour de la plateforme.
//         </p>
//       </div>

//       {/* Liste des actualités */}
//       <div className="space-y-10">
//         {newsData.map((news) => (
//           <div
//             key={news.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition"
//           >
//             {/* Image */}
//             <img
//               src={news.image}
//               alt={news.title}
//               className="w-full md:w-1/3 object-cover h-64 md:h-auto"
//             />

//             {/* Contenu */}
//             <div className="p-6 md:w-2/3 flex flex-col justify-center">
//               <h2 className="text-2xl font-bold text-indigo-700">{news.title}</h2>
//               <h3 className="text-sm text-gray-500 mb-3">{news.subtitle}</h3>
//               <p className="text-gray-700 leading-relaxed">{news.body}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsPage;


// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const newsData = [
//   {
//     id: 1,
//     title: "Lancement du nouveau programme de santé",
//     subtitle: "Publié le 15 Septembre 2025",
//     body: "Notre plateforme innove avec des formations spécialisées pour les professionnels de santé. Ce programme inclut des ateliers pratiques, des conférences en ligne et des certifications reconnues.",
//     image: "/temoignage1.jpg"
//   },
//   {
//     id: 2,
//     title: "Conférence internationale en ligne",
//     subtitle: "Publié le 12 Septembre 2025",
//     body: "Un événement virtuel a réuni plus de 2000 participants du monde entier pour partager les dernières découvertes médicales et les bonnes pratiques.",
//     image: "/temoignage1.jpg"
//   },
//   {
//     id: 3,
//     title: "Nouveaux cours disponibles",
//     subtitle: "Publié le 08 Septembre 2025",
//     body: "Découvrez nos cours interactifs dans divers domaines de la médecine. Chaque cours est conçu pour être flexible, accessible et certifiant.",
//     image: "/temoignage1.jpg"
//   }
// ];

// const NewsPage = () => {
//   // Paramètres du slider
//   const settings = {
//     dots: true,             // Petits points de navigation
//     infinite: true,         // Boucle infinie
//     speed: 800,             // Vitesse de transition
//     slidesToShow: 1,        // Afficher une actu à la fois
//     slidesToScroll: 1,
//     autoplay: true,         // Défilement automatique
//     autoplaySpeed: 5000,    // Temps entre les slides (5s)
//     arrows: true            // Flèches navigation
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
//       {/* Header de la page */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-extrabold text-gray-900">📰 Actualités</h1>
//         <p className="text-lg text-gray-600 mt-2">
//           Découvrez les dernières annonces, événements et mises à jour de la plateforme.
//         </p>
//       </div>

//       {/* Carrousel */}
//       <Slider {...settings}>
//         {newsData.map((news) => (
//           <div key={news.id} className="px-4">
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition">
//               {/* Image */}
//               <img
//                 src={news.image}
//                 alt={news.title}
//                 className="w-full md:w-1/3 object-cover h-64 md:h-auto"
//               />

//               {/* Contenu */}
//               <div className="p-6 md:w-2/3 flex flex-col justify-center">
//                 <h2 className="text-2xl font-bold text-indigo-700">{news.title}</h2>
//                 <h3 className="text-sm text-gray-500 mb-3">{news.subtitle}</h3>
//                 <p className="text-gray-700 leading-relaxed">{news.body}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default NewsPage;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const newsData = [
  {
    id: 1,
    title: "Lancement du nouveau programme de santé",
    subtitle: "Publié le 15 Septembre 2025",
    body: "Notre plateforme innove avec des formations spécialisées pour les professionnels de santé. Ce programme inclut des ateliers pratiques, des conférences en ligne et des certifications reconnues.",
    image: "/temoignage2.jpg"
  },
  {
    id: 2,
    title: "Conférence internationale en ligne",
    subtitle: "Publié le 12 Septembre 2025",
    body: "Un événement virtuel a réuni plus de 2000 participants du monde entier pour partager les dernières découvertes médicales et les bonnes pratiques.",
    image: "/temoignage1.jpg"
  },
  {
    id: 3,
    title: "Nouveaux cours disponibles",
    subtitle: "Publié le 08 Septembre 2025",
    body: "Découvrez nos cours interactifs dans divers domaines de la médecine. Chaque cours est conçu pour être flexible, accessible et certifiant.",
    image: "/temoignage_femme1.jpg"
  }
];

const NewsPage = () => {
  // Paramètres du slider
  const settings = {
    dots: true,             // Petits points de navigation
    infinite: true,         // Boucle infinie
    speed: 800,             // Vitesse de transition
    slidesToShow: 1,        // Afficher une actu à la fois
    slidesToScroll: 1,
    autoplay: true,         // Défilement automatique
    autoplaySpeed: 10000,   // ⏱️ Temps entre les slides (10s = 10000ms)
    arrows: true            // Flèches navigation
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      {/* Header de la page */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">📰 Actualités</h1>
        <p className="text-lg text-gray-600 mt-2">
          Découvrez les dernières annonces, événements et mises à jour de la plateforme.
        </p>
      </div>

      {/* Carrousel */}
      <Slider {...settings}>
        {newsData.map((news) => (
          <div key={news.id} className="px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition">
              {/* Image */}
              <img
                src={news.image}
                alt={news.title}
                className="w-full md:w-1/3 object-cover h-64 md:h-auto"
              />

              {/* Contenu */}
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-indigo-700">{news.title}</h2>
                <h3 className="text-sm text-gray-500 mb-3">{news.subtitle}</h3>
                <p className="text-gray-700 leading-relaxed">{news.body}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsPage;
