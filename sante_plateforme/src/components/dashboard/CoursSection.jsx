


// import { useState } from "react";
// import { Pencil, Trash2, Eye, Plus, Search } from "lucide-react";

// const CourseTable = () => {
//   const allCourses = [
//     { id: 1, titre: "React Avancé", nom: "Cours React", categorie: "Développement" },
//     { id: 2, titre: "UI/UX Design", nom: "Cours Design", categorie: "Design" },
//     { id: 3, titre: "Python Data", nom: "Cours Python", categorie: "Développement" },
//     { id: 4, titre: "SEO Marketing", nom: "Cours SEO", categorie: "Marketing" },
//     { id: 5, titre: "Node.js API", nom: "Cours Node", categorie: "Développement" },
//     { id: 6, titre: "Illustrator Pro", nom: "Cours Illustrator", categorie: "Design" },
//     { id: 1, titre: "React Avancé", nom: "Cours React", categorie: "Développement" },
//     { id: 2, titre: "UI/UX Design", nom: "Cours Design", categorie: "Design" },
//     { id: 3, titre: "Python Data", nom: "Cours Python", categorie: "Développement" },
//     { id: 4, titre: "SEO Marketing", nom: "Cours SEO", categorie: "Marketing" },
//     { id: 5, titre: "Node.js API", nom: "Cours Node", categorie: "Développement" },
//     { id: 6, titre: "Illustrator Pro", nom: "Cours Illustrator", categorie: "Design" },
//     { id: 1, titre: "React Avancé", nom: "Cours React", categorie: "Développement" },
//     { id: 2, titre: "UI/UX Design", nom: "Cours Design", categorie: "Design" },
//     { id: 3, titre: "Python Data", nom: "Cours Python", categorie: "Développement" },
//     { id: 4, titre: "SEO Marketing", nom: "Cours SEO", categorie: "Marketing" },
//     { id: 5, titre: "Node.js API", nom: "Cours Node", categorie: "Développement" },
//     { id: 6, titre: "Illustrator Pro", nom: "Cours Illustrator", categorie: "Design" },
//   ];

//   const [search, setSearch] = useState("");
//   const [filterCat, setFilterCat] = useState("");

//   const filteredCourses = allCourses.filter((c) => {
//     return (
//       c.titre.toLowerCase().includes(search.toLowerCase()) &&
//       (filterCat === "" || c.categorie === filterCat)
//     );
//   });

//   return (
//     <div className="bg-white shadow-md rounded-xl p-6 w-full h-screen flex flex-col ">
//       {/* Header */}
//       <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
//         <h2 className="text-xl font-semibold text-gray-800">📚 Gérer les cours</h2>
//         <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition">
//           <Plus size={18} /> Ajouter un cours
//         </button>
//       </div>

//       {/* Filtres */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {/* Recherche */}
//         <div className="relative flex-1 min-w-[250px]">
//           <Search className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Rechercher un cours..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
//           />
//         </div>

//         {/* Filtre par catégorie */}
//         <select
//           value={filterCat}
//           onChange={(e) => setFilterCat(e.target.value)}
//           className="border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
//         >
//           <option value="">Toutes les catégories</option>
//           <option value="Développement">Développement</option>
//           <option value="Design">Design</option>
//           <option value="Marketing">Marketing</option>
//         </select>
//       </div>

