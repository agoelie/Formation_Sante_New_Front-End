// export default function LoginForm() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//         {/* Header */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-blue-900">Connexion</h1>
//           <p className="text-gray-500 text-sm mt-1">
//             Entrez vos informations pour accéder à votre espace
//           </p>
//         </div>

//         {/* Form */}
//         <form className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Nom</label>
//             <input
//               type="text"
//               placeholder="Votre nom"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="email@exemple.com"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
//           >
//             Se connecter
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <hr className="flex-1 border-gray-300" />
//           <span className="px-2 text-sm text-gray-500">ou</span>
//           <hr className="flex-1 border-gray-300" />
//         </div>

//         {/* Social login (optionnel) */}
//         <div className="space-y-3">
//           <button className="w-full border flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition">
//             <img src="/public/GoogleLogo.jpg" alt="Google" className="w-5 h-5" />
//             Se connecter avec Google
//           </button>
//           {/* <button className="w-full border flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition">
//             <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
//             Se connecter avec Facebook
//           </button> */}
//         </div>

//         {/* Footer */}
//         <p className="text-center text-sm text-gray-500 mt-6">
//           Pas encore de compte ?{" "}
//           <a href="/register" className="text-blue-600 font-medium">S’inscrire</a>
//         </p>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { ArrowLeft } from "lucide-react";

// export default function RegisterPage() {
//   const [password, setPassword] = useState("");
//   const [strength, setStrength] = useState("");

//   const checkStrength = (value) => {
//     setPassword(value);

//     if (!value) return setStrength("");

//     let score = 0;
//     if (value.length >= 6) score++;
//     if (/[A-Z]/.test(value)) score++;
//     if (/[0-9]/.test(value)) score++;
//     if (/[^A-Za-z0-9]/.test(value)) score++;

//     if (score <= 1) setStrength("Faible");
//     else if (score === 2) setStrength("Moyen");
//     else if (score === 3) setStrength("Fort");
//     else setStrength("Excellent");
//   };

//   const getStrengthColor = () => {
//     switch (strength) {
//       case "Faible":
//         return "text-red-500";
//       case "Moyen":
//         return "text-yellow-500";
//       case "Fort":
//         return "text-blue-500";
//       case "Excellent":
//         return "text-green-600";
//       default:
//         return "text-gray-400";
//     }
//   };

//   return (
//     <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
//       {/* Left side - Image */}
//       <div className="hidden md:flex items-center justify-center bg-blue-900">
//         <img
//           src="/register-illustration.jpg"
//           alt="Register illustration"
//           className="w-3/4 h-auto rounded-xl shadow-lg"
//         />
//       </div>

//       {/* Right side - Form */}
//       <div className="flex items-center justify-center bg-gray-50 p-10">
//         <div className="w-full max-w-md">
//           {/* Logo */}
//           <div className="flex justify-center mb-6">
//             <img src="/logo.png" alt="Logo" className="h-12" />
//           </div>

//           {/* Header */}
//           <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
//             Créez votre compte
//           </h2>
//           <p className="text-gray-500 text-sm text-center mb-8">
//             Rejoignez notre communauté santé & bien-être
//           </p>

//           {/* Form */}
//           <form className="space-y-5">
//             {/* Nom */}
//             <div>
//               <input
//                 type="text"
//                 placeholder="Entrez votre nom complet"
//                 className="w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <input
//                 type="email"
//                 placeholder="Votre adresse email"
//                 className="w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <input
//                 type="password"
//                 placeholder="Créer un mot de passe"
//                 value={password}
//                 onChange={(e) => checkStrength(e.target.value)}
//                 className="w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
//               />
//               {strength && (
//                 <p className={`mt-2 text-sm font-medium ${getStrengthColor()}`}>
//                   Sécurité du mot de passe : {strength}
//                 </p>
//               )}
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
//             >
//               S'inscrire
//             </button>

//             {/* Retour */}
//             <div className="flex items-center justify-center gap-2 mt-4">
//               <ArrowLeft className="w-4 h-4 text-blue-600" />
//               <a
//                 href="/login"
//                 className="text-sm text-blue-600 hover:underline"
//               >
//                 Retour à la connexion
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Briefcase, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Fonction pour évaluer la force du mot de passe
  const evaluatePasswordStrength = (password) => {
    let score = 0;
    
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 2) return { score: 1, label: 'Moyen', color: 'bg-yellow-500' };
    if (score <= 4) return { score: 2, label: 'Fort', color: 'bg-orange-500' };
    return { score: 3, label: 'Excellent', color: 'bg-green-500' };
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    // Ici vous pourriez ajouter la logique d'inscription
  };

  const passwordStrength = evaluatePasswordStrength(formData.password);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Section gauche - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-white text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <UserPlus className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">Rejoignez-nous</h1>
            <p className="text-xl text-white/90 leading-relaxed">
                Accédez à votre espace et vivez une expérience professionnelle unique            </p>
          </div>
        </div>
      </div>

      {/* Section droite - Formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header avec logo et bouton retour */}
          <div className="flex items-center justify-between mb-8">
            {/* <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour</span>
            </button> */}
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">FormASanté</span>
            </div>
          </div>

          {/* Titre */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter au compte</h2>
            {/* <p className="text-gray-600">Remplissez les informations ci-dessous pour commencer</p> */}
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom et Prénom */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                    focusedField === 'firstName' ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Votre prénom"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                      focusedField === 'firstName'
                        ? 'border-blue-600 shadow-lg shadow-blue-600/25'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                    focusedField === 'lastName' ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Votre nom de famille"
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                      focusedField === 'lastName'
                        ? 'border-blue-600 shadow-lg shadow-blue-600/25'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                </div>
              </div>
            </div> */}

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                  focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'
                }`} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="votre.email@exemple.com"
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                    focusedField === 'email'
                      ? 'border-blue-600 shadow-lg shadow-blue-600/25'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
              </div>
            </div>

            {/* Profession */}
            {/* <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Profession
              </label>
              <div className="relative">
                <Briefcase className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                  focusedField === 'profession' ? 'text-blue-600' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('profession')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Ex: Développeur, Designer, Manager..."
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                    focusedField === 'profession'
                      ? 'border-blue-600 shadow-lg shadow-blue-600/25'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
              </div>
            </div> */}

            {/* Mot de passe */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                  focusedField === 'password' ? 'text-blue-600' : 'text-gray-400'
                }`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Créez un mot de passe sécurisé"
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                    focusedField === 'password'
                      ? 'border-blue-600 shadow-lg shadow-blue-600/25'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Indicateur de force du mot de passe */}
              {formData.password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-600">Force du mot de passe:</span>
                    <span className={`text-xs font-bold ${
                      passwordStrength.score === 1 ? 'text-yellow-600' :
                      passwordStrength.score === 2 ? 'text-orange-600' : 'text-green-600'
                    }`}>
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                          level <= passwordStrength.score
                            ? passwordStrength.color
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
            >
              Se connecter
            </button>
          </form>

          {/* Liens de connexion */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Vous avez déjà un compte ?{''} 
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                S'inscrire
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;