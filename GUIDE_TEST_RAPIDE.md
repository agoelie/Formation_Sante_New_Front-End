# 🧪 GUIDE DE TEST RAPIDE - FORMULAIRE D'INSCRIPTION

**Date:** 11 octobre 2025  
**Temps estimé:** 5 minutes

---

## 🚀 DÉMARRAGE RAPIDE

### 1. Lancer l'application

```bash
cd /home/elikane/SantePlateforme_Front-end/Formation_Sante_New_Front-End/sante_plateforme
npm run dev
```

### 2. Ouvrir dans le navigateur

```
http://localhost:5173/Register
```

---

## ✅ TESTS À EFFECTUER

### TEST 1 : Formulaire vide ❌

**Action :** 
- Cliquer directement sur "S'inscrire" sans rien remplir

**Résultat attendu :**
- ✅ Message rouge en haut : "❌ 5 erreurs trouvées. Veuillez corriger les champs en rouge."
- ✅ TOUS les champs ont une bordure rouge
- ✅ Chaque champ affiche son message d'erreur :
  - ⚠️ Le prénom est obligatoire.
  - ⚠️ Le nom est obligatoire.
  - ⚠️ L'adresse email est obligatoire.
  - ⚠️ La profession est obligatoire.
  - ⚠️ Le mot de passe est obligatoire.

---

### TEST 2 : Prénom trop court ❌

**Action :**
1. Taper "A" dans le champ Prénom
2. Cliquer sur "S'inscrire"

**Résultat attendu :**
- ✅ Champ Prénom en rouge
- ✅ Message : "⚠️ Le prénom doit contenir au moins 2 caractères"
- ✅ Les autres champs restent en rouge avec leurs erreurs

---

### TEST 3 : Email invalide ❌

**Action :**
1. Remplir Prénom : "Jean"
2. Remplir Nom : "Dupont"
3. Taper "test" dans Email (sans @)
4. Remplir Profession : "Médecin"
5. Remplir Mot de passe : "Test123!"
6. Cliquer sur "S'inscrire"

**Résultat attendu :**
- ✅ Seul le champ Email est en rouge
- ✅ Message : "⚠️ Adresse email invalide"
- ✅ Les autres champs sont OK

---

### TEST 4 : Mot de passe faible ❌

**Action :**
1. Remplir tous les champs correctement
2. Mot de passe : "test123" (sans majuscule ni caractère spécial)
3. Cliquer sur "S'inscrire"

**Résultat attendu :**
- ✅ Champ Password en rouge
- ✅ Message : "⚠️ Le mot de passe doit contenir au moins une majuscule"
- OU "⚠️ Le mot de passe doit contenir un caractère spécial"

---

### TEST 5 : Formulaire valide ✅

**Action :**
1. Remplir tous les champs correctement :
   - Prénom : "Jean"
   - Nom : "Dupont"
   - Email : "jean.dupont@example.com"
   - Profession : "Médecin"
   - Mot de passe : "Secure123!" (min 8 caractères, 1 majuscule, 1 chiffre, 1 spécial)
2. Cliquer sur "S'inscrire"

**Résultat attendu :**
- ✅ Message vert : "✅ Inscription réussie ! Redirection en cours..."
- ✅ Redirection automatique vers /Login après 1,5 secondes
- ✅ Les données sont sauvegardées dans localStorage

---

### TEST 6 : Email déjà utilisé ❌

**Action :**
1. Remplir le formulaire avec le même email que TEST 5
2. Cliquer sur "S'inscrire"

**Résultat attendu :**
- ✅ Message rouge : "❌ Cet email est déjà enregistré !"
- ✅ Le formulaire ne se soumet pas

---

### TEST 7 : Correction en temps réel ✅

**Action :**
1. Cliquer sur "S'inscrire" sans remplir (pour générer les erreurs)
2. Commencer à taper dans le champ Prénom

**Résultat attendu :**
- ✅ L'erreur du champ Prénom disparaît immédiatement
- ✅ La bordure rouge devient bleue (focus)
- ✅ Les autres champs gardent leurs erreurs

---

### TEST 8 : Indicateur de force du mot de passe 🔐

**Action :**
1. Cliquer dans le champ Mot de passe
2. Taper progressivement :
   - "test" → Force : Moyen (jaune)
   - "Test123" → Force : Fort (orange)
   - "Test123!@#" → Force : Excellent (vert)

**Résultat attendu :**
- ✅ Barre de progression sous le champ
- ✅ 3 segments qui se remplissent
- ✅ Couleur change : Jaune → Orange → Vert
- ✅ Label : Moyen → Fort → Excellent

---

### TEST 9 : Affichage/Masquage du mot de passe 👁️

