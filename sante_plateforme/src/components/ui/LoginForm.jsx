
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
//                 Accédez à votre espace et vivez une expérience professionnelle unique            </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite - Formulaire */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Header avec logo et bouton retour */}
//           <div className="flex items-center justify-between mb-8">
//             {/* <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
//               <ArrowLeft className="w-5 h-5" />
//               <span className="font-medium">Retour</span>
//             </button> */}
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">FormASanté</span>
//             </div>
//           </div>

//           {/* Titre */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter au compte</h2>
//             {/* <p className="text-gray-600">Remplissez les informations ci-dessous pour commencer</p> */}
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-6">
         

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
//               Se connecter
//             </button>
//           </form>

//           {/* Liens de connexion */}
//          <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous avez déjà un compte ?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//               >
//                 S'inscrire
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
// import { loginSchema } from '../../validation/AuthValidation'; // <-- ton fichier validation
// import { z } from 'zod';

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
//       loginSchema.parse({
//         email: formData.email,
//         password: formData.password
//       });
//       console.log("Validation réussie :", formData);
//       // Ici tu peux ajouter la logique d'authentification
//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         console.error("Erreurs de validation :", err.errors);
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
//                 Accédez à votre espace et vivez une expérience professionnelle unique
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite - Formulaire */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Header avec logo et bouton retour */}
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">FormASanté</span>
//             </div>
//           </div>

//           {/* Titre */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter au compte</h2>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-6">
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
//               Se connecter
//             </button>
//           </form>

