// import { z } from "zod";

// export const registerSchema = z.object({
//   firstName: z
//     .string()
//     .min(2, "Le prénom doit contenir au moins 2 caractères")
//     .max(50, "Le prénom ne peut pas dépasser 50 caractères"),

//   lastName: z
//     .string()
//     .min(2, "Le nom doit contenir au moins 2 caractères")
//     .max(50, "Le nom ne peut pas dépasser 50 caractères"),

//   email: z
//     .string()
//     .email("Adresse email invalide"),

//   profession: z
//     .string()
//     .min(2, "La profession est requise"),

//   password: z
//     .string()
//     .min(8, "Le mot de passe doit contenir au moins 8 caractères")
//     .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
//     .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
//     .regex(/[^A-Za-z0-9]/, "Le mot de passe doit contenir un caractère spécial"),
// });



// // validation/loginSchema.js

// export const loginSchema = z.object({
//   email: z
//     .string()
//     .email("Adresse email invalide"),
    
//   password: z
//     .string()
//     .min(8, "Le mot de passe doit contenir au moins 8 caractères")
// });


import { z } from "zod";

// =========================================================
// SCHEMA D'INSCRIPTION (Register)
// =========================================================
export const registerSchema = z.object({
  firstName: z
    .string({
      required_error: "Le prénom est obligatoire.",
    })
    .min(1, "Le prénom est obligatoire.")
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères"),

  lastName: z
    .string({
      required_error: "Le nom est obligatoire.",
    })
    .min(1, "Le nom est obligatoire.")
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),

  email: z
    .string({
      required_error: "L'adresse email est obligatoire.",
    })
    .min(1, "L'adresse email est obligatoire.")
    .email("Adresse email invalide"),

  profession: z
    .string({
      required_error: "La profession est obligatoire.",
    })
    .min(1, "La profession est obligatoire.")
    .min(2, "La profession doit contenir au moins 2 caractères"),

  password: z
    .string({
      required_error: "Le mot de passe est obligatoire.",
    })
    .min(1, "Le mot de passe est obligatoire.")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
    .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
    .regex(/[^A-Za-z0-9]/, "Le mot de passe doit contenir un caractère spécial"),
});


// =========================================================
// SCHEMA DE CONNEXION (Login)
// =========================================================
export const loginSchema = z.object({
  email: z
    .string({
      required_error: "L'adresse email est obligatoire.",
    })
    .min(1, "L'adresse email est obligatoire.")
    .email("Adresse email invalide"),
    
  password: z
    .string({
      required_error: "Le mot de passe est obligatoire.",
    })
    .min(1, "Le mot de passe est obligatoire.")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
});