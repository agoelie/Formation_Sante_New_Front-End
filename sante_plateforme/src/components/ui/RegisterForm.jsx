// import { Link } from "react-router-dom";

// import React, { useState } from 'react';
// import { ArrowLeft, User, Mail, Briefcase, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     profession: '',
//     password: ''
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   // Fonction pour évaluer la force du mot de passe
//   const evaluatePasswordStrength = (password) => {
//     let score = 0;
    
//     if (password.length >= 8) score += 1;
//     if (password.length >= 12) score += 1;
//     if (/[a-z]/.test(password)) score += 1;
//     if (/[A-Z]/.test(password)) score += 1;
//     if (/[0-9]/.test(password)) score += 1;
//     if (/[^A-Za-z0-9]/.test(password)) score += 1;

//     if (score <= 2) return { score: 1, label: 'Moyen', color: 'bg-yellow-500' };
//     if (score <= 4) return { score: 2, label: 'Fort', color: 'bg-orange-500' };
//     return { score: 3, label: 'Excellent', color: 'bg-green-500' };
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Données du formulaire:', formData);
//     // Ici vous pourriez ajouter la logique d'inscription
//   };

//   const passwordStrength = evaluatePasswordStrength(formData.password);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Section gauche - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <img
//           src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Professional workspace"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90"></div>
//         <div className="absolute inset-0 flex items-center justify-center p-12">
//           <div className="text-white text-center">
//             <div className="flex items-center justify-center mb-8">
//               <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//                 <UserPlus className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <h1 className="text-4xl font-bold mb-6">Rejoignez-nous</h1>
//             <p className="text-xl text-white/90 leading-relaxed">
//               Créez votre compte et accédez à une expérience professionnelle exceptionnelle
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite - Formulaire */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Header avec logo et bouton retour */}
//           <div className="flex items-center justify-between mb-8">
//             <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
//               <ArrowLeft className="w-5 h-5" />
//               <span className="font-medium">Retour</span>
//             </button>
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">ProApp</span>
//             </div>
//           </div>

//           {/* Titre */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Créer un compte</h2>
//             <p className="text-gray-600">Remplissez les informations ci-dessous pour commencer</p>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Nom et Prénom */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="relative">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Prénom
//                 </label>
//                 <div className="relative">
//                   <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                     focusedField === 'firstName' ? 'text-blue-600' : 'text-gray-400'
//                   }`} />
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField('firstName')}
//                     onBlur={() => setFocusedField(null)}
//                     placeholder="Votre prénom"
//                     className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                       focusedField === 'firstName'
//                         ? 'border-blue-600 shadow-lg shadow-blue-600/25'
//                         : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                   />
//                 </div>
//               </div>

//               <div className="relative">
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Nom
//                 </label>
//                 <div className="relative">
//                   <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                     focusedField === 'lastName' ? 'text-blue-600' : 'text-gray-400'
//                   }`} />
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     onFocus={() => setFocusedField('lastName')}
//                     onBlur={() => setFocusedField(null)}
//                     placeholder="Votre nom de famille"
//                     className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                       focusedField === 'lastName'
//                         ? 'border-blue-600 shadow-lg shadow-blue-600/25'
//                         : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Adresse email
//               </label>
//               <div className="relative">
//                 <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                   focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'
//                 }`} />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('email')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="votre.email@exemple.com"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                     focusedField === 'email'
//                       ? 'border-blue-600 shadow-lg shadow-blue-600/25'
//                       : 'border-gray-200 hover:border-gray-300'
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Profession */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Profession
//               </label>
//               <div className="relative">
//                 <Briefcase className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                   focusedField === 'profession' ? 'text-blue-600' : 'text-gray-400'
//                 }`} />
//                 <input
//                   type="text"
//                   name="profession"
//                   value={formData.profession}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('profession')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Ex: Développeur, Designer, Manager..."
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                     focusedField === 'profession'
//                       ? 'border-blue-600 shadow-lg shadow-blue-600/25'
//                       : 'border-gray-200 hover:border-gray-300'
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Mot de passe */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Mot de passe
//               </label>
//               <div className="relative">
//                 <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                   focusedField === 'password' ? 'text-blue-600' : 'text-gray-400'
//                 }`} />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('password')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Créez un mot de passe sécurisé"
//                   className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                     focusedField === 'password'
//                       ? 'border-blue-600 shadow-lg shadow-blue-600/25'
//                       : 'border-gray-200 hover:border-gray-300'
//                   }`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>

