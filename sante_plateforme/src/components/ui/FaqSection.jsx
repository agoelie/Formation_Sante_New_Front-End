import { useState } from "react";

const faqs = [
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
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Foire Aux Questions
      </h2>

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50"
            >
              <span className="text-gray-800">{faq.question}</span>
              <span className="text-gray-600 text-xl">
                {openIndex === index ? "⌄" : "›"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Bouton afficher plus */}
      <div className="flex justify-center mt-4">
        <button className="flex items-center text-blue-600 font-medium hover:underline">
          <span className="mr-1">⌄</span>
          Afficher l’ensemble des 5 autres questions
        </button>
      </div>
    </section>
  );
}
