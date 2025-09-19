

// import { useState } from "react";
// import { Edit3, Trash2, Download, Plus, Search } from "lucide-react";
// import Modal from "./Modal";

// export default function Library() {
//   const [documents, setDocuments] = useState([
//     { id: 1, title: "Document 1", category: "Histoire" },
//     { id: 2, title: "Document 2", category: "Sciences" },
//     { id: 3, title: "Document 3", category: "Littérature" },
//     { id: 4, title: "Document 4", category: "Art" },
//     { id: 5, title: "Document 5", category: "Sciences" },
//     { id: 6, title: "Document 6", category: "Histoire" },
//     { id: 7, title: "Document 7", category: "Sciences" },
//     { id: 8, title: "Document 8", category: "Littérature" },
//     { id: 9, title: "Document 9", category: "Histoire" },
//     { id: 10, title: "Document 10", category: "Art" },
//     { id: 11, title: "Document 11", category: "Sciences" },
//     { id: 12, title: "Document 12", category: "Histoire" },

//      { id: 1, title: "Document 1", category: "Histoire" },
//     { id: 2, title: "Document 2", category: "Sciences" },
//     { id: 3, title: "Document 3", category: "Littérature" },
//     { id: 4, title: "Document 4", category: "Art" },
//     { id: 5, title: "Document 5", category: "Sciences" },
//     { id: 6, title: "Document 6", category: "Histoire" },
//     { id: 7, title: "Document 7", category: "Sciences" },
//     { id: 8, title: "Document 8", category: "Littérature" },
//     { id: 9, title: "Document 9", category: "Histoire" },
//     { id: 10, title: "Document 10", category: "Art" },
//     { id: 11, title: "Document 11", category: "Sciences" },
//     { id: 12, title: "Document 12", category: "Histoire" },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newDoc, setNewDoc] = useState({ title: "", category: "" });
//   const [searchQuery, setSearchQuery] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("");

//   // Ajouter un document
//   const handleAddDocument = () => {
//     if (newDoc.title && newDoc.category) {
//       setDocuments([...documents, { id: documents.length + 1, ...newDoc }]);
//       setNewDoc({ title: "", category: "" });
//       setIsModalOpen(false);
//     }
//   };

//   // Filtrer les documents
//   const filteredDocuments = documents.filter((doc) => {
//     return (
//       doc.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
//       (categoryFilter === "" || doc.category === categoryFilter)
//     );
//   });

//   return (
//     <div className="p-8 bg-gray-50 h-screen w-full flex flex-col flex-1 overflow-y-auto">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Bibliothèque</h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow transition flex items-center gap-2"
//         >
//           <Plus className="w-5 h-5" />
//           Ajouter un document
//         </button>
//       </div>

//       {/* Filtres de recherche */}
//       <div className="flex flex-wrap gap-40 mb-6">
//         {/* Recherche par titre */}
//         <div className="relative flex-1 min-w-[250px]">
//           <Search className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             placeholder="Rechercher un document..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
//           />
//         </div>

//         {/* Filtre par catégorie */}
//         <select
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//           className="border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
//         >
//           <option value="">Toutes les catégories</option>
//           <option value="Histoire">Histoire</option>
//           <option value="Sciences">Sciences</option>
//           <option value="Littérature">Littérature</option>
//           <option value="Art">Art</option>
//         </select>
//       </div>