//               {/* Indicateur de force du mot de passe */}
//               {formData.password && (
//                 <div className="mt-3">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs font-medium text-gray-600">Force du mot de passe:</span>
//                     <span className={`text-xs font-bold ${
//                       passwordStrength.score === 1 ? 'text-yellow-600' :
//                       passwordStrength.score === 2 ? 'text-orange-600' : 'text-green-600'
//                     }`}>
//                       {passwordStrength.label}
//                     </span>
//                   </div>
//                   <div className="flex gap-1">
//                     {[1, 2, 3].map((level) => (
//                       <div
//                         key={level}
//                         className={`h-2 flex-1 rounded-full transition-all duration-300 ${
//                           level <= passwordStrength.score
//                             ? passwordStrength.color
//                             : 'bg-gray-200'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Bouton de soumission */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Créer mon compte
//             </button>
//           </form>

//           {/* Liens de connexion */}
//                   <div className="mt-8 text-center">
//           <p className="text-gray-600">
//             Vous avez déjà un compte ?{" "}
//             <Link
//               to="/login"
//               className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//             >
//               S'inscrire
//             </Link>
//           </p>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { Link } from "react-router-dom";
// import React, { useState } from 'react';
// import { ArrowLeft, User, Mail, Briefcase, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';
// import { registerSchema } from '../../validation/AuthValidation';
// import { z } from 'zod';

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     profession: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   // Fonction pour évaluer la force du mot de passe
//   const evaluatePasswordStrength = (password) => {
//     let score = 0;
//     if (password.length >= 8) score += 1;
//     if (password.length >= 12) score += 1;
//     if (/[a-z]/.test(password)) score += 1;
//     if (/[A-Z]/.test(password)) score += 1;
//     if (/[0-9]/.test(password)) score += 1;
//     if (/[^A-Za-z0-9]/.test(password)) score += 1;

