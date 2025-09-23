// import { BookOpen, Layers, Plug, Users, BarChart2, Settings, LogOut } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   const menuItems = [
//     { name: "Bibliothèque", icon: <BookOpen size={20} />, path: "/bibliotheque" },
//     { name: "Gestion des cours", icon: <Layers size={20} />, path: "/cours" },
//     { name: "API Externes", icon: <Plug size={20} />, path: "/api" },
//     { name: "Utilisateurs", icon: <Users size={20} />, path: "/utilisateurs" },
//     { name: "Statistiques", icon: <BarChart2 size={20} />, path: "/stats" },
//     { name: "Paramètres", icon: <Settings size={20} />, path: "/settings" },
//   ];

//   return (
//     <aside className="w-60 bg-[#12014A] h-screen text-white flex flex-col rounded-r-xl shadow-lg ml-0">
//       {/* Titre */}
//       <div className="text-center text-2xl font-semibold py-6 border-b border-white/10 ">
//         Admin
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 mt-4 flex flex-col gap-10 mt-20 ml-5">
//         {menuItems.map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.path}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 
//                hover:bg-white/20 ${
//                  isActive ? "bg-white text-[#12014A] font-medium" : "text-gray-200"
//                }`
//             }
//           >
//             <span className="flex items-center justify-center">{item.icon}</span>
//             <span className="text-sm">{item.name}</span>
//           </NavLink>
//         ))}
//       </nav>

//       {/* Déconnexion */}
//       <div className="mt-auto mb-6">
//         <button className="flex items-center gap-3 px-4 py-2 text-gray-200 hover:bg-red-600 hover:text-white w-full rounded-md transition-all duration-200">
//           <LogOut size={20} />
//           <span className="text-sm">Déconnexion</span>
//         </button>
//       </div>
//     </aside>
//   );
// }


// import { BookOpen, Layers, Plug, Users, BarChart2, Settings, LogOut } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   const menuItems = [
//     { name: "Bibliothèque", icon: <BookOpen size={20} />, path: "/DashboardLibrary" },
//     { name: "Gestion des cours", icon: <Layers size={20} />, path: "/DashboardCours" },
//     { name: "API Externes", icon: <Plug size={20} />, path: "/DashboardApi" },
//     { name: "Utilisateurs", icon: <Users size={20} />, path: "/DashboardUsers" },
//     { name: "Statistiques", icon: <BarChart2 size={20} />, path: "/DashboardStatistic" },
//     { name: "Paramètres", icon: <Settings size={20} />, path: "/DashboardSetting" },
//   ];

//   return (
//     <aside className="w-64 bg-gradient-to-b from-[#0A0433] to-[#12014A] h-screen text-white flex flex-col shadow-2xl ">
      
//       {/* Logo / Titre */}
//       <div className="text-center py-8 border-b border-white/10">
//         <h1 className="text-2xl font-extrabold tracking-wide">
//           <span className="text-cyan-400">Santé</span> Admin
//         </h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 py-6 flex flex-col gap-10 mt-15">
//         {menuItems.map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.path}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
//                ${
//                  isActive
//                    ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-lg"
//                    : "text-gray-300 hover:bg-white/10 hover:text-white"
//                }`
//             }
//           >
//             <span>{item.icon}</span>
//             <span>{item.name}</span>
//           </NavLink>
//         ))}
//       </nav>

//       {/* Déconnexion */}
//       <div className="px-4 pb-6">
//         <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium 
//           text-gray-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-600 hover:text-white 
//           transition-all duration-300">
//           <LogOut size={20} />
//           Déconnexion
//         </button>
//       </div>
//     </aside>
//   );
// }

