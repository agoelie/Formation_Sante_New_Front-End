// import { useState } from "react";

// const faqs = [
//   {
//     question: "Les formations proposées sur ce site sont-elles réellement gratuites?",
//     answer: "Oui, toutes nos formations sont 100% gratuites et accessibles à tout moment.",
//   },
//   {
//     question: "Puis-je suivre les cours à mon propre rythme ?",
//     answer: "Oui, vous pouvez suivre les cours quand vous voulez et avancer à votre rythme.",
//   },
//   {
//     question: "Dois-je créer un compte pour accéder aux cours ?",
//     answer: "Oui, un compte est nécessaire afin de sauvegarder vos progrès.",
//   },
//   {
//     question: "Puis-je obtenir un certificat après la formation ?",
//     answer: "Oui, certaines formations offrent un certificat gratuit en fin de parcours.",
//   },
// ];

// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-12 px-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//         Foire Aux Questions
//       </h2>

//       <div className="border border-gray-300 rounded-lg overflow-hidden">
//         {faqs.map((faq, index) => (
//           <div key={index} className="border-b">
//             <button
//               onClick={() => toggle(index)}
//               className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50"
//             >
//               <span className="text-gray-800">{faq.question}</span>
//               <span className="text-gray-600 text-xl">
//                 {openIndex === index ? "⌄" : "›"}
//               </span>
//             </button>
//             {openIndex === index && (
//               <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Bouton afficher plus */}
//       <div className="flex justify-center mt-4">
//         <button className="flex items-center text-blue-600 font-medium hover:underline">
//           <span className="mr-1">⌄</span>
//           Afficher l’ensemble des 5 autres questions
//         </button>
//       </div>
//     </section>
//   );
// }


// import { useState } from "react";

// const faqs = [
//   {
//     question: "Les formations proposées sur ce site sont-elles réellement gratuites?",
//     answer: "Oui, toutes nos formations sont 100% gratuites ,neanmoin il y a d'autre qui sont entrièrement payantes.  accessibles à tout moment.",
//   },
//   {
//     question: "Puis-je suivre les cours à mon propre rythme ?",
//     answer: "Oui, vous pouvez suivre les cours quand vous voulez et avancer à votre rythme.",
//   },
//   {
//     question: "Dois-je créer un compte pour accéder aux cours ?",
//     answer: "Oui, un compte est nécessaire afin de sauvegarder vos progrès.",
//   },
//   {
//     question: "Puis-je obtenir un certificat après la formation ?",
//     answer: "Oui, certaines formations payantes  offrent un certificat  à la  fin de parcours.",
//   },
// ];

// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-gray-50 py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-indigo-700 mb-4">
//             Foire Aux Questions
//           </h1>
//           <p className="text-lg text-gray-600">
//             Retrouvez les réponses aux questions fréquentes concernant nos formations gratuites.
//           </p>
//         </div>

//         {/* FAQ Items */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
//             >
//               <button
//                 onClick={() => toggle(index)}
//                 className="w-full flex justify-between items-center p-6 text-left"
//               >
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {faq.question}
//                 </h3>
//                 <span
//                   className={`text-indigo-600 transform transition-transform duration-300 ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 >
//                   ▼
//                 </span>
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Bouton afficher plus */}
//         <div className="flex justify-center mt-10">
//           <button className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium shadow-md">
//             <span className="mr-2">➕</span>
//             Afficher l’ensemble des 5 autres questions
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState } from "react";

// const allFaqs = [
//   {
//     question: "Les formations proposées sur ce site sont-elles réellement gratuites?",
//     answer: "Oui, toutes nos formations sont 100% gratuites et accessibles à tout moment.",
//   },
//   {
//     question: "Puis-je suivre les cours à mon propre rythme ?",
//     answer: "Oui, vous pouvez suivre les cours quand vous voulez et avancer à votre rythme.",
//   },
//   {
//     question: "Dois-je créer un compte pour accéder aux cours ?",
//     answer: "Oui, un compte est nécessaire afin de sauvegarder vos progrès.",
//   },
//   {
//     question: "Puis-je obtenir un certificat après la formation ?",
//     answer: "Oui, certaines formations offrent un certificat gratuit en fin de parcours.",
//   },
//   {
//     question: "Comment puis-je contacter un formateur ?",
//     answer: "Vous pouvez poser vos questions via l’espace commentaires du cours ou utiliser la messagerie intégrée.",
//   },
//   {
//     question: "Les cours sont-ils disponibles hors ligne ?",
//     answer: "Certains cours peuvent être téléchargés pour une consultation hors ligne.",
//   },
//   {
//     question: "Les certificats sont-ils reconnus ?",
//     answer: "Les certificats attestent de vos compétences mais la reconnaissance dépend des institutions.",
//   },
//   {
//     question: "Combien de temps dure une formation ?",
//     answer: "Chaque formation a une durée variable, généralement entre 2 et 20 heures.",
//   },
//   {
//     question: "Puis-je suivre plusieurs formations en même temps ?",
//     answer: "Oui, il n’y a aucune limite au nombre de formations suivies en parallèle.",
//   },
// ];

// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [visibleCount, setVisibleCount] = useState(4); // d'abord 4 FAQ visibles

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const showMore = () => {
//     setVisibleCount(allFaqs.length); // Affiche toutes les FAQs
//   };

//   return (
//     <section className="bg-gray-50 py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-indigo-700 mb-4">
//             Foire Aux Questions
//           </h1>
//           <p className="text-lg text-gray-600">
//             Retrouvez les réponses aux questions fréquentes concernant nos formations gratuites.
//           </p>
//         </div>

//         {/* FAQ Items */}
//         <div className="space-y-4">
//           {allFaqs.slice(0, visibleCount).map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
//             >
//               <button
//                 onClick={() => toggle(index)}
//                 className="w-full flex justify-between items-center p-6 text-left"
//               >
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {faq.question}
//                 </h3>
//                 <span
//                   className={`text-indigo-600 transform transition-transform duration-300 ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 >
//                   ▼
//                 </span>
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Bouton afficher plus */}
//         {visibleCount < allFaqs.length && (
//           <div className="flex justify-center mt-10">
//             <button
//               onClick={showMore}
//               className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium shadow-md"
//             >
//               <span className="mr-2">➕</span>
//               Afficher l’ensemble des {allFaqs.length - visibleCount} autres questions
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

const allFaqs = [
  {
    question: "Les formations proposées sur ce site sont-elles réellement gratuites?",
    answer: "Oui, toutes nos formations sont 100% gratuites et accessibles à tout moment.",
  },
  {
    question: "Puis-je suivre les cours à mon propre rythme ?",
    answer: "Oui, vous pouvez suivre les cours quand vous voulez et avancer à votre rythme.",
  },
  {
    question: "Dois-je créer un compte pour accéder aux cours ?",
    answer: "Oui, un compte est nécessaire afin de sauvegarder vos progrès.",
  },
  {
    question: "Puis-je obtenir un certificat après la formation ?",
    answer: "Oui, certaines formations offrent un certificat gratuit en fin de parcours.",
  },
  {
    question: "Comment puis-je contacter un formateur ?",
    answer: "Vous pouvez poser vos questions via l’espace commentaires du cours ou utiliser la messagerie intégrée.",
  },
  {
    question: "Les cours sont-ils disponibles hors ligne ?",
    answer: "Certains cours peuvent être téléchargés pour une consultation hors ligne.",
  },
  {
    question: "Les certificats sont-ils reconnus ?",
    answer: "Les certificats attestent de vos compétences mais la reconnaissance dépend des institutions.",
  },
  {
    question: "Combien de temps dure une formation ?",
    answer: "Chaque formation a une durée variable, généralement entre 2 et 20 heures.",
  },
  {
    question: "Puis-je suivre plusieurs formations en même temps ?",
    answer: "Oui, il n’y a aucune limite au nombre de formations suivies en parallèle.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4); // par défaut 4 visibles

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showMore = () => {
    setVisibleCount(allFaqs.length);
  };

  const showLess = () => {
    setVisibleCount(4);
    setOpenIndex(null);
  };

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">
            Foire Aux Questions
          </h1>
          <p className="text-lg text-gray-600">
            Retrouvez les réponses aux questions fréquentes concernant nos formations gratuites.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {allFaqs.slice(0, visibleCount).map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className={`text-indigo-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Boutons Afficher plus / Voir moins */}
        <div className="flex justify-center mt-10">
          {visibleCount < allFaqs.length ? (
            <button
              onClick={showMore}
              className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium shadow-md"
            >
              <span className="mr-2">➕</span>
              Afficher l’ensemble des {allFaqs.length - visibleCount} autres questions
            </button>
          ) : (
            <button
              onClick={showLess}
              className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium shadow-md"
            >
              <span className="mr-2">➖</span>
              Voir moins de questions
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
