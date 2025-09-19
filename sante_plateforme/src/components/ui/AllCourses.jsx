// // import { useState } from "react";
// // import { ArrowLeft, ArrowRight } from "lucide-react";

// // const courses = [
// //   {
// //     id: 1,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Mieux noté",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 4,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 5,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 6,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Mieux noté",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 7,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 8,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },

// //   // Ajoutez d'autres cours ici
// //   {
// //     id: 1,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Mieux noté",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 4,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 5,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 6,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Mieux noté",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 7,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// //   {
// //     id: 8,
// //     title: "Hygiène et Prévention des Infections",
// //     rating: 4.5,
// //     badge: "Nouveau",
// //     image: "/medecine.jpg",
// //   },
// // ];

// // export default function CoursesGrid() {
// //   const [page, setPage] = useState(1);
// //   const itemsPerPage = 16;

// //   const startIndex = (page - 1) * itemsPerPage;
// //   const selectedCourses = courses.slice(startIndex, startIndex + itemsPerPage);

// //   return (
// //     <section className="max-w-full mx-auto py-8 px-4 ml-10 mr-10">
      
// //       {/* Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //         {selectedCourses.map((course) => (
// //           <div
// //             key={course.id}
// //             className="border border-purple-400 rounded-md shadow-md overflow-hidden"
// //           >
// //             <img
// //               src={course.image}
// //               alt={course.title}
// //               className="w-full h-40 object-cover"
// //             />
// //             <div className="p-3">
// //               <h3 className="text-sm font-semibold">{course.title}</h3>
// //               <p className="text-sm text-gray-700 flex items-center gap-2 mt-1">
// //                 {course.rating}{" "}
// //                 <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
// //               </p>

// //               {/* Badges */}
// //               <div className="flex items-center justify-between mt-3">
// //                 <span
// //                   className={`px-2 py-1 text-xs rounded ${
// //                     course.badge === "Nouveau"
// //                       ? "bg-red-600 text-white"
// //                       : "bg-green-700 text-white"
// //                   }`}
// //                 >
// //                   {course.badge}
// //                 </span>
// //                 <a href="#" className="text-pink-600 text-sm font-medium">
// //                   Voir plus
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Pagination */}
// //       <div className="flex justify-between items-center mt-8">
// //         <button
// //           onClick={() => setPage((p) => Math.max(1, p - 1))}
// //           disabled={page === 1}
// //           className="flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-md text-blue-600 hover:bg-blue-50 disabled:opacity-50 bg-green-50"
// //         >
// //           <ArrowLeft size={18} /> Précédent
// //         </button>

// //         <button
// //           onClick={() =>
// //             setPage((p) => (p * itemsPerPage < courses.length ? p + 1 : p))
// //           }
// //           disabled={page * itemsPerPage >= courses.length}
// //           className="flex items-center gap-2 border border-blue-600 px-4 py-2 rounded-md text-blue-600 hover:bg-blue-50 disabled:opacity-50 bg-blue-50"
// //         >
// //           Suivant <ArrowRight size={18} />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }


// import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const courses = [
//   {
//     id: 1,
//     title: "Hygiène et Prévention des Infections",
//     rating: 4.5,
//     badge: "Nouveau",
//     image: "/medecine.jpg",
//   },
//   {
//     id: 2,
//     title: "Hygiène et Prévention des Infections",
//     rating: 4.5,
//     badge: "Mieux noté",
//     image: "./public/medecine.jpg",
//   },
//   {
//     id: 3,
//     title: "Hygiène et Prévention des Infections",
//     rating: 4.5,
//     badge: "Nouveau",
//     image: "/medecine.jpg",
//   },
//   {
//     id: 4,
//     title: "Hygiène et Prévention des Infections",
//     rating: 4.5,
//     badge: "Nouveau",
//     image: "/medecine.jpg",
//   },
//   {
//     id: 5,
//     title: "Hygiène et Prévention des Infections",
//     rating: 4.5,
//     badge: "Nouveau",
//     image: "/medecine.jpg",
//   },
//   {
//     id: 6,
//     title: "Hygiène et Prévention des Infections",
//     rating: 4.5,
//     badge: "Mieux noté",
//     image: "/medecine.jpg",
//   },
//   {
//     id: 7,
//     title: "Hygiène et Prévention des Infections",
//     rating: 4.5,
//     badge: "Nouveau",
//     image: "/medecine.jpg",
//   },
//   {
//     id: 8,
//     title: "Hygiène et Prévention des Infections",
//     rating: 4.5,
//     badge: "Nouveau",
//     image: "/medecine.jpg",
//   },
// ];

// export default function CoursesGrid() {
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 8;

