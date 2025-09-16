import { Search, Settings, RefreshCcw } from "lucide-react";

const ApiTable = () => {
  const apis = [
    { id: 1, name: "Aplateforme A", status: "Active", lastSync: "Aujourd’hui à 07h30", action: "Configurer" },
    { id: 2, name: "Aplateforme B", status: "Inactive", lastSync: "Aujourd’hui à 07h30", action: "Synchroniser" },
    { id: 3, name: "Aplateforme C", status: "Active", lastSync: "Lundi 05/02/2025", action: "Configurer" },
    { id: 4, name: "Aplateforme D", status: "Inactive", lastSync: "Vendredi 01/05/2024", action: "Synchroniser" },
    { id: 5, name: "Aplateforme E", status: "Active", lastSync: "Aujourd’hui à 07h30", action: "Configurer" },
    { id: 6, name: "Aplateforme F", status: "Inactive", lastSync: "Dimanche 02/03/2024", action: "Synchroniser" },
    { id: 7, name: "Aplateforme G", status: "Active", lastSync: "Lundi 10/04/2024", action: "Configurer" },
    { id: 8, name: "Aplateforme H", status: "Inactive", lastSync: "Vendredi 06/09/2024", action: "Synchroniser" },
    { id: 9, name: "Aplateforme I", status: "Active", lastSync: "Aujourd’hui à 08h15", action: "Configurer" },
    { id: 10, name: "Aplateforme J", status: "Inactive", lastSync: "Samedi 01/06/2024", action: "Synchroniser" },
    { id: 1, name: "Aplateforme A", status: "Active", lastSync: "Aujourd’hui à 07h30", action: "Configurer" },
    { id: 2, name: "Aplateforme B", status: "Inactive", lastSync: "Aujourd’hui à 07h30", action: "Synchroniser" },
    { id: 3, name: "Aplateforme C", status: "Active", lastSync: "Lundi 05/02/2025", action: "Configurer" },
    { id: 4, name: "Aplateforme D", status: "Inactive", lastSync: "Vendredi 01/05/2024", action: "Synchroniser" },
    { id: 5, name: "Aplateforme E", status: "Active", lastSync: "Aujourd’hui à 07h30", action: "Configurer" },
    { id: 6, name: "Aplateforme F", status: "Inactive", lastSync: "Dimanche 02/03/2024", action: "Synchroniser" },
    { id: 7, name: "Aplateforme G", status: "Active", lastSync: "Lundi 10/04/2024", action: "Configurer" },
    { id: 8, name: "Aplateforme H", status: "Inactive", lastSync: "Vendredi 06/09/2024", action: "Synchroniser" },
    { id: 9, name: "Aplateforme I", status: "Active", lastSync: "Aujourd’hui à 08h15", action: "Configurer" },
    { id: 10, name: "Aplateforme J", status: "Inactive", lastSync: "Samedi 01/06/2024", action: "Synchroniser" },
    { id: 1, name: "Aplateforme A", status: "Active", lastSync: "Aujourd’hui à 07h30", action: "Configurer" },
    { id: 2, name: "Aplateforme B", status: "Inactive", lastSync: "Aujourd’hui à 07h30", action: "Synchroniser" },
    { id: 3, name: "Aplateforme C", status: "Active", lastSync: "Lundi 05/02/2025", action: "Configurer" },
    { id: 4, name: "Aplateforme D", status: "Inactive", lastSync: "Vendredi 01/05/2024", action: "Synchroniser" },
    { id: 5, name: "Aplateforme E", status: "Active", lastSync: "Aujourd’hui à 07h30", action: "Configurer" },
    { id: 6, name: "Aplateforme F", status: "Inactive", lastSync: "Dimanche 02/03/2024", action: "Synchroniser" },
    { id: 7, name: "Aplateforme G", status: "Active", lastSync: "Lundi 10/04/2024", action: "Configurer" },
    { id: 8, name: "Aplateforme H", status: "Inactive", lastSync: "Vendredi 06/09/2024", action: "Synchroniser" },
    { id: 9, name: "Aplateforme I", status: "Active", lastSync: "Aujourd’hui à 08h15", action: "Configurer" },
    { id: 10, name: "Aplateforme J", status: "Inactive", lastSync: "Samedi 01/06/2024", action: "Synchroniser" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          🌐 API Externe
        </h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition">
          Ajouter une API
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher une API..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200 outline-none"
        />
      </div>

      {/* Table avec scroll interne */}
      <div className="overflow-x-auto">
        <div className="max-h-80 overflow-y-auto border rounded-lg">
          <table className="w-full border-collapse text-sm">
            <thead className="sticky top-0 bg-gradient-to-r from-indigo-50 to-purple-50 z-10">
              <tr className="text-gray-700 uppercase text-xs">
                <th className="px-4 py-3 text-left min-w-[180px]">Nom</th>
                <th className="px-4 py-3 text-center min-w-[120px]">Statut</th>
                <th className="px-4 py-3 text-left min-w-[200px]">Dernière synchronisation</th>
                <th className="px-4 py-3 text-center min-w-[140px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {apis.map((api, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-indigo-50 transition`}
                >
                  {/* Nom */}
                  <td className="px-4 py-3 font-medium text-gray-800">{api.name}</td>

                  {/* Statut */}
                  <td className="px-4 py-3 text-center">
                    {api.status === "Active" ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        🟢 Active
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                        🔴 Inactive
                      </span>
                    )}
                  </td>

                  {/* Dernière synchronisation */}
                  <td className="px-4 py-3 text-gray-600">{api.lastSync}</td>

                  {/* Action */}
                  <td className="px-4 py-3 text-center">
                    {api.action === "Configurer" ? (
                      <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition mx-auto">
                        <Settings size={16} /> Configurer
                      </button>
                    ) : (
                      <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition mx-auto">
                        <RefreshCcw size={16} /> Synchroniser
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApiTable;
