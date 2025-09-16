import { Search, UserPlus, Ban, Unlock } from "lucide-react";
import { useState } from "react";

const UsersTable = () => {
  const [selected, setSelected] = useState([]);

  const users = [
    { id: 1, name: "TOTO", email: "toto@gamil.com", role: "Admin", status: "Actif" },
    { id: 2, name: "Jean BOBO", email: "toto@gamil.com", role: "Admin", status: "Inactif" },
    { id: 3, name: "TATA Bine", email: "toto@gamil.com", role: "Simple", status: "Actif" },
    { id: 4, name: "NONO Nomie", email: "toto@gamil.com", role: "Admin", status: "Inactif" },
    { id: 5, name: "BOSSOU Toni", email: "toto@gamil.com", role: "Simple", status: "Actif" },
    { id: 6, name: "BOSSOU Mimi", email: "toto@gamil.com", role: "Simple", status: "Actif" },
  ];

  // Gestion sélection/désélection
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">👥 Utilisateurs</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition">
            <UserPlus size={18} /> Ajouter un Admin
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition">
            <Ban size={18} /> Bloquer
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition">
            <Unlock size={18} /> Débloquer
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-indigo-200 outline-none"
        />
      </div>

      {/* Table scrollable */}
      <div className="overflow-y-auto h-screen rounded-lg border">
        <table className="w-full text-sm border-collapse">
          <thead className="sticky top-0 bg-indigo-100 text-gray-700 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 text-center">✔</th>
              <th className="px-4 py-3 text-left">Nom</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Rôle</th>
              <th className="px-4 py-3 text-center">Statut</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr
                key={u.id}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-indigo-50 transition`}
              >
                {/* Checkbox */}
                <td className="px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(u.id)}
                    onChange={() => toggleSelect(u.id)}
                    className="w-4 h-4 accent-indigo-600 cursor-pointer"
                  />
                </td>

                {/* Nom */}
                <td className="px-4 py-3 font-medium">{u.name}</td>

                {/* Email */}
                <td className="px-4 py-3 text-red-500">{u.email}</td>

                {/* Role */}
                <td className="px-4 py-3">
                  {u.role === "Admin" ? (
                    <span className="text-yellow-600 font-semibold">Admin</span>
                  ) : (
                    <span className="text-gray-700">Simple</span>
                  )}
                </td>

                {/* Statut */}
                <td className="px-4 py-3 text-center">
                  {u.status === "Actif" ? (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      ✅ Actif
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-600">
                      ⛔ Inactif
                    </span>
                  )}
                </td>

                {/* Action */}
                <td className="px-4 py-3 text-center">
                  <button className="text-indigo-600 font-semibold hover:underline">
                    Synchroniser
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
