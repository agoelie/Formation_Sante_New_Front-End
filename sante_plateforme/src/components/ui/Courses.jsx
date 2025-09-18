


import React from "react";

const courses = [
  {
    id: 1,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    image: "/public/higiène2.jpg",
  },
  {
    id: 2,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    image: "/public/medecine.jpg",
  },
  {
    id: 3,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    image: "/public/Medecine2.jpg",
  },
  {
    id: 4,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    image: "/public/pediatrie1.jpg",
  },
  {
    id: 5,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    image: "/public/pediatrie2.jpg",
  },
  {
    id: 6,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    image: "/public/pediatrie1.jpg",
  },
];

const Courses = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {/* Grille des cours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            {/* Image avec overlay */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-25 hover:bg-transparent transition duration-300"></div>

              {/* Badge Nouveau */}
              <div className="absolute bottom-0 left-0 bg-red-700 px-4 py-2 text-white text-sm hover:bg-white hover:text-red-700 transition duration-500">
                Nouveau
              </div>

              {/* Rating en haut à droite */}
              <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                <span className="font-bold">{course.rating}</span>
                <small>⭐</small>
              </div>
            </div>

            {/* Contenu du cours */}
            <div className="px-6 py-4">
              <h3 className="font-semibold text-lg text-gray-800 hover:text-indigo-600 transition duration-500 ease-in-out">
                {course.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Formation disponible dans notre catalogue
              </p>
            </div>

            {/* Bouton Voir plus */}
            <div className="px-6 py-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">Cours en ligne</span>
              <button className="text-blue-600 text-sm font-medium hover:underline">
                Voir plus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton du bas */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
          Afficher tous les cours du catalogue
        </button>
      </div>
    </div>
  );
};

export default Courses;