//   const startIndex = (page - 1) * itemsPerPage;
//   const selectedCourses = courses.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <section className="max-w-screen-xl mx-auto py-10 px-5">
//       {/* Grille */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {selectedCourses.map((course) => (
//           <div
//             key={course.id}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative group"
//           >
//             {/* Image */}
//             <div className="relative">
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//               />
//               {/* Overlay */}
//               {/* <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition"></div> */}
//               {/* Badge */}
//               <span
//                 className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-lg shadow-md ${
//                   course.badge === "Nouveau"
//                     ? "bg-red-600 text-white"
//                     : "bg-green-600 text-white"
//                 }`}
//               >
//                 {course.badge}
//               </span>
//             </div>

//             {/* Contenu */}
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 text-base line-clamp-2 hover:text-indigo-600 transition">
//                 {course.title}
//               </h3>
//               <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
//                 <span>{course.rating}</span>
//                 <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
//               </div>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="text-xs text-gray-500">Cours en ligne</span>
//                 <a
//                   href="#"
//                   className="text-blue-600 text-sm font-medium hover:underline"
//                 >
//                   Voir plus
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

     

//       {/* Nouvelle pagination dynamique */}
// <div className="flex justify-center mt-10">
//   <nav className="bg-gray-200 rounded-full px-4 py-2">
//     <ul className="flex text-gray-600 gap-4 font-medium py-2">
//       {[1, 2, 3, 4, 5].map((num) => (
//         <li key={num}>
//           <button
//             onClick={() => setPage(num)}
//             className={`rounded-full px-4 py-2 transition duration-300 ease-in-out ${
//               page === num
//                 ? "bg-white text-gray-600 shadow-md"
//                 : "hover:bg-white hover:text-gray-600"
//             }`}
//           >
//             {num}
//           </button>
//         </li>
//       ))}
//     </ul>
//   </nav>
// </div>

//     </section>
//   );
// }


// import { useState } from "react";

// const categories = [
//   { name: "Tout", icon: "📚" },
//   { name: "Hygiène", icon: "🧼" },
//   { name: "Prévention", icon: "🛡️" },
//   { name: "Infections", icon: "🦠" },
//   { name: "Mieux noté", icon: "⭐" },
// ];

// const courses = [
//   { id: 1, title: "Hygiène et Prévention des Infections", rating: 4.5, badge: "Nouveau", category: "Hygiène", image: "/medecine.jpg" },
//   { id: 2, title: "Prévention Avancée", rating: 4.5, badge: "Mieux noté", category: "Prévention", image: "/medecine.jpg" },
//   { id: 3, title: "Diagnostic Infectieux", rating: 4.5, badge: "Nouveau", category: "Infections", image: "/medecine.jpg" },
//   { id: 4, title: "Hygiène Hospitalière", rating: 4.5, badge: "Nouveau", category: "Hygiène", image: "/medecine.jpg" },
//   { id: 5, title: "Prévention des Risques", rating: 4.5, badge: "Nouveau", category: "Prévention", image: "/medecine.jpg" },
//   { id: 6, title: "Cours Avancé", rating: 4.5, badge: "Mieux noté", category: "Mieux noté", image: "/medecine.jpg" },
//   { id: 7, title: "Cas Cliniques Infectieux", rating: 4.5, badge: "Nouveau", category: "Infections", image: "/medecine.jpg" },
//   { id: 8, title: "Hygiène et Santé Publique", rating: 4.5, badge: "Nouveau", category: "Hygiène", image: "/medecine.jpg" },
// ];

// export default function CoursesGrid() {
//   const [page, setPage] = useState(1);
//   const [activeCategory, setActiveCategory] = useState("Tout");
//   const itemsPerPage = 8;

//   // Filtrage des cours
//   const filteredCourses =
//     activeCategory === "Tout"
//       ? courses
//       : courses.filter((c) => c.category === activeCategory);

//   const startIndex = (page - 1) * itemsPerPage;
//   const selectedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

//   const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

//   return (
//     <section className="max-w-screen-xl mx-auto py-10 px-5">
//       {/* Catégories */}
//       <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide mb-6">
//         {categories.map((cat, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setActiveCategory(cat.name);
//               setPage(1); // reset pagination
//             }}
//             className={`flex items-center gap-2 px-5 py-2 rounded-full border transition text-sm font-medium
//               ${
//                 activeCategory === cat.name
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//           >
//             <span>{cat.icon}</span>
//             <span className="whitespace-nowrap">{cat.name}</span>
//           </button>
//         ))}
//       </div>

