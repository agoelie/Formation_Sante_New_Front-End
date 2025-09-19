

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [openDiscover, setOpenDiscover] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/login");
//   };

//   return (
//     <nav className="w-full flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
//       {/* Logo */}
//       <Link to="/" className="flex items-center gap-2">
//         <img src="/Formasante-logo.png" alt="Logo" className="w-20 h-10" />
//       </Link>

//       {/* Menu Desktop */}
//       <div className="hidden md:flex items-center gap-8">
//         {/* Découvrir */}
//         <div className="relative">
//           <button
//             onClick={() => setOpenDiscover(!openDiscover)}
//             className="flex items-center gap-1 border border-blue-800 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-50 transition"
//           >
//             Découvrir
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {openDiscover && (
//             <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-48">
//               <ul className="text-sm text-gray-700">
//                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Nouveautés</li>
//                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Populaires</li>
//                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Recommandés</li>
//               </ul>
//             </div>
//           )}
//         </div>

//         <Link to="/CoursList" className="hover:text-blue-600">Formations</Link>
//         <Link to="/library" className="hover:text-blue-600">Bibliothèque</Link>
//         <Link to="/Reading" className="hover:text-blue-600">Lecture</Link>
//         <Link to="/About" className="hover:text-blue-600">À propos</Link>
//         <Link to="/contact" className="hover:text-blue-600">Contact</Link>
//       </div>

//       {/* Partie droite Desktop */}
//       <div className="hidden md:flex items-center gap-4">
//         {/* Recherche */}
//         <div className="flex items-center border rounded-full px-3 py-1 w-72 shadow-sm">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//           <input type="text" placeholder="Que souhaitez-vous apprendre ?" className="ml-2 w-full outline-none text-sm" />
//         </div>

//         {/* Icônes */}
//         <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-6 4h10m1 5H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
//           </svg>
//           <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
//         </button>

//         <span className="text-sm font-medium cursor-pointer hover:text-blue-600">Fr</span>

//         <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 22c1.1 0 2-.9 2-2H10a2 2 0 002 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2h-3v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2z" />
//           </svg>
//           <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">5</span>
//         </button>

//         <div className="flex items-center gap-2">
//           <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">H</div>
//           <button onClick={handleLogout} className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition">Sign in</button>
//         </div>
//       </div>

//       {/* Hamburger Mobile */}
//       <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden focus:outline-none">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           {mobileMenu ? (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           ) : (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           )}
//         </svg>
//       </button>

//       {/* Menu Mobile */}
//       {mobileMenu && (
//         <div className="absolute top-14 left-0 w-full bg-white shadow-lg flex flex-col items-start p-4 md:hidden">
//           <Link to="/CoursList" className="py-2 w-full hover:bg-gray-100">Formations</Link>
//           <Link to="/library" className="py-2 w-full hover:bg-gray-100">Bibliothèque</Link>
//           <Link to="/Reading" className="py-2 w-full hover:bg-gray-100">Lecture</Link>
//           <Link to="/About" className="py-2 w-full hover:bg-gray-100">À propos</Link>
//           <Link to="/contact" className="py-2 w-full hover:bg-gray-100">Contact</Link>
//           <button onClick={handleLogout} className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md">Sign in</button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// 

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/Formasante-logo.png"
              alt="Logo"
              className="w-24 h-12 object-contain"
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-4 text-white font-medium">
            {/* Découvrir */}
            <div className="relative">
              <button
                onClick={() => setOpenDiscover(!openDiscover)}
                className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-white hover:text-indigo-700 transition whitespace-nowrap"
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDiscover && (
                <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-48">
                  <ul className="text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">
                      Nouveautés
                    </li>
                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">
                      Populaires
                    </li>
                    <li className="px-4 py-2 hover:bg-indigo-50 cursor-pointer">
                      Recommandés
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/CoursList" className="hover:text-yellow-300 transition">
              Formations
            </Link>
            <Link to="/library" className="hover:text-yellow-300 transition">
              Bibliothèque
            </Link>
            <Link to="/Reading" className="hover:text-yellow-300 transition">
              Lecture
            </Link>
            {/* 🔑 Forcer À propos en une seule ligne */}
            <Link
              to="/About"
              className="hover:text-yellow-300 transition whitespace-nowrap"
            >
              À propos
            </Link>
            <Link to="/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>
          </div>

          {/* Partie droite Desktop */}
          <div className="hidden md:flex items-center">
            {/* Recherche */}
            <div className="flex items-center bg-white rounded-full px-3 py-1 w-72 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Que souhaitez-vous apprendre ?"
                className="ml-2 w-full outline-none text-sm text-gray-700"
              />
            </div>

            {/* Icônes */}
            <button className="relative hover:bg-indigo-700/20 p-2 rounded-full transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h6m-6 4h10m1 5H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z"
                />
              </svg>
              <span className="absolute top-1 right-1  text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {/* 2 */}
              </span>
            </button>

            <span className="text-sm font-medium text-white cursor-pointer hover:text-yellow-300">
              Fr
            </span>

            <button className="relative hover:bg-indigo-700/20 p-2 rounded-full transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c1.1 0 2-.9 2-2H10a2 2 0 002 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2h-3v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2z" />
              </svg>
              <span className="absolute top-1 right-1  text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {/* 5 */}
              </span>
            </button>

            {/* Avatar + Sign in */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                H
              </div>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-yellow-300 text-indigo-700 font-semibold rounded-xl hover:bg-white hover:text-indigo-700 transition whitespace-nowrap"
              >
                Sign in
              </button>
            </div>
          </div>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenu && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-4 pb-4 space-y-2 text-white font-medium shadow-lg">
          <Link to="/CoursList" className="block py-2 hover:text-yellow-300">
            Formations
          </Link>
          <Link to="/library" className="block py-2 hover:text-yellow-300">
            Bibliothèque
          </Link>
          <Link to="/Reading" className="block py-2 hover:text-yellow-300">
            Lecture
          </Link>
          <Link
            to="/About"
            className="block py-2 hover:text-yellow-300 whitespace-nowrap"
          >
            À propos
          </Link>
          <Link to="/contact" className="block py-2 hover:text-yellow-300">
            Contact
          </Link>
          <button
            onClick={handleLogout}
            className="mt-3 w-full px-4 py-2 bg-green-300 text-indigo-700 font-semibold rounded-xl hover:bg-green transition whitespace-nowrap"
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
