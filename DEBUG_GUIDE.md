# 🐛 GUIDE DE DÉBOGAGE - Formulaire Register

**Problème :** Les erreurs ne s'affichent pas sous les champs  
**Date :** 11 octobre 2025

---

## 🚀 ÉTAPES DE DÉBOGAGE (Dans l'ordre)

### Étape 1 : Test de Zod isolé (2 min)

**Ouvrez cette page de test :**
```
http://localhost:5174/debug-zod.html
```

**Actions :**
1. Cliquez sur "▶️ Lancer tous les tests"
2. Vérifiez que les 4 tests passent au vert ✅

**Résultat attendu :**
- ✅ Test 1: Formulaire vide → 5 erreurs détectées
- ✅ Test 2: Prénom court → 1 erreur détectée
- ✅ Test 3: Email invalide → 1 erreur détectée
- ✅ Test 4: Formulaire valide → Accepté

**Si un test échoue :**
→ Problème avec Zod ou le schéma de validation  
→ Vérifier `src/validation/AuthValidation.jsx`

---

### Étape 2 : Test du formulaire avec la console (3 min)

**1. Ouvrez le formulaire :**
```
http://localhost:5174/Register
```

**2. Ouvrez la Console Chrome :**
- Appuyez sur **F12**
- Allez sur l'onglet **"Console"**
- ⚠️ **NE FERMEZ PAS** cette console !

**3. Testez le formulaire vide :**
- Sans remplir aucun champ
- Cliquez sur **"S'inscrire"**

**4. Regardez dans la Console :**

Vous devez voir ces messages :
```javascript
📝 Données du formulaire: {
  firstName: "",
  lastName: "",
  email: "",
  profession: "",
  password: ""
}

❌ Erreurs de validation Zod: Array(5)
   - firstName: Le prénom est obligatoire.
   - lastName: Le nom est obligatoire.
   - email: L'adresse email est obligatoire.
   - profession: La profession est obligatoire.
   - password: Le mot de passe est obligatoire.

🔴 État errors après setErrors: {
  firstName: "Le prénom est obligatoire.",
  lastName: "Le nom est obligatoire.",
  ...
}
```

---

### Étape 3 : Vérifier l'affichage visuel

**Si vous voyez les logs dans la console MAIS PAS sur la page :**

**Vérifiez visuellement :**

1. **Message global en haut** (encadré rouge) :
   ```
   ❌ 5 erreurs trouvées. Veuillez corriger les champs en rouge.
   ```

2. **Bordures rouges** sur TOUS les champs

3. **Messages sous chaque champ** :
   ```
   ⚠️ Le prénom est obligatoire.
   ⚠️ Le nom est obligatoire.
   ⚠️ L'adresse email est obligatoire.
   ⚠️ La profession est obligatoire.
   ⚠️ Le mot de passe est obligatoire.
   ```

---

## 🔍 DIAGNOSTIC PAR SYMPTÔME

### Symptôme 1 : Rien dans la console
```
❌ Problème : Le formulaire ne soumet pas
```

**Solutions :**
1. Vérifier que vous êtes sur http://localhost:5174/Register (pas 5173)
2. Vider le cache : Ctrl + Shift + R
3. Vérifier qu'il n'y a pas d'erreur JavaScript en rouge dans la console

---

### Symptôme 2 : Console OK mais rien à l'écran
```
✅ Console : Erreurs détectées
❌ Écran : Rien ne s'affiche
```

**Diagnostic :**
Le state `errors` est mis à jour MAIS ne se rend pas à l'écran.

