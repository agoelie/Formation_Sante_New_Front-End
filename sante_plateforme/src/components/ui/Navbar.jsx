// // const Navbar =() =>{
// //     return(
// //         <>


// //         <h4>Bonjour tout le monde</h4>
            



        
// //         </>
// //     )
// // }


// // export default Navbar;

// // import React from "react";

// // const Navbar = () => {
// //   return (
// //     <nav className="w-full flex items-center justify-between px-6 py-3 border-b ">
// //       {/* Partie gauche */}
// //       <div className="flex items-center gap-10 ml-10 g ">
// //         {/* Logo */}
// //         <div className="w-10 h-10 bg-blue-800"></div>

// //         {/* Découvrir */}
// //         <button className="flex items-center gap-1 border border-blue-800 text-blue-800 px-3 py-1 rounded-full text-sm">
// //           Découvrir
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-4 w-4"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //           </svg>
// //         </button>

// //         {/* Formations */}
// //         <div className="flex flex-col items-center text-sm cursor-pointer">
// //           <img
// //             src="https://img.icons8.com/color/48/000000/graduation-cap.png"
// //             alt="Formations"
// //             className="w-8 h-8"
// //           />
// //           <span>Formations</span>
// //         </div>

// //         {/* Bibliothèque */}
// //         <div className="flex flex-col items-center text-sm cursor-pointer">
// //           <img
// //             src="https://img.icons8.com/color/48/000000/books.png"
// //             alt="Bibliothèque"
// //             className="w-8 h-8"
// //           />
// //           <span>Bibliothèque</span>
// //         </div>
// //       </div>

// //       {/* Partie droite */}
// //       <div className="flex items-center gap-4">
// //         {/* Barre de recherche */}
// //         <div className="flex items-center border rounded-full px-3 py-1 w-72">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-5 w-5 text-blue-800"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //           </svg>
// //           <input
// //             type="text"
// //             placeholder="Que souhaitez vous apprendre"
// //             className="ml-2 w-full outline-none text-sm"
// //           />
// //         </div>

// //         {/* Icône message */}
// //         <button>
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-6 w-6 text-gray-700"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-6 4h10m1 5H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
// //           </svg>
// //         </button>

// //         {/* Langue */}
// //         <span className="text-sm font-medium">Fr</span>

// //         {/* Notification */}
// //         <div className="relative">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-6 w-6 text-yellow-500"
// //             fill="currentColor"
// //             viewBox="0 0 24 24"
// //           >
// //             <path d="M12 22c1.1 0 2-.9 2-2H10a2 2 0 002 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2h-3v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2z" />
// //           </svg>
// //           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
// //             1
// //           </span>
// //         </div>

// //         {/* Avatar */}
// //         <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
// //           H
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import { useState } from "react";

// // const Navbar = () => {
// //   const [openDiscover, setOpenDiscover] = useState(false);

// //   return (
// //     <nav className="w-full flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
// //       {/* Partie gauche */}
// //       <div className="flex items-center gap-10 ml-10">
// //         {/* Logo */}
// //         <div className="w-10 h-10 bg-blue-800 rounded-lg shadow-md"></div>

// //         {/* Découvrir */}
// //         <div className="relative">
// //           <button
// //             onClick={() => setOpenDiscover(!openDiscover)}
// //             className="flex items-center gap-1 border border-blue-800 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-50 transition"
// //           >
// //             Découvrir
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-4 w-4"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //             </svg>
// //           </button>

// //           {/* Dropdown */}
// //           {openDiscover && (
// //             <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-48">
// //               <ul className="text-sm text-gray-700">
// //                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Nouveautés</li>
// //                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Populaires</li>
// //                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Recommandés</li>
// //               </ul>
// //             </div>
// //           )}
// //         </div>

// //         {/* Formations */}
// //         <div className="flex flex-col items-center text-sm cursor-pointer hover:scale-105 transition">
// //           <img
// //             src="https://img.icons8.com/color/48/000000/graduation-cap.png"
// //             alt="Formations"
// //             className="w-8 h-8"
// //           />
// //           <span>Formations</span>
// //         </div>

