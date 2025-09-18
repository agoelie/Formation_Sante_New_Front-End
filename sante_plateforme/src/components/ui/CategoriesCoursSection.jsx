// export default function Badges() {
//   return (
//     <div className="flex flex-wrap gap-10 w-full ml-10 mt-10 content-center justify-center cursor-pointer">
//   <button className="bg-blue-600 font-bold text-white text-center py-3 px-10 text-lg rounded cursor-pointer">
//     Primary
//   </button>
//   <button className="bg-gray-500 font-bold text-white text-center py-3 px-10 text-lg rounded cursor-pointer">
//     Secondary
//   </button>
//   <button className="bg-green-500 font-bold text-white text-center py-3 px-10 text-lg rounded cursor-pointer">
//     Success
//   </button>
//   <button className="bg-red-500 font-bold text-white text-center py-3 px-10 text-lg rounded cursor-pointer">
//     Danger
//   </button>
//   <button className="bg-yellow-500 font-bold text-white text-center py-3 px-10 text-lg rounded cursor-pointer">
//     Warning
//   </button>
//   <button className="bg-purple-400 font-bold text-white text-center py-3 px-10 text-lg rounded cursor-pointer">
//     Info
//   </button>
//   <button className="bg-gray-100 font-bold text-gray-800 text-center py-3 px-10 text-lg rounded cursor-pointer">
//     Light
//   </button>
//   <button className="bg-gray-800 font-bold text-white text-center py-3 px-10 text-lg rounded cursor-pointer">
//     Dark
//   </button>
// </div>

//     // </div>
//   );
// }

// export default function Badges() {
//   return (
//     <div className="flex flex-col items-center mt-10 gap-6">
      
//       {/* Filtres */}
//       <div className="flex items-center gap-4">
//         <label htmlFor="filter" className="font-semibold text-gray-700">
//           Filtrer par :
//         </label>
//         <select
//           id="filter"
//           className="border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="all">Tous</option>
//           <option value="primary">Primary</option>
//           <option value="secondary">Secondary</option>
//           <option value="success">Success</option>
//           <option value="danger">Danger</option>
//           <option value="warning">Warning</option>
//           <option value="info">Info</option>
//           <option value="light">Light</option>
//           <option value="dark">Dark</option>
//         </select>
//       </div>

//       {/* Boutons */}
//       <div className="flex flex-wrap gap-6 w-full justify-center cursor-pointer">
//         <button className="bg-blue-600 font-bold text-white text-center py-3 px-10 text-lg rounded">
//           Primary
//         </button>
//         <button className="bg-gray-500 font-bold text-white text-center py-3 px-10 text-lg rounded">
//           Secondary
//         </button>
//         <button className="bg-green-500 font-bold text-white text-center py-3 px-10 text-lg rounded">
//           Success
//         </button>
//         <button className="bg-red-500 font-bold text-white text-center py-3 px-10 text-lg rounded">
//           Danger
//         </button>
//         <button className="bg-yellow-500 font-bold text-white text-center py-3 px-10 text-lg rounded">
//           Warning
//         </button>
//         <button className="bg-purple-400 font-bold text-white text-center py-3 px-10 text-lg rounded">
//           Info
//         </button>
//         <button className="bg-gray-100 font-bold text-gray-800 text-center py-3 px-10 text-lg rounded">
//           Light
//         </button>
//         <button className="bg-gray-800 font-bold text-white text-center py-3 px-10 text-lg rounded">
//           Dark
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export default function Badges() {
  const [search, setSearch] = useState("");

  const badges = [
    { label: "Primary", className: "bg-blue-600 text-white" },
    { label: "Secondary", className: "bg-gray-500 text-white" },
    { label: "Success", className: "bg-green-500 text-white" },
    { label: "Danger", className: "bg-red-500 text-white" },
    { label: "Warning", className: "bg-yellow-500 text-white" },
    { label: "Info", className: "bg-purple-400 text-white" },
    { label: "Light", className: "bg-gray-100 text-gray-800" },
    { label: "Dark", className: "bg-gray-800 text-white" },
  ];

  // Filtrage par recherche
  const filteredBadges = badges.filter((badge) =>
    badge.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center mt-10 gap-6">
      
      {/* Barre de recherche */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Rechercher une catégorie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Boutons */}
      <div className="flex flex-wrap gap-6 w-full justify-center cursor-pointer">
        {filteredBadges.map((badge, index) => (
          <button
            key={index}
            className={`${badge.className} font-bold text-center py-3 px-10 text-lg rounded`}
          >
            {badge.label}
          </button>
        ))}
      </div>
    </div>
  );
}