//     if (score <= 2) return { score: 1, label: 'Moyen', color: 'bg-yellow-500' };
//     if (score <= 4) return { score: 2, label: 'Fort', color: 'bg-orange-500' };
//     return { score: 3, label: 'Excellent', color: 'bg-green-500' };
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     try {
//       registerSchema.parse(formData);
//       setErrors({});
//       console.log('Formulaire valide:', formData);
//       // Ici tu peux continuer la logique d'inscription
//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const formattedErrors = {};
//         err.errors.forEach(e => {
//           formattedErrors[e.path[0]] = e.message;
//         });
//         setErrors(formattedErrors);
//       }
//     }
//   };

//   const passwordStrength = evaluatePasswordStrength(formData.password);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Section gauche - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <img
//           src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Professional workspace"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90"></div>
//         <div className="absolute inset-0 flex items-center justify-center p-12">
//           <div className="text-white text-center">
//             <div className="flex items-center justify-center mb-8">
//               <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//                 <UserPlus className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <h1 className="text-4xl font-bold mb-6">Rejoignez-nous</h1>
//             <p className="text-xl text-white/90 leading-relaxed">
//               Créez votre compte et accédez à une expérience professionnelle exceptionnelle
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite - Formulaire */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-8">
//             <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
//               <ArrowLeft className="w-5 h-5" />
//               <span className="font-medium">Retour</span>
//             </button>
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">ProApp</span>
//             </div>
//           </div>

//           {/* Titre */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Créer un compte</h2>
//             <p className="text-gray-600">Remplissez les informations ci-dessous pour commencer</p>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Prénom */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom</label>
//               <div className="relative">
//                 <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'firstName' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('firstName')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Votre prénom"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'firstName' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//               </div>
//               {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
//             </div>

//             {/* Nom */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
//               <div className="relative">
//                 <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'lastName' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('lastName')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Votre nom de famille"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'lastName' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//               </div>
//               {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse email</label>
//               <div className="relative">
//                 <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('email')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="votre.email@exemple.com"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'email' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//               </div>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             {/* Profession */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Profession</label>
//               <div className="relative">
//                 <Briefcase className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'profession' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type="text"
//                   name="profession"
//                   value={formData.profession}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('profession')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Ex: Développeur, Designer, Manager..."
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'profession' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//               </div>
//               {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession}</p>}
//             </div>

//             {/* Mot de passe */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Mot de passe</label>
//               <div className="relative">
//                 <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'password' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('password')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Créez un mot de passe sécurisé"
//                   className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'password' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

//               {/* Indicateur de force du mot de passe */}
//               {formData.password && (
//                 <div className="mt-3">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs font-medium text-gray-600">Force du mot de passe:</span>
//                     <span className={`text-xs font-bold ${passwordStrength.score === 1 ? 'text-yellow-600' : passwordStrength.score === 2 ? 'text-orange-600' : 'text-green-600'}`}>
//                       {passwordStrength.label}
//                     </span>
//                   </div>
//                   <div className="flex gap-1">
//                     {[1, 2, 3].map((level) => (
//                       <div
//                         key={level}
//                         className={`h-2 flex-1 rounded-full transition-all duration-300 ${level <= passwordStrength.score ? passwordStrength.color : 'bg-gray-200'}`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Créer mon compte
//             </button>
//           </form>

//           {/* Liens de connexion */}
//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous avez déjà un compte ?{" "}
//               <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
//                 Se connecter
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { Link } from "react-router-dom";
// import React, { useState } from 'react';
// import { ArrowLeft, User, Mail, Briefcase, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';
// import { registerSchema } from '../../validation/AuthValidation';
// import { z } from 'zod';

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     profession: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   // Stockage temporaire des utilisateurs
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState("");

//   // Fonction pour évaluer la force du mot de passe
//   const evaluatePasswordStrength = (password) => {
//     let score = 0;
//     if (password.length >= 8) score += 1;
//     if (password.length >= 12) score += 1;
//     if (/[a-z]/.test(password)) score += 1;
//     if (/[A-Z]/.test(password)) score += 1;
//     if (/[0-9]/.test(password)) score += 1;
//     if (/[^A-Za-z0-9]/.test(password)) score += 1;

//     if (score <= 2) return { score: 1, label: 'Moyen', color: 'bg-yellow-500' };
//     if (score <= 4) return { score: 2, label: 'Fort', color: 'bg-orange-500' };
//     return { score: 3, label: 'Excellent', color: 'bg-green-500' };
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     try {
//       registerSchema.parse(formData);
//       setErrors({});

//       // Vérifier si l'email est déjà utilisé
//       const existingUser = users.find(u => u.email === formData.email);
//       if (existingUser) {
//         setMessage("Cet email est déjà enregistré !");
//         return;
//       }

//       // Ajouter l'utilisateur temporairement
//       setUsers([...users, formData]);
//       setMessage("Inscription réussie !");
//       setFormData({ firstName: '', lastName: '', email: '', profession: '', password: '' });

//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const formattedErrors = {};
//         err.errors.forEach(e => {
//           formattedErrors[e.path[0]] = e.message;
//         });
//         setErrors(formattedErrors);
//       }
//     }
//   };

//   const passwordStrength = evaluatePasswordStrength(formData.password);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Section gauche - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <img
//           src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Professional workspace"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90"></div>
//         <div className="absolute inset-0 flex items-center justify-center p-12">
//           <div className="text-white text-center">
//             <div className="flex items-center justify-center mb-8">
//               <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//                 <UserPlus className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <h1 className="text-4xl font-bold mb-6">Rejoignez-nous</h1>
//             <p className="text-xl text-white/90 leading-relaxed">
//               Créez votre compte et accédez à une expérience professionnelle exceptionnelle
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite - Formulaire */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-8">
//             <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
//               <ArrowLeft className="w-5 h-5" />
//               <span className="font-medium">Retour</span>
//             </button>
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">ProApp</span>
//             </div>
//           </div>

//           {/* Titre */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Créer un compte</h2>
//             <p className="text-gray-600">Remplissez les informations ci-dessous pour commencer</p>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Prénom */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom</label>
//               <div className="relative">
//                 <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'firstName' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('firstName')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Votre prénom"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'firstName' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//               </div>
//               {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
//             </div>

//             {/* Nom */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
//               <div className="relative">
//                 <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'lastName' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('lastName')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Votre nom de famille"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'lastName' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//               </div>
//               {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse email</label>
//               <div className="relative">
//                 <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('email')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="votre.email@exemple.com"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'email' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//               </div>
//               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//             </div>

//             {/* Profession */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Profession</label>
//               <div className="relative">
//                 <Briefcase className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'profession' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type="text"
//                   name="profession"
//                   value={formData.profession}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('profession')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Ex: Développeur, Designer, Manager..."
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'profession' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//               </div>
//               {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession}</p>}
//             </div>

//             {/* Mot de passe */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Mot de passe</label>
//               <div className="relative">
//                 <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${focusedField === 'password' ? 'text-blue-600' : 'text-gray-400'}`} />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField('password')}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Créez un mot de passe sécurisé"
//                   className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${focusedField === 'password' ? 'border-blue-600 shadow-lg shadow-blue-600/25' : 'border-gray-200 hover:border-gray-300'}`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

//               {/* Indicateur de force du mot de passe */}
//               {formData.password && (
//                 <div className="mt-3">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs font-medium text-gray-600">Force du mot de passe:</span>
//                     <span className={`text-xs font-bold ${passwordStrength.score === 1 ? 'text-yellow-600' : passwordStrength.score === 2 ? 'text-orange-600' : 'text-green-600'}`}>
//                       {passwordStrength.label}
//                     </span>
//                   </div>
//                   <div className="flex gap-1">
//                     {[1, 2, 3].map((level) => (
//                       <div
//                         key={level}
//                         className={`h-2 flex-1 rounded-full transition-all duration-300 ${level <= passwordStrength.score ? passwordStrength.color : 'bg-gray-200'}`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Créer mon compte
//             </button>
//           </form>

//           {message && <p className="text-green-600 mt-2">{message}</p>}

//           {/* Liens de connexion */}
//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous avez déjà un compte ?{" "}
//               <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
//                 Se connecter
//               </Link>
//             </p>
//           </div>

//           {/* Pour debug : afficher la liste des utilisateurs */}
//           <div className="mt-4">
//             <h3>Utilisateurs enregistrés (temporaire) :</h3>
//             <ul>
//               {users.map((user, index) => (
//                 <li key={index}>{user.email} - {user.firstName} {user.lastName}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import {
//   ArrowLeft,
//   User,
//   Mail,
//   Briefcase,
//   Lock,
//   Eye,
//   EyeOff,
//   UserPlus,
// } from "lucide-react";
// import { registerSchema } from "../../validation/AuthValidation";
// import { z } from "zod";

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     profession: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   // Stockage temporaire des utilisateurs
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState("");

//   // Fonction pour évaluer la force du mot de passe
//   const evaluatePasswordStrength = (password) => {
//     let score = 0;
//     if (password.length >= 8) score += 1;
//     if (password.length >= 12) score += 1;
//     if (/[a-z]/.test(password)) score += 1;
//     if (/[A-Z]/.test(password)) score += 1;
//     if (/[0-9]/.test(password)) score += 1;
//     if (/[^A-Za-z0-9]/.test(password)) score += 1;

//     if (score <= 2)
//       return { score: 1, label: "Moyen", color: "bg-yellow-500" };
//     if (score <= 4)
//       return { score: 2, label: "Fort", color: "bg-orange-500" };
//     return { score: 3, label: "Excellent", color: "bg-green-500" };
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     // Supprimer l’erreur de ce champ quand l’utilisateur modifie sa valeur
//     setErrors({
//       ...errors,
//       [e.target.name]: "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     try {
//       registerSchema.parse(formData);
//       setErrors({});

//       // Vérifier si l'email est déjà utilisé
//       const existingUser = users.find((u) => u.email === formData.email);
//       if (existingUser) {
//         setMessage("Cet email est déjà enregistré !");
//         return;
//       }

//       // Ajouter l'utilisateur temporairement
//       setUsers([...users, formData]);
//       setMessage("Inscription réussie !");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         profession: "",
//         password: "",
//       });
//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const formattedErrors = {};
//         err.errors.forEach((e) => {
//           formattedErrors[e.path[0]] = e.message;
//         });
//         setErrors(formattedErrors);
//       }
//     }
//   };

//   const passwordStrength = evaluatePasswordStrength(formData.password);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Section gauche - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <img
//           src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Professional workspace"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90"></div>
//         <div className="absolute inset-0 flex items-center justify-center p-12">
//           <div className="text-white text-center">
//             <div className="flex items-center justify-center mb-8">
//               <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//                 <UserPlus className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <h1 className="text-4xl font-bold mb-6">Rejoignez-nous</h1>
//             <p className="text-xl text-white/90 leading-relaxed">
//               Créez votre compte et accédez à une expérience professionnelle
//               exceptionnelle
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite - Formulaire */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-8">
//             <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
//               <ArrowLeft className="w-5 h-5" />
//               <span className="font-medium">Retour</span>
//             </button>
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">ProApp</span>
//             </div>
//           </div>

//           {/* Titre */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Créer un compte
//             </h2>
//             <p className="text-gray-600">
//               Remplissez les informations ci-dessous pour commencer
//             </p>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Prénom */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Prénom
//               </label>
//               <div className="relative">
//                 <User
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                     focusedField === "firstName"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("firstName")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Votre prénom"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                     focusedField === "firstName"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//               </div>
//               {errors.firstName && (
//                 <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
//               )}
//             </div>

//             {/* Nom */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Nom
//               </label>
//               <div className="relative">
//                 <User
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                     focusedField === "lastName"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("lastName")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Votre nom de famille"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                     focusedField === "lastName"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//               </div>
//               {errors.lastName && (
//                 <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Adresse email
//               </label>
//               <div className="relative">
//                 <Mail
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                     focusedField === "email"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("email")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="votre.email@exemple.com"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                     focusedField === "email"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//               )}
//             </div>

//             {/* Profession */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Profession
//               </label>
//               <div className="relative">
//                 <Briefcase
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                     focusedField === "profession"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type="text"
//                   name="profession"
//                   value={formData.profession}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("profession")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Ex: Développeur, Designer, Manager..."
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                     focusedField === "profession"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//               </div>
//               {errors.profession && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.profession}
//                 </p>
//               )}
//             </div>

//             {/* Mot de passe */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Mot de passe
//               </label>
//               <div className="relative">
//                 <Lock
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
//                     focusedField === "password"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("password")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Créez un mot de passe sécurisé"
//                   className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
//                     focusedField === "password"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-5 h-5" />
//                   ) : (
//                     <Eye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-red-500 text-xs mt-1">{errors.password}</p>
//               )}

//               {/* Indicateur de force du mot de passe */}
//               {formData.password && (
//                 <div className="mt-3">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs font-medium text-gray-600">
//                       Force du mot de passe:
//                     </span>
//                     <span
//                       className={`text-xs font-bold ${
//                         passwordStrength.score === 1
//                           ? "text-yellow-600"
//                           : passwordStrength.score === 2
//                           ? "text-orange-600"
//                           : "text-green-600"
//                       }`}
//                     >
//                       {passwordStrength.label}
//                     </span>
//                   </div>
//                   <div className="flex gap-1">
//                     {[1, 2, 3].map((level) => (
//                       <div
//                         key={level}
//                         className={`h-2 flex-1 rounded-full transition-all duration-300 ${
//                           level <= passwordStrength.score
//                             ? passwordStrength.color
//                             : "bg-gray-200"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Créer mon compte
//             </button>
//           </form>

//           {message && <p className="text-green-600 mt-2">{message}</p>}

//           {/* Liens de connexion */}
//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous avez déjà un compte ?{" "}
//               <Link
//                 to="/login"
//                 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//               >
//                 Se connecter
//               </Link>
//             </p>
//           </div>

//           {/* Pour debug : afficher la liste des utilisateurs */}
//           <div className="mt-4">
//             <h3>Utilisateurs enregistrés (temporaire) :</h3>
//             <ul>
//               {users.map((user, index) => (
//                 <li key={index}>
//                   {user.email} - {user.firstName} {user.lastName}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import {
//   ArrowLeft,
//   User,
//   Mail,
//   Briefcase,
//   Lock,
//   Eye,
//   EyeOff,
//   UserPlus,
// } from "lucide-react";
// import { registerSchema } from "../../validation/AuthValidation";
// import { z } from "zod";

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     profession: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const [message, setMessage] = useState("");

//   // Charger les utilisateurs depuis localStorage
//   const loadUsers = () => {
//     const stored = localStorage.getItem("users");
//     return stored ? JSON.parse(stored) : [];
//   };

//   const [users, setUsers] = useState(loadUsers);

//   // Sauvegarder dans localStorage
//   const saveUsers = (newUsers) => {
//     localStorage.setItem("users", JSON.stringify(newUsers));
//     setUsers(newUsers);
//   };

//   // Évaluer la force du mot de passe
//   const evaluatePasswordStrength = (password) => {
//     let score = 0;
//     if (password.length >= 8) score += 1;
//     if (password.length >= 12) score += 1;
//     if (/[a-z]/.test(password)) score += 1;
//     if (/[A-Z]/.test(password)) score += 1;
//     if (/[0-9]/.test(password)) score += 1;
//     if (/[^A-Za-z0-9]/.test(password)) score += 1;

//     if (score <= 2)
//       return { score: 1, label: "Moyen", color: "bg-yellow-500" };
//     if (score <= 4)
//       return { score: 2, label: "Fort", color: "bg-orange-500" };
//     return { score: 3, label: "Excellent", color: "bg-green-500" };
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//     setErrors({
//       ...errors,
//       [e.target.name]: "",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     try {
//       registerSchema.parse(formData);
//       setErrors({});

//       // Vérifier si l'email existe déjà
//       const existingUser = users.find((u) => u.email === formData.email);
//       if (existingUser) {
//         setMessage("❌ Cet email est déjà enregistré !");
//         return;
//       }

//       // Ajouter utilisateur + sauvegarder
//       const newUsers = [...users, formData];
//       saveUsers(newUsers);

//       setMessage("✅ Inscription réussie !");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         profession: "",
//         password: "",
//       });
//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const formattedErrors = {};
//         err.errors.forEach((e) => {
//           formattedErrors[e.path[0]] = e.message;
//         });
//         setErrors(formattedErrors);
//       }
//     }
//   };

//   const passwordStrength = evaluatePasswordStrength(formData.password);

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Section gauche */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <img
//           src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="Professional workspace"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90"></div>
//         <div className="absolute inset-0 flex items-center justify-center p-12">
//           <div className="text-white text-center">
//             <div className="flex items-center justify-center mb-8">
//               <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//                 <UserPlus className="w-12 h-12 text-white" />
//               </div>
//             </div>
//             <h1 className="text-4xl font-bold mb-6">Rejoignez-nous</h1>
//             <p className="text-xl text-white/90 leading-relaxed">
//               Créez votre compte et accédez à une expérience professionnelle
//               exceptionnelle
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-8">
//             <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
//               <ArrowLeft className="w-5 h-5" />
//               <span className="font-medium">Retour</span>
//             </button>
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">ProApp</span>
//             </div>
//           </div>

//           {/* Titre */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">
//               Créer un compte
//             </h2>
//             <p className="text-gray-600">
//               Remplissez les informations ci-dessous pour commencer
//             </p>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Prénom */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Prénom
//               </label>
//               <div className="relative">
//                 <User
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
//                     focusedField === "firstName"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("firstName")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Votre prénom"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl ${
//                     focusedField === "firstName"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//               </div>
//               {errors.firstName && (
//                 <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
//               )}
//             </div>

//             {/* Nom */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Nom
//               </label>
//               <div className="relative">
//                 <User
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
//                     focusedField === "lastName"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("lastName")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Votre nom"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl ${
//                     focusedField === "lastName"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//               </div>
//               {errors.lastName && (
//                 <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Adresse email
//               </label>
//               <div className="relative">
//                 <Mail
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
//                     focusedField === "email"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("email")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="exemple@mail.com"
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl ${
//                     focusedField === "email"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//               )}
//             </div>

//             {/* Profession */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Profession
//               </label>
//               <div className="relative">
//                 <Briefcase
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
//                     focusedField === "profession"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type="text"
//                   name="profession"
//                   value={formData.profession}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("profession")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Ex: Développeur..."
//                   className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl ${
//                     focusedField === "profession"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//               </div>
//               {errors.profession && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.profession}
//                 </p>
//               )}
//             </div>

//             {/* Mot de passe */}
//             <div className="relative">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Mot de passe
//               </label>
//               <div className="relative">
//                 <Lock
//                   className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
//                     focusedField === "password"
//                       ? "text-blue-600"
//                       : "text-gray-400"
//                   }`}
//                 />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   onFocus={() => setFocusedField("password")}
//                   onBlur={() => setFocusedField(null)}
//                   placeholder="Mot de passe sécurisé"
//                   className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl ${
//                     focusedField === "password"
//                       ? "border-blue-600 shadow-lg shadow-blue-600/25"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-5 h-5 text-gray-400" />
//                   ) : (
//                     <Eye className="w-5 h-5 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-red-500 text-xs mt-1">{errors.password}</p>
//               )}

//               {/* Indicateur de force */}
//               {formData.password && (
//                 <div className="mt-3">
//                   <div className="flex items-center justify-between mb-2">
//                     <span className="text-xs font-medium text-gray-600">
//                       Force du mot de passe:
//                     </span>
//                     <span
//                       className={`text-xs font-bold ${
//                         passwordStrength.score === 1
//                           ? "text-yellow-600"
//                           : passwordStrength.score === 2
//                           ? "text-orange-600"
//                           : "text-green-600"
//                       }`}
//                     >
//                       {passwordStrength.label}
//                     </span>
//                   </div>
//                   <div className="flex gap-1">
//                     {[1, 2, 3].map((level) => (
//                       <div
//                         key={level}
//                         className={`h-2 flex-1 rounded-full ${
//                           level <= passwordStrength.score
//                             ? passwordStrength.color
//                             : "bg-gray-200"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
//             >
//               Créer mon compte
//             </button>
//           </form>

//           {message && <p className="text-green-600 mt-2">{message}</p>}

//           {/* Lien connexion */}
//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous avez déjà un compte ?{" "}
//               <Link
//                 to="/Login"
//                 className="text-blue-600 font-semibold hover:text-blue-700"
//               >
//                 Se connecter
//               </Link>
//             </p>
//           </div>

//           {/* Liste utilisateurs (debug) */}
//           <div className="mt-4">
//             <h3 className="font-semibold">Utilisateurs enregistrés :</h3>
//             <ul>
//               {users.map((user, index) => (
//                 <li key={index}>
//                   {user.email} - {user.firstName} {user.lastName}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  ArrowLeft,
  User,
  Mail,
  Briefcase,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
} from "lucide-react";
import { registerSchema } from "../../validation/AuthValidation";
import { z } from "zod";

function App() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [message, setMessage] = useState("");

  const loadUsers = () => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  };

  const [users, setUsers] = useState(loadUsers);

  const saveUsers = (newUsers) => {
    localStorage.setItem("users", JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  const evaluatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 2)
      return { score: 1, label: "Moyen", color: "bg-yellow-500" };
    if (score <= 4)
      return { score: 2, label: "Fort", color: "bg-orange-500" };
    return { score: 3, label: "Excellent", color: "bg-green-500" };
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      registerSchema.parse(formData);
      setErrors({});
      const existingUser = users.find((u) => u.email === formData.email);
      if (existingUser) {
        setMessage("❌ Cet email est déjà enregistré !");
        return;
      }
      const newUsers = [...users, formData];
      saveUsers(newUsers);
      setMessage("✅ Inscription réussie !");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        profession: "",
        password: "",
      });

      // Redirection vers login
      navigate("/Login");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors = {};
        err.errors.forEach((e) => {
          formattedErrors[e.path[0]] = e.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  const passwordStrength = evaluatePasswordStrength(formData.password);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Section gauche */}
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
              Créez votre compte et accédez à une expérience professionnelle exceptionnelle
            </p>
          </div>
        </div>
      </div>

      {/* Section droite */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <UserPlus className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">ProApp</span>
            </div>
          </div>

          {/* Titre */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Créer un compte</h2>
            <p className="text-gray-600">Remplissez les informations ci-dessous pour commencer</p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Prénom */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom</label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${focusedField==="firstName" ? "text-blue-600":"text-gray-400"}`} />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("firstName")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Votre prénom"
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl ${focusedField==="firstName" ? "border-blue-600 shadow-lg shadow-blue-600/25":"border-gray-200 hover:border-gray-300"}`}
                />
              </div>
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>

            {/* Nom */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${focusedField==="lastName" ? "text-blue-600":"text-gray-400"}`} />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("lastName")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Votre nom"
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl ${focusedField==="lastName" ? "border-blue-600 shadow-lg shadow-blue-600/25":"border-gray-200 hover:border-gray-300"}`}
                />
              </div>
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse email</label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${focusedField==="email" ? "text-blue-600":"text-gray-400"}`} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="exemple@mail.com"
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl ${focusedField==="email" ? "border-blue-600 shadow-lg shadow-blue-600/25":"border-gray-200 hover:border-gray-300"}`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Profession */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Profession</label>
              <div className="relative">
                <Briefcase className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${focusedField==="profession" ? "text-blue-600":"text-gray-400"}`} />
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("profession")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Ex: Infirmier, Manager..."
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl ${focusedField==="profession" ? "border-blue-600 shadow-lg shadow-blue-600/25":"border-gray-200 hover:border-gray-300"}`}
                />
              </div>
              {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession}</p>}
            </div>

            {/* Mot de passe */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mot de passe</label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${focusedField==="password" ? "text-blue-600":"text-gray-400"}`} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Mot de passe sécurisé"
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl ${focusedField==="password" ? "border-blue-600 shadow-lg shadow-blue-600/25":"border-gray-200 hover:border-gray-300"}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}

              {formData.password && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-600">Force du mot de passe:</span>
                    <span className={`text-xs font-bold ${passwordStrength.score===1 ? "text-yellow-600": passwordStrength.score===2 ? "text-orange-600":"text-green-600"}`}>
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3].map(level => (
                      <div key={level} className={`h-2 flex-1 rounded-full ${level <= passwordStrength.score ? passwordStrength.color:"bg-gray-200"}`} />
                    ))}
                  </div>
                </div>
              )}
            </div>
              <Link to="/Login" className="text-blue-600 font-semibold hover:text-blue-700">Se connecter</Link>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Créer mon compte
            </button>
                      {/* <Link
            to="/login"
            className="w-full inline-block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Créer mon compte
          </Link> */}

          </form>

          {message && <p className="text-green-600 mt-2">{message}</p>}

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Vous avez déjà un compte ?{" "}
              <Link to="/Login" className="text-blue-600 font-semibold hover:text-blue-700">Se connecter</Link>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Utilisateurs enregistrés :</h3>
            <ul>
              {users.map((user,index)=>(
                <li key={index}>{user.email} - {user.firstName} {user.lastName}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