//           {/* Liens de connexion */}
//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous avez déjà un compte ?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//               >
//                 S'inscrire
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
// import { loginSchema } from '../../validation/AuthValidation';
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
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       loginSchema.parse({
//         email: formData.email,
//         password: formData.password
//       });
//       console.log("Validation réussie :", formData);
//       setErrors({});
//       // Ici la logique d'authentification
//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const fieldErrors = {};
//         err.errors.forEach((error) => {
//           fieldErrors[error.path[0]] = error.message;
//         });
//         setErrors(fieldErrors);
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
//                 Accédez à votre espace et vivez une expérience professionnelle unique
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">FormASanté</span>
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter au compte</h2>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
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
//               {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
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
//               {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}

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

//             {/* Bouton */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Se connecter
//             </button>
//           </form>

//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous avez déjà un compte ?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//               >
//                 S'inscrire
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
// import { loginSchema } from '../../validation/AuthValidation';
// import { z } from 'zod';

// function App() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   // Utilisateurs temporaires (à remplir depuis le registre ou manuellement)
//   const [users, setUsers] = useState([
//     // Exemple : { firstName, lastName, email, profession, password }
//   ]);

//   const [message, setMessage] = useState("");

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
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       loginSchema.parse(formData);
//       setErrors({});

//       // Vérifier si l'utilisateur existe
//       const user = users.find(u => u.email === formData.email && u.password === formData.password);
//       if (user) {
//         setMessage(`Connexion réussie ! Bienvenue ${user.firstName}`);
//       } else {
//         setMessage("Email ou mot de passe incorrect");
//       }

//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const fieldErrors = {};
//         err.errors.forEach((error) => {
//           fieldErrors[error.path[0]] = error.message;
//         });
//         setErrors(fieldErrors);
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
//                 Accédez à votre espace et vivez une expérience professionnelle unique
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">FormASanté</span>
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter au compte</h2>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
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
//               {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
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
//                   placeholder="Votre mot de passe"
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
//               {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Se connecter
//             </button>
//           </form>

//           {message && <p className="text-green-600 mt-2">{message}</p>}

//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous n'avez pas de compte ?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//               >
//                 S'inscrire
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
// import { loginSchema } from '../../validation/AuthValidation';
// import { z } from 'zod';

// function App() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   // ⚡ Correction : on charge les utilisateurs depuis localStorage
//   const [users] = useState(() => {
//     const stored = localStorage.getItem("users");
//     return stored ? JSON.parse(stored) : [];
//   });

//   const [message, setMessage] = useState("");

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
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       loginSchema.parse(formData);
//       setErrors({});

//       // ⚡ Vérifier si l'utilisateur existe dans localStorage
//       const user = users.find(
//         u => u.email === formData.email && u.password === formData.password
//       );

//       if (user) {
//         setMessage(`Connexion réussie ! Bienvenue ${user.firstName}`);
//       } else {
//         setMessage("Email ou mot de passe incorrect");
//       }

//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const fieldErrors = {};
//         err.errors.forEach((error) => {
//           fieldErrors[error.path[0]] = error.message;
//         });
//         setErrors(fieldErrors);
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
//                 Accédez à votre espace et vivez une expérience professionnelle unique
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">FormASanté</span>
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter au compte</h2>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
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
//               {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
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
//                   placeholder="Votre mot de passe"
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
//               {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Se connecter
//             </button>
//           </form>

//           {message && <p className="text-green-600 mt-2">{message}</p>}

//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous n'avez pas de compte ?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//               >
//                 S'inscrire
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { Link, useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import { ArrowLeft, User, Mail, Briefcase, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';
// import { loginSchema } from '../../validation/AuthValidation';
// import { z } from 'zod';

// function App() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   const navigate = useNavigate(); // <-- ajout pour redirection

//   // Utilisateurs temporaires
//   const [users, setUsers] = useState([
//     // Exemple : { firstName, lastName, email, profession, password }
//   ]);

//   const [message, setMessage] = useState("");

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
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       loginSchema.parse(formData);
//       setErrors({});

//       const user = users.find(u => u.email === formData.email && u.password === formData.password);
//       if (user) {
//         setMessage(`Connexion réussie ! Bienvenue ${user.firstName}`);
        
//         // Redirection vers la page home après connexion
//         navigate("/");
//       } else {
//         setMessage("Email ou mot de passe incorrect");
//       }

//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const fieldErrors = {};
//         err.errors.forEach((error) => {
//           fieldErrors[error.path[0]] = error.message;
//         });
//         setErrors(fieldErrors);
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
//                 Accédez à votre espace et vivez une expérience professionnelle unique
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">FormASanté</span>
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter au compte</h2>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
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
//               {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
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
//                   placeholder="Votre mot de passe"
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
//               {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
//             </div>

//             {/* <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Se connecter
//             </button> */}

//                       <Link
//             to="/login"
//             className="w-full inline-block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//           >
//             Se connecter
//           </Link>

//           </form>

//           {message && <p className="text-green-600 mt-2">{message}</p>}

//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous n'avez pas de compte ?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//               >
//                 S'inscrire
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { Link, useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import { ArrowLeft, User, Mail, Briefcase, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';
// import { loginSchema } from '../../validation/AuthValidation';
// import { z } from 'zod';

// function App() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   const navigate = useNavigate(); // pour redirection

//   // Utilisateurs temporaires
//   const [users, setUsers] = useState([
//     // Exemple : { firstName, lastName, email, profession, password }
//   ]);

//   const [message, setMessage] = useState("");

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
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       loginSchema.parse(formData);
//       setErrors({});

//       const user = users.find(u => u.email === formData.email && u.password === formData.password);
//       if (user) {
//         setMessage(`Connexion réussie ! Bienvenue ${user.firstName}`);
//         navigate("/home"); // redirection après connexion
//       } else {
//         setMessage("Email ou mot de passe incorrect");
//       }

//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const fieldErrors = {};
//         err.errors.forEach(error => {
//           fieldErrors[error.path[0]] = error.message;
//         });
//         setErrors(fieldErrors);
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
//               Accédez à votre espace et vivez une expérience professionnelle unique
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <UserPlus className="w-6 h-6 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-800">FormASanté</span>
//             </div>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter au compte</h2>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
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
//               {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
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
//                   placeholder="Votre mot de passe"
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
//               {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
//             </div>

//             {/* Bouton submit */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Se connecter
//             </button>

//             {/* <Link
//               to="/"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25 ml-30"
//             >
//               Se connecter
//             </Link> */}
//           </form>

//           {message && <p className="text-green-600 mt-2">{message}</p>}

//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous n'avez pas de compte ?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//               >
//                 S'inscrire
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { Link, useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import { ArrowLeft, User, Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react'; // J'ai remplacé UserPlus par LogIn
// import { loginSchema } from '../../validation/AuthValidation';
// import { z } from 'zod';

// function Login() { // J'ai renommé la fonction 'App' en 'Login' pour plus de clarté
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const [message, setMessage] = useState(""); // Message pour succès/échec de connexion

//   const navigate = useNavigate();

//   // 💡 CHARGEMENT DES UTILISATEURS (pour la vérification locale)
//   const loadUsers = () => {
//     const stored = localStorage.getItem("users");
//     return stored ? JSON.parse(stored) : [];
//   };
//   const [users, setUsers] = useState(loadUsers);

//   // 💡 NOTE: La fonction evaluatePasswordStrength n'est pas nécessaire
//   // dans le formulaire de CONNEXION, mais je l'ai laissée si vous la réutilisez ailleurs.

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setErrors({ ...errors, [e.target.name]: "" });
//     setMessage(""); // Efface le message de succès/échec dès que l'utilisateur commence à taper
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       // 1. Validation Zod (vérifie les champs vides, format, etc.)
//       loginSchema.parse(formData);
//       setErrors({});

//       // 2. Vérification de l'utilisateur
//       const user = users.find(u => u.email === formData.email && u.password === formData.password);
      
//       if (user) {
//         setMessage(`✅ Connexion réussie ! Bienvenue ${user.firstName}`);
//         // 💡 Dans une application réelle, vous stockeriez le token/session ici
//         setTimeout(() => {
//           navigate("/home"); // Redirection après un court délai
//         }, 1000);
//       } else {
//         setMessage("❌ Email ou mot de passe incorrect."); // Message en cas d'échec d'authentification
//       }

//     } catch (err) {
//       if (err instanceof z.ZodError) {
//         const fieldErrors = {};
//         err.errors.forEach(error => {
//           fieldErrors[error.path[0]] = error.message;
//         });
//         setErrors(fieldErrors);
//         setMessage(""); // 💡 IMPORTANT : Efface tout message de succès/échec de connexion
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Section gauche (Image/Bannière) */}
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
//                 <LogIn className="w-12 h-12 text-white" /> {/* Icône mise à jour */}
//               </div>
//             </div>
//             <h1 className="text-4xl font-bold mb-6">Accès Professionnel</h1>
//             <p className="text-xl text-white/90 leading-relaxed">
//               Accédez à votre espace et vivez une expérience professionnelle unique
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Section droite (Formulaire) */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
//         <div className="w-full max-w-md">
//           {/* Header du formulaire */}
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-2">
//               <div className="bg-blue-600 p-2 rounded-lg">
//                 <LogIn className="w-6 h-6 text-white" /> {/* Icône mise à jour */}
//               </div>
//               <span className="text-xl font-bold text-gray-800">FormASanté</span>
//             </div>
//           </div>

//           {/* Titre */}
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter au compte</h2>
//           </div>

//           {/* Formulaire */}
//           <form onSubmit={handleSubmit} className="space-y-6">
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
//               {/* Affichage de l'erreur pour le champ vide ou invalide */}
//               {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
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
//                   placeholder="Votre mot de passe"
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
//               {/* Affichage de l'erreur pour le champ vide ou invalide */}
//               {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
//             </div>

//             {/* Bouton submit */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/25"
//             >
//               Se connecter
//             </button>
//           </form>

//           {/* Affichage du message de connexion/échec */}
//           {message && (
//             <p className={`mt-4 font-medium ${message.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
//               {message}
//             </p>
//           )}

//           <div className="mt-8 text-center">
//             <p className="text-gray-600">
//               Vous n'avez pas de compte ?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
//               >
//                 S'inscrire
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { loginSchema } from "../../validation/AuthValidation";
import { z } from "zod";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Charger les utilisateurs depuis le localStorage
  const loadUsers = () => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  };

  const [users] = useState(loadUsers);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Validation avec Zod
      loginSchema.parse(formData);
      setErrors({});

      // Vérification des identifiants
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        setMessage(`✅ Connexion réussie ! Bienvenue ${user.firstName}`);
        // Redirection vers /home après succès
        setTimeout(() => navigate("/home"), 1000);
      } else {
        setMessage("❌ Email ou mot de passe incorrect.");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.errors.forEach((error) => {
          fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors);
        setMessage("");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Section gauche */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-white text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <LogIn className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">Accès Professionnel</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Connectez-vous et profitez d'une expérience unique
            </p>
          </div>
        </div>
      </div>

      {/* Section droite */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* En-tête */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <LogIn className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">FormASanté</span>
            </div>
          </div>

          {/* Titre */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Se connecter
            </h2>
            <p className="text-gray-600">
              Entrez vos identifiants pour accéder à votre espace
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    focusedField === "email" ? "text-blue-600" : "text-gray-400"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="votre.email@exemple.com"
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none ${
                    focusedField === "email"
                      ? "border-blue-600 shadow-lg shadow-blue-600/25"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mot de passe */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    focusedField === "password" ? "text-blue-600" : "text-gray-400"
                  }`}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Votre mot de passe"
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl focus:outline-none ${
                    focusedField === "password"
                      ? "border-blue-600 shadow-lg shadow-blue-600/25"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Se connecter
            </button>
          </form>

          {/* Message */}
          {message && (
            <p
              className={`mt-4 font-medium ${
                message.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Vous n'avez pas de compte ?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                S'inscrire
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