// import { BookOpen, Layers, Plug, Users, BarChart2, Settings, LogOut } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   const menuItems = [
//     { name: "Bibliothèque", icon: <BookOpen size={20} />, path: "/DashboardLibrary" },
//     { name: "Gestion des cours", icon: <Layers size={20} />, path: "/DashboardCours" },
//     { name: "API Externes", icon: <Plug size={20} />, path: "/DashboardApi" },
//     { name: "Utilisateurs", icon: <Users size={20} />, path: "/DashboardUsers" },
//     { name: "Statistiques", icon: <BarChart2 size={20} />, path: "/DashboardStatistic" },
//     { name: "Paramètres", icon: <Settings size={20} />, path: "/DashboardSetting" },
//   ];

//   return (
//     <aside className="w-64 bg-gradient-to-b from-[#0A0433] to-[#12014A] h-screen text-white flex flex-col shadow-2xl">
      
//       {/* Logo / Titre */}
//       <div className="text-center py-8 border-b border-white/10">
//         <h1 className="text-2xl font-extrabold tracking-wide">
//           <span className="text-cyan-400">Santé</span> Admin
//         </h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 py-6 flex flex-col gap-6">
//         {menuItems.map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.path}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
//                ${
//                  isActive
//                    ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-lg"
//                    : "text-gray-300 hover:bg-white/10 hover:text-white"
//                }`
//             }
//           >
//             <span>{item.icon}</span>
//             <span>{item.name}</span>
//           </NavLink>
//         ))}
//       </nav>

//       {/* Profil Admin */}
//       <div className="px-4 py-4 border-t border-white/10 flex items-center">
//         <img
//           className="w-10 h-10 rounded-full border-2 border-cyan-400"
//           src="https://randomuser.me/api/portraits/women/11.jpg"
//           alt="User"
//         />
//         <div className="ml-3">
//           <p className="text-sm font-medium">Sarah Johnson</p>
//           <p className="text-xs text-cyan-300">Admin</p>
//         </div>
//       </div>

//       {/* Déconnexion */}
//       <div className="px-4 pb-6">
//         <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium 
//           text-gray-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-600 hover:text-white 
//           transition-all duration-300">
//           <LogOut size={20} />
//           Déconnexion
//         </button>
//       </div>
//     </aside>
//   );
// }

import { useState } from "react";
import {
  BookOpen,
  Layers,
  Plug,
  Users,
  BarChart2,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Bibliothèque", icon: <BookOpen size={20} />, path: "/DashboardLibrary" },
    { name: "Gestion des cours", icon: <Layers size={20} />, path: "/DashboardCours" },
    { name: "API Externes", icon: <Plug size={20} />, path: "/DashboardApi" },
    { name: "Utilisateurs", icon: <Users size={20} />, path: "/DashboardUsers" },
    { name: "Statistiques", icon: <BarChart2 size={20} />, path: "/DashboardStatistic" },
    { name: "Paramètres", icon: <Settings size={20} />, path: "/DashboardSetting" },
  ];

  return (
    <>
      {/* Bouton hamburger visible seulement sur mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-cyan-500 text-white p-2 rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Overlay (fond noir transparent quand sidebar ouverte) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-[#0A0433] to-[#12014A] text-white flex flex-col shadow-2xl transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Bouton fermer sur mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 md:hidden text-white"
        >
          <X size={24} />
        </button>

        {/* Logo */}
        <div className="text-center py-8 border-b border-white/10">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-cyan-400">Santé</span> Admin
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-6">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
              onClick={() => setIsOpen(false)} // Fermer après clic sur mobile
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Profil */}
        <div className="px-4 py-4 border-t border-white/10 flex items-center">
          <img
            className="w-10 h-10 rounded-full border-2 border-cyan-400"
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="User"
          />
          <div className="ml-3">
            <p className="text-sm font-medium">Sarah Johnson</p>
            <p className="text-xs text-cyan-300">Admin</p>
          </div>
        </div>

        {/* Déconnexion */}
        <div className="px-4 pb-6">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium 
            text-gray-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-600 hover:text-white 
            transition-all duration-300">
            <LogOut size={20} />
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  );
}
