import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 2,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Mieux noté",
    image: "/medecine.jpg",
  },
  {
    id: 3,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 4,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 5,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 6,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Mieux noté",
    image: "/medecine.jpg",
  },
  {
    id: 7,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 8,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },

  // Ajoutez d'autres cours ici
  {
    id: 1,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 2,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Mieux noté",
    image: "/medecine.jpg",
  },
  {
    id: 3,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 4,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 5,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 6,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Mieux noté",
    image: "/medecine.jpg",
  },
  {
    id: 7,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
  {
    id: 8,
    title: "Hygiène et Prévention des Infections",
    rating: 4.5,
    badge: "Nouveau",
    image: "/medecine.jpg",
  },
];

export default function CoursesGrid() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;

  const startIndex = (page - 1) * itemsPerPage;
  const selectedCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="max-w-full mx-auto py-8 px-4 ml-10 mr-10">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {selectedCourses.map((course) => (
          <div
            key={course.id}
            className="border border-purple-400 rounded-md shadow-md overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-700 flex items-center gap-2 mt-1">
                {course.rating}{" "}
                <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
              </p>

              {/* Badges */}
              <div className="flex items-center justify-between mt-3">
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    course.badge === "Nouveau"
                      ? "bg-red-600 text-white"
                      : "bg-green-700 text-white"
                  }`}
                >
                  {course.badge}
                </span>
                <a href="#" className="text-pink-600 text-sm font-medium">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-md text-blue-600 hover:bg-blue-50 disabled:opacity-50 bg-green-50"
        >
          <ArrowLeft size={18} /> Précédent
        </button>

        <button
          onClick={() =>
            setPage((p) => (p * itemsPerPage < courses.length ? p + 1 : p))
          }
          disabled={page * itemsPerPage >= courses.length}
          className="flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-md text-blue-600 hover:bg-blue-50 disabled:opacity-50 bg-blue-50"
        >
          Suivant <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