**Action :**
1. Taper un mot de passe
2. Cliquer sur l'icône œil à droite

**Résultat attendu :**
- ✅ Le mot de passe devient visible
- ✅ L'icône change (œil barré ↔ œil)
- ✅ Re-cliquer masque le mot de passe

---

### TEST 10 : Responsive (Mobile) 📱

**Action :**
1. Ouvrir les DevTools (F12)
2. Passer en mode mobile (Ctrl+Shift+M)
3. Tester le formulaire

**Résultat attendu :**
- ✅ Le formulaire s'adapte à la largeur
- ✅ L'image de gauche disparaît sur mobile
- ✅ Le formulaire prend toute la largeur
- ✅ Tous les champs restent utilisables

---

## 📊 CHECKLIST COMPLÈTE

### Fonctionnalités de base
- [ ] Les 5 champs s'affichent correctement
- [ ] Les labels ont un astérisque rouge (*)
- [ ] Les icônes sont présentes (utilisateur, mail, briefcase, lock)
- [ ] Le bouton "S'inscrire" est visible

### Validation Zod
- [ ] Erreur si champ vide
- [ ] Erreur si prénom/nom < 2 caractères
- [ ] Erreur si email invalide
- [ ] Erreur si profession < 2 caractères
- [ ] Erreur si mot de passe < 8 caractères
- [ ] Erreur si pas de majuscule dans le mot de passe
- [ ] Erreur si pas de chiffre dans le mot de passe
- [ ] Erreur si pas de caractère spécial dans le mot de passe

### Affichage des erreurs
- [ ] Message global en haut (encadré rouge)
- [ ] Nombre d'erreurs affiché : "X erreurs trouvées"
- [ ] Champs en erreur : bordure rouge + fond rose
- [ ] Icônes des champs en erreur : rouges
- [ ] Messages d'erreur sous chaque champ : emoji ⚠️
- [ ] Scroll automatique vers le haut après soumission

### Comportement dynamique
- [ ] Erreur disparaît quand on tape dans le champ
- [ ] Focus : bordure bleue + ombre
- [ ] Hover : bordure grise claire
- [ ] Bouton submit : animation au hover

### Mot de passe
- [ ] Bouton afficher/masquer fonctionne
- [ ] Indicateur de force s'affiche
- [ ] 3 niveaux : Moyen, Fort, Excellent
- [ ] Couleurs : Jaune, Orange, Vert

### Succès
- [ ] Message vert après inscription réussie
- [ ] Redirection vers /Login après 1,5s
- [ ] Formulaire se réinitialise
- [ ] Données sauvegardées dans localStorage

### Duplicate
- [ ] Email déjà utilisé → message d'erreur
- [ ] Pas de doublon dans localStorage

---

## 🐛 BUGS POTENTIELS À VÉRIFIER

### ❌ Si ça ne marche pas :

1. **Les erreurs ne s'affichent pas**
   - Vérifier que Zod est installé : `npm list zod`
   - Vérifier que AuthValidation.jsx contient bien les schémas

2. **Pas de bordures rouges**
   - Vérifier que Tailwind CSS est chargé (CDN dans index.html)
   - Ouvrir les DevTools → Console → pas d'erreurs CSS

3. **Le formulaire ne se soumet pas**
   - Ouvrir Console → voir les erreurs JavaScript
   - Vérifier que handleSubmit est bien appelé

4. **Redirection ne fonctionne pas**
   - Vérifier que react-router-dom est installé
   - Vérifier que la route /Login existe dans App.jsx

---

## 💡 ASTUCES DE DÉBOGAGE

### Console Chrome (F12) :

```javascript
// Voir les utilisateurs enregistrés
localStorage.getItem('users')

// Vider les utilisateurs
localStorage.removeItem('users')

// Voir tous les données localStorage
console.log(localStorage)
```

---

## ✅ RÉSULTAT ATTENDU FINAL

Après tous les tests, vous devriez avoir :

✅ Un formulaire qui valide correctement tous les champs  
✅ Des messages d'erreur clairs et visibles  
✅ Une expérience utilisateur fluide et professionnelle  
✅ Un système de sauvegarde fonctionnel  
✅ Une redirection automatique après inscription  

---

## 📞 SUPPORT

Si un test échoue, vérifier :
1. Le fichier `/CORRECTIONS_FORMULAIRE_REGISTER.md` pour les détails
2. La console navigateur (F12) pour les erreurs JavaScript
3. Que toutes les dépendances sont installées : `npm install`

---

**🎉 Bon test !**

**Serveur démarré :** ✅  
**URL:** http://localhost:5173/Register  
**Prêt à tester !** 🚀

