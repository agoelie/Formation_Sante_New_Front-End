import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Kemi P.",
    text: "Avec un poste exigeant en santé et trois enfants, la flexibilité de vos programmes de formation était exactement ce dont j’avais besoin pour progresser. C’est ce qui m’a motivé(e) à persévérer et à continuer à me former, à mon propre rythme.",
    image: "/public/temoignage_femme1.jpg",
  },
  {
    id: 2,
    name: "Paul D.",
    text: "Vos cours m’ont aidé à évoluer dans ma carrière tout en conciliant ma vie familiale. La possibilité d’apprendre à mon rythme est un vrai plus.",
    image: "public/temoignage1.jpg",
  },
  {
    id: 3,
    name: "Aïcha M.",
    text: "Grâce à vos formations, j’ai pu acquérir de nouvelles compétences et obtenir une promotion. La plateforme est intuitive et accessible.",
    image: "/public/temoignage2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-12 px-6 ">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-10">
        Ce que les abonnés réalisent grâce à l’apprentissage
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <h3 className="font-medium text-gray-800">{item.name}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
