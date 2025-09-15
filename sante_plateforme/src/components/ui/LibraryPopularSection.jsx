// export default function PopularCourses() {
//   const categories = [
//     { name: "Tout", icon: "🏠" },
//     { name: "Ordonnances médicales", icon: "💊" },
//     { name: "Dossiers médicaux", icon: "📖" },
//     { name: "Imagerie médicale", icon: "🩻" },
//     { name: "Protocoles de soins", icon: "📋" },
//     { name: "Publications scientifiques", icon: "📚" },
//   ];

//   const courses = [
//     {
//       id: 1,
//       image: "/course1.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 2,
//       image: "/course2.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 3,
//       image: "/course3.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 4,
//       image: "/course4.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//   ];

//   return (
//     <section className="px-6 py-8 max-w-7xl mx-auto">
//       {/* Catégories */}
//       <div className="flex gap-3 overflow-x-auto pb-3">
//         {categories.map((cat, index) => (
//           <button
//             key={index}
//             className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 transition"
//           >
//             <span>{cat.icon}</span>
//             <span className="whitespace-nowrap">{cat.name}</span>
//           </button>
//         ))}
//       </div>

//       {/* Titre */}
//       <h2 className="text-2xl font-semibold mt-6 mb-4">
//         Les plus populaires dans <span className="text-blue-600">Santé & Médecine</span>
//       </h2>

//       {/* Grille des cours */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
//           >
//             <img
//               src={course.image}
//               alt={course.title}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-3">
//               <h3 className="font-medium text-sm mb-2">{course.title}</h3>
//               <p className="text-blue-600 text-xs">{course.author}</p>
//               <p className="text-gray-500 text-xs">{course.details}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { ChevronRight } from "lucide-react";

// export default function PopularCourses() {
//   const categories = [
//     { name: "Tout", icon: "🏠" },
//     { name: "Ordonnances médicales", icon: "💊" },
//     { name: "Dossiers médicaux", icon: "📖" },
//     { name: "Imagerie médicale", icon: "🩻" },
//     { name: "Protocoles de soins", icon: "📋" },
//     { name: "Publications scientifiques", icon: "📚" },
//   ];

//   const courses = [
//     {
//       id: 1,
//       image: "/course1.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 2,
//       image: "/course2.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 3,
//       image: "/course3.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 4,
//       image: "/course4.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//   ];

//   return (
//     <section className="px-6 py-8 max-w-7xl mx-auto">
//       {/* Catégories avec flèche */}
//       <div className="relative gap-5">
//         <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
//           {categories.map((cat, index) => (
//             <button
//               key={index}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 transition"
//             >
//               <span>{cat.icon}</span>
//               <span className="whitespace-nowrap">{cat.name}</span>
//             </button>
//           ))}
//         </div>
//         {/* Flèche droite */}
//         <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-blue-100 gap-5">
//           <ChevronRight className="w-5 h-5 text-gray-700" />
//         </button>
//       </div>

//       {/* Titre */}
//       <h2 className="text-2xl font-semibold mt-6 mb-4">
//         Les plus populaires dans{" "}
//         <span className="text-blue-600">Santé & Médecine</span>
//       </h2>

//       {/* Grille des cours */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
//           >
//             <img
//               src={course.image}
//               alt={course.title}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-3">
//               <h3 className="font-medium text-sm mb-2">{course.title}</h3>
//               <p className="text-blue-600 text-xs">{course.author}</p>
//               <p className="text-gray-500 text-xs">{course.details}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import { ChevronRight, Download } from "lucide-react";

// export default function PopularCourses() {
//   const categories = [
//     { name: "Tout", icon: "🏠" },
//     { name: "Ordonnances médicales", icon: "💊" },
//     { name: "Dossiers médicaux", icon: "📖" },
//     { name: "Imagerie médicale", icon: "🩻" },
//     { name: "Protocoles de soins", icon: "📋" },
//     { name: "Publications scientifiques", icon: "📚" },
//   ];

//   const courses = [
//     {
//       id: 1,
//       image: "/public/Anatomie.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 2,
//       image: "/public/Examen_Clinique.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 3,
//       image: "/public/Larouse_Medical.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 4,
//       image: "/public/Nephrenologie.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },

//      {
//       id: 1,
//       image: "/public/Anatomie.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 2,
//       image: "/public/Examen_Clinique.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 3,
//       image: "/public/Larouse_Medical.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 4,
//       image: "/public/Nephrenologie.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },

//      {
//       id: 1,
//       image: "/public/Anatomie.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 2,
//       image: "/public/Examen_Clinique.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 3,
//       image: "/public/Larouse_Medical.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//     {
//       id: 4,
//       image: "/public/Nephrenologie.jpg",
//       title: "Votre Guide Essentiel de la Santé : Accès Gratuit",
//       author: "Dr Toto",
//       details: "21 diapositives. 24k vues",
//     },
//   ];

//   return (
//     <section className="px-6 py-8 max-w-7xl mx-auto">
//       {/* Catégories avec flèche */}
//       <div className="relative gap-5">
//         <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
//           {categories.map((cat, index) => (
//             <button
//               key={index}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 transition"
//             >
//               <span>{cat.icon}</span>
//               <span className="whitespace-nowrap">{cat.name}</span>
//             </button>
//           ))}
//         </div>
//         {/* Flèche droite */}
//         <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-blue-100">
//           <ChevronRight className="w-5 h-5 text-gray-700" />
//         </button>
//       </div>

//       {/* Titre */}
//       <h2 className="text-2xl font-semibold mt-6 mb-4">
//         Les plus populaires dans{" "}
//         <span className="text-blue-600">Santé & Médecine</span>
//       </h2>

//       {/* Grille des cours */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition relative"
//           >
//             {/* Image */}
//             <img
//               src={course.image}
//               alt={course.title}
//               className="w-full h-40 object-cover"
//             />

//             {/* Contenu */}
//             <div className="p-3">
//               <h3 className="font-medium text-sm mb-2">{course.title}</h3>
//               <p className="text-blue-600 text-xs">{course.author}</p>
//               <p className="text-gray-500 text-xs">{course.details}</p>
//             </div>

//             {/* Bouton téléchargement */}
//             <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100">
//               <Download className="w-5 h-5 text-red-500" />
//             </button>
//           </div>
//         ))}
//       </div>

       
//     </section>

    
//   );
// }


import { ChevronRight, ChevronLeft, Download } from "lucide-react";
import { useState } from "react";

export default function PopularCourses() {
  const categories = [
    { name: "Tout", icon: "🏠" },
    { name: "Ordonnances médicales", icon: "💊" },
    { name: "Dossiers médicaux", icon: "📖" },
    { name: "Imagerie médicale", icon: "🩻" },
    { name: "Protocoles de soins", icon: "📋" },
    { name: "Publications scientifiques", icon: "📚" },
  ];

  const courses = [
    { id: 1, image: "/Anatomie.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 2, image: "/Examen_Clinique.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 3, image: "/Larouse_Medical.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 4, image: "/Nephrenologie.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 5, image: "/Anatomie.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 6, image: "/Examen_Clinique.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 7, image: "/Larouse_Medical.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 8, image: "/Nephrenologie.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 1, image: "/Anatomie.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 2, image: "/Examen_Clinique.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 3, image: "/Larouse_Medical.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 4, image: "/Nephrenologie.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 5, image: "/Anatomie.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 6, image: "/Examen_Clinique.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 7, image: "/Larouse_Medical.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
    { id: 8, image: "/Nephrenologie.jpg", title: "Votre Guide Essentiel de la Santé : Accès Gratuit", author: "Dr Toto", details: "21 diapositives. 24k vues" },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="px-6 py-8 max-w-7xl mx-auto">
      {/* Catégories avec flèche */}
      <div className="relative gap-5">
        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 transition"
            >
              <span>{cat.icon}</span>
              <span className="whitespace-nowrap">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Titre */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Les plus populaires dans{" "}
        <span className="text-blue-600">Santé & Médecine</span>
      </h2>

      {/* Grille des cours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedCourses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition relative"
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            {/* Contenu */}
            <div className="p-3">
              <h3 className="font-medium text-sm mb-2">{course.title}</h3>
              <p className="text-blue-600 text-xs">{course.author}</p>
              <p className="text-gray-500 text-xs">{course.details}</p>
            </div>

            {/* Bouton téléchargement */}
            <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100">
              <Download className="w-5 h-5 text-red-500" />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page numbers */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}





