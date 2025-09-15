export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      {/* Section bleue */}
      <div className="bg-blue-900 text-center py-8">
        <h2 className="inline-block px-4 py-1 text-white border border-white rounded-full text-lg font-semibold">
          FormASanté
        </h2>
        {/* <p className="mt-3 text-gray-200 text-sm">
          Atteignez vos objectifs de carrière avec Santé Plus
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-md font-medium shadow hover:bg-gray-100">
          Commencer à suivre la formation
        </button> */}
      </div>

      {/* Liens */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-3">FormASanté</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="">A propos</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Direction</a></li>
            <li><a href="">Catalogue</a></li>
            <li><a href="">FormASanté</a></li>
            <li><a href="">Pour les entreprises</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Communauté</h3>
          <ul className="space-y-2 text-sm">
            <li> <a href="">A propos</a></li>
            <li><a href="">Ce que nous proposons</a></li>
            <li><a href="">Direction</a></li>
            <li><a href="">Catalogue</a></li>
            <li><a href="">FormASanté</a></li>
            <li><a href="">Pour les entreprises</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Entreprise</h3>
          <ul className="space-y-2 text-sm">
            <li> <a href="">A proposA</a></li>
            <li> <a href="">Ce que nous proposons</a></li>
            <li> <a href="">Direction</a></li>
            <li><a href="">Catalogue</a></li>
            <li> <a href="">FormASanté</a></li>
            <li><a href="">Pour les entreprises</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Application</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="">iOS</a></li>
            <li><a href="">Android</a></li>
            <li><a href="">Windows</a></li>
          </ul>
        </div>
      </div>

      <hr className="my-6" />

      {/* Bas de page */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          © 2025 Santé Inc. Tous droits réservés.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 ">
          <img src="/logofacabook2jpg" alt="Facebook" className="w-10 h-10" />
          <img src="/logoLinkedin.jpg" alt="LinkedIn" className="w-10 h-10" />
          <img src="/logoTwitter.jpg" alt="Twitter" className="w-10 h-10" />
          <img src="/logoInstagramme.jpg" alt="Instagram" className="w-10 h-10" />
          <img src="/logoYoutube.jpg" alt="YouTube" className="w-10 h-10" />
        </div>
      </div>
    </footer>
  );
}