//       {/* Grille */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {selectedCourses.map((course) => (
//           <div
//             key={course.id}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative group"
//           >
//             {/* Image */}
//             <div className="relative">
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
//               />
//               {/* Badge */}
//               <span
//                 className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-lg shadow-md ${
//                   course.badge === "Nouveau"
//                     ? "bg-red-600 text-white"
//                     : "bg-green-600 text-white"
//                 }`}
//               >
//                 {course.badge}
//               </span>
//             </div>

//             {/* Contenu */}
//             <div className="p-4">
//               <h3 className="font-semibold text-gray-800 text-base line-clamp-2 hover:text-indigo-600 transition">
//                 {course.title}
//               </h3>
//               <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
//                 <span>{course.rating}</span>
//                 <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
//               </div>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="text-xs text-gray-500">Cours en ligne</span>
//                 <a
//                   href="#"
//                   className="text-blue-600 text-sm font-medium hover:underline"
//                 >
//                   Voir plus
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

      {/* Pagination dynamique */}
      // <div className="flex justify-center mt-10">
      //   <nav className="bg-gray-200 rounded-full px-4 py-2">
      //     <ul className="flex text-gray-600 gap-4 font-medium py-2">
      //       {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
      //         <li key={num}>
      //           <button
      //             onClick={() => setPage(num)}
      //             className={`rounded-full px-4 py-2 transition duration-300 ease-in-out ${
      //               page === num
      //                 ? "bg-white text-gray-600 shadow-md"
      //                 : "hover:bg-white hover:text-gray-600"
      //             }`}
      //           >
      //             {num}
                // </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </section>
//   );
// }


// 

import { useState } from "react";

const categories = [
  { name: "Tout", icon: "📚" },
  { name: "Hygiène", icon: "🧼" },
  { name: "Prévention", icon: "🛡️" },
  { name: "Infections", icon: "🦠" },
  { name: "Mieux noté", icon: "⭐" },
];

const courses = [
  { id: 1, title: "Hygiène et Prévention des Infections", rating: 4.5, badge: "Nouveau", category: "Hygiène", image: "/medecine.jpg" },
  { id: 2, title: "Prévention Avancée", rating: 4.5, badge: "Mieux noté", category: "Prévention", image: "/medecine.jpg" },
  { id: 3, title: "Diagnostic Infectieux", rating: 4.5, badge: "Nouveau", category: "Infections", image: "/medecine.jpg" },
  { id: 4, title: "Hygiène Hospitalière", rating: 4.5, badge: "Nouveau", category: "Hygiène", image: "/medecine.jpg" },
  { id: 5, title: "Prévention des Risques", rating: 4.5, badge: "Nouveau", category: "Prévention", image: "/medecine.jpg" },
  { id: 6, title: "Cours Avancé", rating: 4.5, badge: "Mieux noté", category: "Mieux noté", image: "/medecine.jpg" },
  { id: 7, title: "Cas Cliniques Infectieux", rating: 4.5, badge: "Nouveau", category: "Infections", image: "/medecine.jpg" },
  { id: 8, title: "Hygiène et Santé Publique", rating: 4.5, badge: "Nouveau", category: "Hygiène", image: "/medecine.jpg" },
];

export default function CoursesGrid() {
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Tout");
  const itemsPerPage = 8;

  // Filtrage des cours
  const filteredCourses =
    activeCategory === "Tout"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  const startIndex = (page - 1) * itemsPerPage;
  const selectedCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  return (
    <section className="max-w-screen-xl mx-auto py-10 px-5">
      {/* Catégories */}
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide mb-6">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveCategory(cat.name);
              setPage(1); // reset pagination
            }}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition text-sm font-medium
              ${
                activeCategory === cat.name
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            <span>{cat.icon}</span>
            <span className="whitespace-nowrap">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {selectedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition relative group"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              {/* Badge */}
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-lg shadow-md ${
                  course.badge === "Nouveau"
                    ? "bg-red-600 text-white"
                    : "bg-green-600 text-white"
                }`}
              >
                {course.badge}
              </span>
            </div>

            {/* Contenu */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-base line-clamp-2 hover:text-indigo-600 transition">
                {course.title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <span>{course.rating}</span>
                <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-500">Cours en ligne</span>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dynamique */}
      <div className="flex justify-center mt-10">
        <nav className="bg-gray-200 rounded-full px-4 py-2">
          <ul className="flex text-gray-600 gap-4 font-medium py-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <li key={num}>
                <button
                  onClick={() => setPage(num)}
                  className={`rounded-full px-4 py-2 transition duration-300 ease-in-out ${
                    page === num
                      ? "bg-white text-gray-600 shadow-md"
                      : "hover:bg-white hover:text-gray-600"
                  }`}
                >
                  {num}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
