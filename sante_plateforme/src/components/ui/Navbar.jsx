// const Navbar =() =>{
//     return(
//         <>


//         <h4>Bonjour tout le monde</h4>
            



        
//         </>
//     )
// }


// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 border-b">
      {/* Partie gauche */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="w-10 h-10 bg-blue-800"></div>

        {/* Découvrir */}
        <button className="flex items-center gap-1 border border-blue-800 text-blue-800 px-3 py-1 rounded-full text-sm">
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

        {/* Formations */}
        <div className="flex flex-col items-center text-sm cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/graduation-cap.png"
            alt="Formations"
            className="w-8 h-8"
          />
          <span>Formations</span>
        </div>

        {/* Bibliothèque */}
        <div className="flex flex-col items-center text-sm cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/000000/books.png"
            alt="Bibliothèque"
            className="w-8 h-8"
          />
          <span>Bibliothèque</span>
        </div>
      </div>

      {/* Partie droite */}
      <div className="flex items-center gap-4">
        {/* Barre de recherche */}
        <div className="flex items-center border rounded-full px-3 py-1 w-72">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Que souhaitez vous apprendre"
            className="ml-2 w-full outline-none text-sm"
          />
        </div>

        {/* Icône message */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-6 4h10m1 5H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2z" />
          </svg>
        </button>

        {/* Langue */}
        <span className="text-sm font-medium">Fr</span>

        {/* Notification */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 22c1.1 0 2-.9 2-2H10a2 2 0 002 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2h-3v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2z" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            1
          </span>
        </div>

        {/* Avatar */}
        <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
          H
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
