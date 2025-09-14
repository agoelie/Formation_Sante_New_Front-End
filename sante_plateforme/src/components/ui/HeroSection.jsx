import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Image principale avec flèches */}
      <div className="relative w-full h-64">
        <img
          src="../assets/service .jpg"
          alt="slider"
          className="w-full h-full object-cover "
        />
        {/* Flèche gauche */}
        <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Flèche droite */}
        <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bandeau texte */}
      <div className=" text-center py-4 px-6 bg-blue-100 ">
        <p className=" font-semibold text-2xl text-left ml-10 mr-10">
          Devenez acteur du bien-être avec nos formations en santé, en ligne et accessibles à tous.
        </p>
      </div>

      {/* Bloc texte + image */}
      <div className="bg-blue-50 flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-6">
        {/* Texte */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 ml-10 mr-10">
            Atteignez vos objectifs de carrière avec <span className="text-black">Santé Plus</span>
          </h2>
          <p className="text-gray-700 mb-6 ml-10 mr-10">
            Profitez gratuitement de formations de pointe et acquérez des compétences prêtes à l'emploi, issues d'institutions de renommée mondiale.
          </p>
          <button className="bg-blue-800 text-white px-5 py-2 rounded-full ml-10 mr-10 coursor-pointer">
            Commencer à suivre la formation
          </button>
        </div> 

        {/* Image droite */}
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/400x250"
            alt="formation santé"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;