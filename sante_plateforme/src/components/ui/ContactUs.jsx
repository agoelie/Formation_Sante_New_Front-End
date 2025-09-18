const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-blue-700 text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">Contactez-nous</h1>
      </header>

      {/* Get In Touch */}
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold"> Nous contacter</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
         
             Nous sommes là pour vous aider. Contactez-nous par l'un des moyens suivants.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Appelez-nous</h3>
            <p className="text-gray-700 mt-2">+229 01 00 00 00 </p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-gray-700 mt-2">contact@formasante.com</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
            <h3 className="text-xl font-bold">Visitez-nous</h3>
            <p className="text-gray-700 mt-2">Rue RIE 175, Cotonou</p>
          </div>
        </div>
      </section>

      {/* Send Message */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Envoyez-nous un message</h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
          >
            Envoyer un message
          </button>
        </form>
      </section>

    
    </div>
  );
};

export default ContactPage;