//       {/* Table scrollable */}
//       <div className="overflow-y-auto flex-1 border rounded-xl">
//         <table className="w-full text-sm text-left border-collapse">
//           <thead className="sticky top-0 bg-gray-100 z-10">
//             <tr className="text-gray-700 uppercase text-xs">
//               <th className="px-4 py-3">Titre</th>
//               <th className="px-4 py-3">Nom</th>
//               <th className="px-4 py-3">Catégorie</th>
//               <th className="px-4 py-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCourses.map((course, idx) => (
//               <tr
//                 key={course.id}
//                 className={`${
//                   idx % 2 === 0 ? "bg-white" : "bg-gray-50"
//                 } hover:bg-blue-50 transition`}
//               >
//                 <td className="px-4 py-3 font-medium text-gray-800">{course.titre}</td>
//                 <td className="px-4 py-3 text-gray-600">{course.nom}</td>
//                 <td className="px-4 py-3 text-gray-600">{course.categorie}</td>
//                 <td className="px-4 py-3 flex justify-center gap-20">
//                   {/* Modifier */}
//                   <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-blue-600 bg-blue-100 hover:bg-blue-200 transition">
//                     <Pencil size={16} /> Modifier
//                   </button>
//                   {/* Supprimer */}
//                   <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-red-600 bg-red-100 hover:bg-red-200 transition">
//                     <Trash2 size={16} /> Supprimer
//                   </button>
//                   {/* Voir */}
//                   <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-green-600 bg-green-100 hover:bg-green-200 transition">
//                     <Eye size={16} /> Voir
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {filteredCourses.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center py-6 text-gray-500">
//                   Aucun cours trouvé
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CourseTable;


// import { useState } from "react";
// import { Pencil, Trash2, Eye, Plus, Search } from "lucide-react";

// const CourseTable = () => {
//   const allCourses = [
//     { id: 1, titre: "React Avancé", nom: "Cours React", categorie: "Développement" },
//     { id: 2, titre: "UI/UX Design", nom: "Cours Design", categorie: "Design" },
//     { id: 3, titre: "Python Data", nom: "Cours Python", categorie: "Développement" },
//     { id: 4, titre: "SEO Marketing", nom: "Cours SEO", categorie: "Marketing" },
//     { id: 5, titre: "Node.js API", nom: "Cours Node", categorie: "Développement" },
//     { id: 6, titre: "Illustrator Pro", nom: "Cours Illustrator", categorie: "Design" },
//     { id: 7, titre: "Next.js Fullstack", nom: "Cours Next.js", categorie: "Développement" },
//     { id: 8, titre: "Figma Master", nom: "Cours Figma", categorie: "Design" },
//     { id: 9, titre: "Growth Hacking", nom: "Cours Growth", categorie: "Marketing" },
//     { id: 10, titre: "TailwindCSS", nom: "Cours Tailwind", categorie: "Développement" },
//     { id: 11, titre: "Canva Pro", nom: "Cours Canva", categorie: "Design" },
//   ];

//   const [search, setSearch] = useState("");
//   const [filterCat, setFilterCat] = useState("");

//   const filteredCourses = allCourses.filter((c) => {
//     return (
//       c.titre.toLowerCase().includes(search.toLowerCase()) &&
//       (filterCat === "" || c.categorie === filterCat)
//     );
//   });

//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 w-full h-screen flex flex-col">
//       {/* Header */}
//       <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
//         <h2 className="text-2xl font-bold text-gray-800">📚 Gérer les cours</h2>
//         <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition">
//           <Plus size={18} /> Ajouter un cours
//         </button>
//       </div>

//       {/* Filtres */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         {/* Recherche */}
//         <div className="relative flex-1 min-w-[250px]">
//           <Search className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Rechercher un cours..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
//           />
//         </div>

//         {/* Filtre par catégorie */}
//         <select
//           value={filterCat}
//           onChange={(e) => setFilterCat(e.target.value)}
//           className="border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
//         >
//           <option value="">Toutes les catégories</option>
//           <option value="Développement">Développement</option>
//           <option value="Design">Design</option>
//           <option value="Marketing">Marketing</option>
//         </select>
//       </div>

//       {/* Table scrollable */}
//       <div className="flex-1 overflow-y-auto border rounded-xl">
//         <table className="w-full text-sm text-left border-collapse">
//           <thead className="sticky top-0 bg-gray-100 shadow z-10">
//             <tr className="text-gray-700 uppercase text-xs">
//               <th className="px-4 py-3">Titre</th>
//               <th className="px-4 py-3">Nom</th>
//               <th className="px-4 py-3">Catégorie</th>
//               <th className="px-4 py-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCourses.map((course, idx) => (
//               <tr
//                 key={idx}
//                 className={`${
//                   idx % 2 === 0 ? "bg-white" : "bg-gray-50"
//                 } hover:bg-blue-50 transition`}
//               >
//                 <td className="px-4 py-3 font-medium text-gray-800">{course.titre}</td>
//                 <td className="px-4 py-3 text-gray-600">{course.nom}</td>
//                 <td className="px-4 py-3 text-gray-600">{course.categorie}</td>
//                 <td className="px-4 py-3 flex justify-center gap-3">
//                   {/* Modifier */}
//                   <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-blue-600 bg-blue-100 hover:bg-blue-200 transition">
//                     <Pencil size={16} /> Modifier
//                   </button>
//                   {/* Supprimer */}
//                   <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-red-600 bg-red-100 hover:bg-red-200 transition">
//                     <Trash2 size={16} /> Supprimer
//                   </button>
//                   {/* Voir */}
//                   <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-green-600 bg-green-100 hover:bg-green-200 transition">
//                     <Eye size={16} /> Voir
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {filteredCourses.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="text-center py-6 text-gray-500">
//                   Aucun cours trouvé
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CourseTable;

import { useState } from "react";
import { Pencil, Trash2, Eye, Plus, Search } from "lucide-react";

const CourseTable = () => {
  const allCourses = [
    { id: 1, titre: "React Avancé", nom: "Cours React", categorie: "Développement" },
    { id: 2, titre: "UI/UX Design", nom: "Cours Design", categorie: "Design" },
    { id: 3, titre: "Python Data", nom: "Cours Python", categorie: "Développement" },
    { id: 4, titre: "SEO Marketing", nom: "Cours SEO", categorie: "Marketing" },
    { id: 5, titre: "Node.js API", nom: "Cours Node", categorie: "Développement" },
    { id: 6, titre: "Illustrator Pro", nom: "Cours Illustrator", categorie: "Design" },
    { id: 7, titre: "Next.js Fullstack", nom: "Cours Next.js", categorie: "Développement" },
    { id: 8, titre: "Figma Master", nom: "Cours Figma", categorie: "Design" },
    { id: 9, titre: "Growth Hacking", nom: "Cours Growth", categorie: "Marketing" },
    { id: 10, titre: "TailwindCSS", nom: "Cours Tailwind", categorie: "Développement" },
    { id: 11, titre: "Canva Pro", nom: "Cours Canva", categorie: "Design" },
  ];

  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("");

  const filteredCourses = allCourses.filter((c) => {
    return (
      c.titre.toLowerCase().includes(search.toLowerCase()) &&
      (filterCat === "" || c.categorie === filterCat)
    );
  });

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full h-screen flex flex-col">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">📚 Gérer les cours</h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition">
          <Plus size={18} /> Ajouter un cours
        </button>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Recherche */}
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher un cours..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Filtre par catégorie */}
        <select
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
        >
          <option value="">Toutes les catégories</option>
          <option value="Développement">Développement</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      {/* Table scrollable */}
      <div className="flex-1 overflow-y-auto border rounded-xl">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="sticky top-0 bg-gray-100 shadow z-10">
            <tr className="text-gray-700 uppercase text-xs">
              <th className="px-4 py-3">Titre</th>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Catégorie</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition`}
              >
                <td className="px-4 py-3 font-medium text-gray-800">{course.titre}</td>
                <td className="px-4 py-3 text-gray-600">{course.nom}</td>
                <td className="px-4 py-3 text-gray-600">{course.categorie}</td>
                <td className="px-4 py-3 flex justify-center gap-3">
                  {/* Modifier */}
                  <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-blue-600 bg-blue-100 hover:bg-blue-200 transition">
                    <Pencil size={16} /> Modifier
                  </button>
                  {/* Supprimer */}
                  <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-red-600 bg-red-100 hover:bg-red-200 transition">
                    <Trash2 size={16} /> Supprimer
                  </button>
                  {/* Voir */}
                  <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-green-600 bg-green-100 hover:bg-green-200 transition">
                    <Eye size={16} /> Voir
                  </button>
                </td>
              </tr>
            ))}
            {filteredCourses.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  Aucun cours trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;