//       {/* Conteneur scrollable */}
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden ">
//         <div className=" h-screen overflow-y-auto ">
//           <table className="w-full border-collapse ml-20">
//             <thead className="bg-blue-100 sticky top-0 z-10 ">
//               <tr>
//                 <th className="text-left px-6 py-3 text-gray-600 font-semibold">Titre</th>
//                 <th className="text-left px-6 py-3 text-gray-600 font-semibold">Catégorie</th>
//                 <th className="text-left px-6 py-3 text-gray-600 font-semibold">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredDocuments.map((doc) => (
//                 <tr key={doc.id} className="hover:bg-gray-50 transition">
//                   <td className="px-6 py-4 text-gray-800">{doc.title}</td>
//                   <td className="px-6 py-4 text-gray-600">{doc.category}</td>
//                   <td className="px-6 py-4 flex gap-40">
//                     <button className="text-green-600 hover:text-green-800 flex items-center gap-1">
//                       <Edit3 className="w-4 h-4" /> Modifier
//                     </button>
//                     <button className="text-red-600 hover:text-red-800 flex items-center gap-1">
//                       <Trash2 className="w-4 h-4" /> Supprimer
//                     </button>
//                     <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
//                       <Download className="w-4 h-4" /> Télécharger
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {filteredDocuments.length === 0 && (
//                 <tr>
//                   <td colSpan="3" className="text-center py-4 text-gray-500">
//                     Aucun document trouvé
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal d'ajout de document */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <h2 className="text-xl font-semibold mb-4">Ajouter un document</h2>
//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Titre du document"
//             value={newDoc.title}
//             onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
//             className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Catégorie"
//             value={newDoc.category}
//             onChange={(e) => setNewDoc({ ...newDoc, category: e.target.value })}
//             className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
//           />
//           <div className="flex justify-end gap-3">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
//             >
//               Annuler
//             </button>
//             <button
//               onClick={handleAddDocument}
//               className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
//             >
//               Ajouter
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// }


import { useState } from "react";
import { Edit3, Trash2, Download, Plus, Search } from "lucide-react";
import Modal from "./Modal";

export default function Library() {
  const [documents, setDocuments] = useState([
    { id: 1, title: "Document 1", category: "Histoire" },
    { id: 2, title: "Document 2", category: "Sciences" },
    { id: 3, title: "Document 3", category: "Littérature" },
    { id: 4, title: "Document 4", category: "Art" },
    { id: 5, title: "Document 5", category: "Sciences" },
    { id: 6, title: "Document 6", category: "Histoire" },
    { id: 7, title: "Document 7", category: "Sciences" },
    { id: 8, title: "Document 8", category: "Littérature" },
    { id: 9, title: "Document 9", category: "Histoire" },
    { id: 10, title: "Document 10", category: "Art" },
    { id: 11, title: "Document 11", category: "Sciences" },
    { id: 12, title: "Document 12", category: "Histoire" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDoc, setNewDoc] = useState({ title: "", category: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Ajouter un document
  const handleAddDocument = () => {
    if (newDoc.title && newDoc.category) {
      setDocuments([...documents, { id: documents.length + 1, ...newDoc }]);
      setNewDoc({ title: "", category: "" });
      setIsModalOpen(false);
    }
  };

  // Filtrer les documents
  const filteredDocuments = documents.filter((doc) => {
    return (
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter === "" || doc.category === categoryFilter)
    );
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📚 Bibliothèque</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow transition flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Ajouter un document
        </button>
      </div>

      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Recherche */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher un document..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Filtre par catégorie */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
        >
          <option value="">Toutes les catégories</option>
          <option value="Histoire">Histoire</option>
          <option value="Sciences">Sciences</option>
          <option value="Littérature">Littérature</option>
          <option value="Art">Art</option>
        </select>
      </div>

      {/* Tableau scrollable */}
      <div className="bg-white rounded-xl shadow-lg border flex-1 overflow-hidden">
        <div className="overflow-x-auto overflow-y-auto max-h-[60vh]">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-blue-100 sticky top-0 z-10">
              <tr>
                <th className="text-left px-6 py-3 text-gray-700 font-semibold">Titre</th>
                <th className="text-left px-6 py-3 text-gray-700 font-semibold">Catégorie</th>
                <th className="text-center px-6 py-3 text-gray-700 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.map((doc, idx) => (
                <tr
                  key={doc.id}
                  className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition`}
                >
                  <td className="px-6 py-4 text-gray-800">{doc.title}</td>
                  <td className="px-6 py-4 text-gray-600">{doc.category}</td>
                  <td className="px-6 py-4 flex justify-center gap-4 flex-wrap">
                    <button className="text-green-600 hover:text-green-800 flex items-center gap-1">
                      <Edit3 className="w-4 h-4" /> Modifier
                    </button>
                    <button className="text-red-600 hover:text-red-800 flex items-center gap-1">
                      <Trash2 className="w-4 h-4" /> Supprimer
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Download className="w-4 h-4" /> Télécharger
                    </button>
                  </td>
                </tr>
              ))}
              {filteredDocuments.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-500">
                    Aucun document trouvé
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal d'ajout */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Ajouter un document</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Titre du document"
            value={newDoc.title}
            onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
          />
          <input
            type="text"
            placeholder="Catégorie"
            value={newDoc.category}
            onChange={(e) => setNewDoc({ ...newDoc, category: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
            >
              Annuler
            </button>
            <button
              onClick={handleAddDocument}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Ajouter
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
