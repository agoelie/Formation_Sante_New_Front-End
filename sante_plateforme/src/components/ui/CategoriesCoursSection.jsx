import { useState } from "react";

export default function Badges() {
  const [search, setSearch] = useState("");

  const badges = [
    // { label: "Primary", className: "bg-blue-600 text-white" },
    // { label: "Secondary", className: "bg-gray-500 text-white" },
    // { label: "Success", className: "bg-green-500 text-white" },
    // { label: "Danger", className: "bg-red-500 text-white" },
    // { label: "Warning", className: "bg-yellow-500 text-white" },
    // { label: "Info", className: "bg-purple-400 text-white" },
    // { label: "Light", className: "bg-gray-100 text-gray-800" },
    // { label: "Dark", className: "bg-gray-800 text-white" },
  ];

  // Filtrage par recherche
  const filteredBadges = badges.filter((badge) =>
    badge.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center mt-20 gap-8">
      
      {/* Barre de recherche mise en valeur */}
      <div className="w-full max-w-lg">
        <input
          type="text"
          placeholder="🔍 Rechercher une catégorie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-2 border-blue-500 rounded-lg px-5 py-3 text-gray-700 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
        />
      </div>

      {/* 🔽 Boutons désactivés pour l’instant */}
      {/*
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
      */}
    </div>
  );
}
