import { BookOpen, Layers, Plug, Users, BarChart2, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuItems = [
    { name: "Bibliothèque", icon: <BookOpen size={20} />, path: "/bibliotheque" },
    { name: "Gestion des cours", icon: <Layers size={20} />, path: "/cours" },
    { name: "API Externes", icon: <Plug size={20} />, path: "/api" },
    { name: "Utilisateurs", icon: <Users size={20} />, path: "/utilisateurs" },
    { name: "Statistiques", icon: <BarChart2 size={20} />, path: "/stats" },
    { name: "Paramètres", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <aside className="w-60 bg-[#12014A] h-screen text-white flex flex-col rounded-r-xl shadow-lg ml-0">
      {/* Titre */}
      <div className="text-center text-2xl font-semibold py-6 border-b border-white/10 ">
        Admin
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4 flex flex-col gap-10 mt-20 ml-5">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
               hover:bg-white/20 ${
                 isActive ? "bg-white text-[#12014A] font-medium" : "text-gray-200"
               }`
            }
          >
            <span className="flex items-center justify-center">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Déconnexion */}
      <div className="mt-auto mb-6">
        <button className="flex items-center gap-3 px-4 py-2 text-gray-200 hover:bg-red-600 hover:text-white w-full rounded-md transition-all duration-200">
          <LogOut size={20} />
          <span className="text-sm">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
