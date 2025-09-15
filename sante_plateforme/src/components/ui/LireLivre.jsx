import { useState } from "react";
import { ChevronLeft, ChevronRight, Download, Maximize2, ZoomIn, ZoomOut } from "lucide-react";

export default function BookReader() {
  const pages = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    title: "Anatomie Clinique et Fonctionnelle",
    image: `/public/Anatomie_${i + 1}.jpg`, // Remplacez par les vraies URLs
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);

  const goToPage = (page) => setCurrentPage(page);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, pages.length));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-24 bg-blue-50 overflow-y-auto p-2 border-r border-gray-200">
        {pages.map((p) => (
          <button
            key={p.id}
            onClick={() => goToPage(p.id)}
            className={`mb-2 border rounded-lg overflow-hidden w-full transition-all duration-200 ${
              currentPage === p.id ? "border-blue-500 shadow-lg" : "border-gray-200"
            }`}
          >
            <img src={p.image} alt={p.title} className="w-full h-16 object-cover" />
          </button>
        ))}
      </aside>

      {/* Zone principale */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-white shadow">
          <h2 className="font-semibold text-gray-800">Lecture en ligne</h2>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4" />
            Télécharger maintenant
          </button>
        </div>
        
        {/* Page en lecture */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
          <img
            src={pages[currentPage - 1].image}
            alt={pages[currentPage - 1].title}
            style={{ transform: `scale(${zoom})` }}
            className="transition-transform duration-300 max-h-[80vh] object-contain"
          />

          {/* Navigation */}
          <button
            onClick={prevPage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Zoom controls */}
          <div className="absolute bottom-4 flex gap-3 bg-white rounded-lg shadow p-2">
            <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.1))}>
              <ZoomOut className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={() => setZoom((z) => Math.min(2, z + 0.1))}>
              <ZoomIn className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={() => setZoom(1)}>
              <Maximize2 className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export { BookReader };