// //         {/* Bibliothèque */}
// //         <div className="flex flex-col items-center text-sm cursor-pointer hover:scale-105 transition">
// //           <img
// //             src="https://img.icons8.com/color/48/000000/books.png"
// //             alt="Bibliothèque"
// //             className="w-8 h-8"
// //           />
// //           <span>Bibliothèque</span>
// //         </div>
// //       </div>

// //       {/* Partie droite */}
// //       <div className="flex items-center gap-4">
// //         {/* Barre de recherche */}
// //         <div className="flex items-center border rounded-full px-3 py-1 w-72 shadow-sm">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-5 w-5 text-blue-800"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //           </svg>
// //           <input
// //             type="text"
// //             placeholder="Que souhaitez-vous apprendre ?"
// //             className="ml-2 w-full outline-none text-sm"
// //           />
// //         </div>

// //         {/* Icône message */}
// //         <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-6 w-6 text-gray-700"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-6 4h10m1 5H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
// //           </svg>
// //           <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
// //             2
// //           </span>
// //         </button>

// //         {/* Langue */}
// //         <span className="text-sm font-medium cursor-pointer hover:text-blue-600">Fr</span>

// //         {/* Notification */}
// //         <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-6 w-6 text-yellow-500"
// //             fill="currentColor"
// //             viewBox="0 0 24 24"
// //           >
// //             <path d="M12 22c1.1 0 2-.9 2-2H10a2 2 0 002 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2h-3v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2z" />
// //           </svg>
// //           <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
// //             5
// //           </span>
// //         </button>

// //         {/* Avatar */}
// //         <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
// //           H
// //         </div>


// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [openDiscover, setOpenDiscover] = useState(false);
//   const navigate = useNavigate();

//   // Fonction logout
//   const handleLogout = () => {
//     // Ici tu peux aussi vider le token du localStorage
//     // localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav className="w-full flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
//       {/* Partie gauche */}
//       <div className="flex items-center gap-10 ml-10">

//         {/* Logo */}
//         <Link to="/" className="w-10 h-10 bg-blue-800 rounded-lg shadow-md">
//         <img src="/public/Formasante-logo.png" alt="Formations" className="w-20 h-10" />
        
//         </Link>

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

//           {/* Dropdown */}
//           {openDiscover && (
//             <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-48">
//               <ul className="text-sm text-gray-700">
//                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Nouveautés</li>
//                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Populaires</li>
//                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Recommandés</li>
//                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Nouveautés</li>
//                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Populaires</li>
//                 <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Recommandés</li>
//               </ul>
//             </div>
//           )}
//         </div>

//         {/* Formations */}
//         <Link
//           to="/CoursList"
//           className="flex flex-col items-center text-sm cursor-pointer hover:scale-105 transition"
//         >
//           {/* <img
//             src="https://img.icons8.com/color/48/000000/graduation-cap.png"
//             alt="Formations"
//             className="w-8 h-8"
//           /> */}
//           <span>Formations</span>
//         </Link>

//         {/* Bibliothèque */}
//         <Link
//           to="/library"
//           className="flex flex-col items-center text-sm cursor-pointer hover:scale-105 transition"
//         >
//           {/* <img
//             src="https://img.icons8.com/color/48/000000/books.png"
//             alt="Bibliothèque"
//             className="w-8 h-8"
//           /> */}
//           <span>Bibliothèque</span>
//         </Link>

//         <Link
//           to="/Reading"
//           className="flex flex-col items-center text-sm cursor-pointer hover:scale-105 transition"
//         >
//           {/* <img
//             src="https://img.icons8.com/color/48/000000/books.png"
//             alt="Bibliothèque"
//             className="w-8 h-8"
//           /> */}
//           <span>Lecture</span>
//         </Link>

