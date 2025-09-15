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
    <div className="w-full px-6 py-10 ml-10 mr-10">
      {/* Grille des cours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ml-10 mr-20">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-purple-500 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium text-gray-800 text-base mb-2 ">
                {course.title}
              </h3>
              <div className="flex items-center text-sm mb-3">
                <span className="text-gray-700 mr-2">{course.rating}</span>
                <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-red-700 text-white px-2 py-1 text-xs rounded">
                  Nouveau
                </span>
                <button className="text-blue-600 text-sm font-medium">
                  Voir plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton du bas */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition ">
          Afficher tous les cours de la catalogue
        </button>
      </div>
    </div>
  );
};

export default Courses;
