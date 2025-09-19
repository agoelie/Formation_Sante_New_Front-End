export default function PromoSection() {
  return (
    <section className="bg-blue-700 text-white py-8 px-6 h-64">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Texte */}
        <div className="flex-1 leading-relaxed text-left flex justify-start items-start ">
          <p >
                 Découvrez notre sélection des ouvrages les plus prisés en santé et médecine, soigneusement choisis pour leur qualité et leur impact.<br/>
                Ces livres vous offrent des connaissances pratiques et accessibles pour améliorer vos compétences au quotidien.
                
          </p>
        </div>

        {/* Image (dans public/) */}
        <div className="flex-shrink-0 ">
          <img
            src="/medecine.jpg"
            alt="Formation Santé"
            className="w-50 h-50 rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