//          <Link
//           to="/About"
//           className="flex flex-col items-center text-sm cursor-pointer hover:scale-105 transition"
//         >
//           {/* <img
//             src="https://img.icons8.com/color/48/000000/books.png"
//             alt="Bibliothèque"
//             className="w-8 h-8"
//           /> */}
//           <span>A propos</span>
//         </Link>

//         <Link
//           to="/contact"
//           className="flex flex-col items-center text-sm cursor-pointer hover:scale-105 transition"
//         >
//           {/* <img
//             src="https://img.icons8.com/color/48/000000/books.png"
//             alt="Bibliothèque"
//             className="w-8 h-8"
//           /> */}
//           <span>Contact</span>
//         </Link>
//       </div>

//       {/* Partie droite */}
//       <div className="flex items-center gap-4">
//         {/* Barre de recherche */}
//         <div className="flex items-center border rounded-full px-3 py-1 w-72 shadow-sm">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-blue-800"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Que souhaitez-vous apprendre ?"
//             className="ml-2 w-full outline-none text-sm"
//           />
//         </div>

//         {/* Icône message */}
//         <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-6 4h10m1 5H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
//           </svg>
//           <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//             2
//           </span>
//         </button>

//         {/* Langue */}
//         <span className="text-sm font-medium cursor-pointer hover:text-blue-600">Fr</span>

//         {/* Notification */}
//         <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-yellow-500"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 22c1.1 0 2-.9 2-2H10a2 2 0 002 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2h-3v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2z" />
//           </svg>
//           <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
//             5
//           </span>
//         </button>

//         {/* Avatar + Logout */}
//         <div className="flex items-center gap-2">
//           <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition">
//             H
//           </div>
//           <button
//             onClick={handleLogout}
//             className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition"
//           >
//             Sign in
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
    <nav className="w-full flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/Formasante-logo.png" alt="Logo" className="w-20 h-10" />
      </Link>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {/* Découvrir */}
        <div className="relative">
          <button
            onClick={() => setOpenDiscover(!openDiscover)}
            className="flex items-center gap-1 border border-blue-800 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-50 transition"
          >
            Découvrir
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDiscover && (
            <div className="absolute mt-2 bg-white border rounded-lg shadow-lg w-48">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Nouveautés</li>
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Populaires</li>
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Recommandés</li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/CoursList" className="hover:text-blue-600">Formations</Link>
        <Link to="/library" className="hover:text-blue-600">Bibliothèque</Link>
        <Link to="/Reading" className="hover:text-blue-600">Lecture</Link>
        <Link to="/About" className="hover:text-blue-600">À propos</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>

      {/* Partie droite Desktop */}
      <div className="hidden md:flex items-center gap-4">
        {/* Recherche */}
        <div className="flex items-center border rounded-full px-3 py-1 w-72 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Que souhaitez-vous apprendre ?" className="ml-2 w-full outline-none text-sm" />
        </div>

        {/* Icônes */}
        <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-6 4h10m1 5H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
          </svg>
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
        </button>

        <span className="text-sm font-medium cursor-pointer hover:text-blue-600">Fr</span>

        <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2H10a2 2 0 002 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2h-3v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2z" />
          </svg>
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">5</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">H</div>
          <button onClick={handleLogout} className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition">Sign in</button>
        </div>
      </div>

      {/* Hamburger Mobile */}
      <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileMenu ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu Mobile */}
      {mobileMenu && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-lg flex flex-col items-start p-4 md:hidden">
          <Link to="/CoursList" className="py-2 w-full hover:bg-gray-100">Formations</Link>
          <Link to="/library" className="py-2 w-full hover:bg-gray-100">Bibliothèque</Link>
          <Link to="/Reading" className="py-2 w-full hover:bg-gray-100">Lecture</Link>
          <Link to="/About" className="py-2 w-full hover:bg-gray-100">À propos</Link>
          <Link to="/contact" className="py-2 w-full hover:bg-gray-100">Contact</Link>
          <button onClick={handleLogout} className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md">Sign in</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

