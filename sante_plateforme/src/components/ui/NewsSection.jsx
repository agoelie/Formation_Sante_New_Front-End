

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
