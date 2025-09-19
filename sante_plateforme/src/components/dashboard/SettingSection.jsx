// // 
// const SettingsForm = () => {
//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-50 to-cyan-50 p-8">
//       <div className="bg-white shadow-2xl rounded-none w-full h-full p-12 overflow-auto">
        
//         {/* Header */}
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
//           ⚙️ Paramètres de la plateforme
//         </h1>
//         <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded mb-10"></div>
        
//         {/* Form */}
//         <form className="space-y-8">
//           {/* Nom */}
//           <div>
//             <label className="block text-base font-semibold text-gray-700 mb-2">
//               Nom de la plateforme
//             </label>
//             <input
//               type="text"
//               defaultValue="Santé - Formation continue"
//               className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 outline-none"
//             />
//           </div>

//           {/* Logo */}
//           <div>
//             <label className="block text-base font-semibold text-fuchsia-600 mb-2">
//               Logo
//             </label>
//             <input
//               type="file"
//               className="w-full p-4 rounded-xl border border-dashed border-fuchsia-400 bg-fuchsia-50 text-gray-700 cursor-pointer hover:bg-fuchsia-100 transition"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-base font-semibold text-gray-700 mb-2">
//               Email de contact
//             </label>
//             <input
//               type="email"
//               defaultValue="contactesante@gmail.com"
//               className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500 outline-none"
//             />
//           </div>

//           {/* Langue */}
//           <div>
//             <label className="block text-base font-semibold text-gray-700 mb-2">
//               Langue par défaut
//             </label>
//             <select className="w-full p-4 rounded-xl border border-gray-300 shadow-sm bg-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500">
//               <option>Français</option>
//               <option selected>Anglais</option>
//               <option>Espagnol</option>
//             </select>
//           </div>

//           {/* Bouton */}
//           <div className="pt-10">
//             <button
//               type="submit"
//               className="w-full py-4 text-xl font-bold text-white rounded-xl shadow-lg 
//               bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 
//               transform hover:scale-[1.02] transition"
//             >
//               💾 Enregistrer
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SettingsForm;

const SettingsForm = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header sticky */}
        <div className="p-6 border-b bg-white sticky top-0 z-10">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            ⚙️ Paramètres de la plateforme
          </h1>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded mt-2"></div>
        </div>
        
        {/* Formulaire scrollable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12">
          <form className="space-y-8">
            
            {/* Nom */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                Nom de la plateforme
              </label>
              <input
                type="text"
                defaultValue="Santé - Formation continue"
                className="w-full p-3 md:p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Logo */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-fuchsia-600 mb-2">
                Logo
              </label>
              <input
                type="file"
                className="w-full p-3 md:p-4 rounded-xl border border-dashed border-fuchsia-400 bg-fuchsia-50 text-gray-700 cursor-pointer hover:bg-fuchsia-100 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                Email de contact
              </label>
              <input
                type="email"
                defaultValue="contactesante@gmail.com"
                className="w-full p-3 md:p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500 outline-none"
              />
            </div>

            {/* Langue */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                Langue par défaut
              </label>
              <select className="w-full p-3 md:p-4 rounded-xl border border-gray-300 shadow-sm bg-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500">
                <option>Français</option>
                <option selected>Anglais</option>
                <option>Espagnol</option>
              </select>
            </div>
          </form>
        </div>

        {/* Bouton Enregistrer sticky en bas */}
        <div className="p-6 border-t bg-white sticky bottom-0">
          <button
            type="submit"
            className="w-full py-3 md:py-4 text-lg md:text-xl font-bold text-white rounded-xl shadow-lg 
            bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 
            transform hover:scale-[1.02] transition"
          >
            💾 Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsForm;