**Solutions :**
1. Vérifier Tailwind CSS (ouvrir l'inspecteur sur un champ)
2. Regarder si les classes CSS sont appliquées
3. Essayer de forcer le re-render

**Commandes console pour déboguer :**
```javascript
// Dans la console Chrome, après avoir cliqué sur S'inscrire
console.log(document.querySelector('[name="firstName"]').className);
// Doit contenir "border-red-500 bg-red-50"
```

---

### Symptôme 3 : Erreurs affichées puis disparaissent
```
✅ Erreurs apparaissent 1 seconde
❌ Puis disparaissent immédiatement
```

**Problème :** Le formulaire se soumet quand même (rechargement page)

**Solution :**
Vérifier que `e.preventDefault()` est bien appelé (c'est déjà dans le code)

---

### Symptôme 4 : Certains champs seulement
```
✅ Prénom : Erreur visible
❌ Email : Pas d'erreur
```

**Problème :** Un champ spécifique n'affiche pas son erreur

**Solutions :**
1. Inspecter le HTML du champ Email
2. Vérifier qu'il y a bien le code :
```jsx
{errors.email && (
  <p className="text-red-600 text-sm mt-1 font-medium">
    ⚠️ {errors.email}
  </p>
)}
```

---

## 🛠️ ACTIONS CORRECTIVES

### Action 1 : Vider complètement le cache

**Chrome :**
1. F12 (DevTools)
2. Clic droit sur le bouton recharger
3. "Vider le cache et effectuer une actualisation forcée"

**Ou manuellement :**
```
Ctrl + Shift + Delete
→ Cocher "Images et fichiers en cache"
→ Supprimer
```

---

### Action 2 : Vérifier localStorage

**Dans la console :**
```javascript
// Voir les utilisateurs
localStorage.getItem('users')

// Effacer tout
localStorage.clear()

// Recharger la page
location.reload()
```

---

### Action 3 : Redémarrer le serveur

**Terminal :**
```bash
# Arrêter le serveur
Ctrl + C

# Relancer
cd sante_plateforme
npm run dev
```

---

### Action 4 : Tester avec un navigateur différent

Si ça ne marche toujours pas :
- Essayer avec **Firefox** ou **Edge**
- Si ça marche sur un autre navigateur → Problème de cache Chrome

---

## 📸 CAPTURE D'ÉCRAN ATTENDUE

### Vue normale (avant clic sur S'inscrire)
```
Prénom *
┌──────────────────────────┐
│  👤  Votre prénom        │  Bordure grise
└──────────────────────────┘
```

### Vue avec erreur (après clic sur S'inscrire)
```
Prénom *
╔══════════════════════════╗
║  🚨  Votre prénom        ║  Bordure ROUGE + Fond rose
╚══════════════════════════╝
⚠️ Le prénom est obligatoire.  ← Message rouge en gras
```

---

## 🎯 CHECKLIST DE VÉRIFICATION

Cochez ce que vous voyez :

**Dans la Console (F12) :**
- [ ] `📝 Données du formulaire:` s'affiche
- [ ] `❌ Erreurs de validation Zod:` s'affiche
- [ ] Liste des 5 erreurs s'affiche
- [ ] `🔴 État errors après setErrors:` s'affiche

**Sur la page web :**
- [ ] Message rouge en haut : "❌ 5 erreurs trouvées"
- [ ] Champ Prénom : bordure rouge + fond rose
- [ ] Champ Prénom : message "⚠️ Le prénom est obligatoire."
- [ ] Champ Nom : bordure rouge + message
- [ ] Champ Email : bordure rouge + message
- [ ] Champ Profession : bordure rouge + message
- [ ] Champ Password : bordure rouge + message

---

## 📞 SI ÇA NE MARCHE TOUJOURS PAS

### Informations à partager :

1. **Capture d'écran de la console** (F12)
2. **Capture d'écran de la page** (formulaire Register)
3. **Résultat du test Zod** (http://localhost:5174/debug-zod.html)
4. **Navigateur utilisé** (Chrome, Firefox, Edge)
5. **Messages dans la console** (copier-coller)

### Tests supplémentaires :

**Test 1 : Inspecter un champ**
```
1. Cliquer droit sur le champ Prénom
2. "Inspecter"
3. Regarder les classes CSS
4. Chercher "border-red-500" ou "bg-red-50"
```

**Test 2 : Forcer l'affichage d'une erreur**
```javascript
// Dans la console, après ouverture de /Register
// Taper ces commandes une par une :

// 1. Trouver le composant React (peut ne pas marcher)
document.querySelector('[name="firstName"]').value = ""

// 2. Regarder si le state errors contient quelque chose
// (Nécessite React DevTools)
```

---

## 💡 SOLUTION RAPIDE SI PRESSÉ

**Si vous voulez juste vérifier que la validation fonctionne :**

1. Allez sur http://localhost:5174/debug-zod.html
2. Lancez tous les tests
3. Si tout est vert ✅ → Zod fonctionne !

**Le problème est donc dans l'affichage React, pas dans la validation.**

---

## 🎓 COMPRENDRE LE FLUX

```
User clique "S'inscrire"
    ↓
handleSubmit() appelé
    ↓
registerSchema.parse(formData)  ← Validation Zod
    ↓
┌─────────────┬──────────────────┐
│  Si VALIDE  │  Si INVALIDE     │
├─────────────┼──────────────────┤
│ ✅ Succès   │ ❌ Catch erreur  │
│ Sauvegarde  │ setErrors({...}) │
│ Redirect    │ setMessage(...)  │
└─────────────┴──────────────────┘
    ↓
React re-render
    ↓
{errors.firstName && <p>...</p>}  ← Affichage conditionnel
    ↓
Message s'affiche sous le champ
```

---

**🚀 Commencez par l'Étape 1 et suivez dans l'ordre !**

**Serveur :** http://localhost:5174/  
**Page de test Zod :** http://localhost:5174/debug-zod.html  
**Formulaire :** http://localhost:5174/Register

