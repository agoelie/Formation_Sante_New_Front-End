// export default function PromoSection() {
//   return (
//     <section className="bg-blue-900 text-white py-8 px-6 h-64">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Texte */}
//         <div className="flex-1  leading-relaxed text-left  ">
//           <p>
//             Maîtrisez les gestes essentiels pour une vie saine grâce à nos programmes conçus par des experts en santé.
//             Nos formations vous guident pas à pas pour adopter de meilleures habitudes au quotidien.
//             Apprenez les bases d’une bonne hygiène, de la nutrition équilibrée et du bien-être global.
//             Chaque module est pensé pour être pratique, simple et directement applicable à votre vie.
//             Donnez-vous les clés pour une santé durable et un avenir plus serein avec Santé Plus.
//           </p>
//         </div>

//         {/* Image (dans public/) */}
//         <div className="flex-shrink-0 ">
//           <img
//             src="/medecine.jpg"
//             alt="Formation Santé"
//             className="w-50 h-50 rounded-md shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

export default function PromoSection() {
  return (
    <section className="bg-blue-700 text-white py-8 px-6 h-64">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Texte */}
        <div className="flex-1 leading-relaxed text-left flex justify-start items-start  ">
          <p >
                
                Découvrez notre sélection de cours en santé et médecine, conçus par des experts et choisis pour leur pertinence et leur qualité.
                Ces formations vous offrent des connaissances pratiques et accessibles pour renforcer vos compétences au quotidien.
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
