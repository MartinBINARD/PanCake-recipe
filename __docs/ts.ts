/*
  INFÉRENCE
*/
// inférence : TS assigne lui-même un type
let title = 'Mon super titre';
// si on change de type, TS nous prévient avec une erreur
title = 42;
title = false;

let author; // par défaut, type = `any` → il peut prendre n'importe quel type
author = 'toto';
author = 42;
author = false;
author = () => {};

/*
  FORÇAGE

  myVar: type;
  myVar: string = 'ma chaîne de caractères';
*/
let auteur: string;
auteur = 'toto';
auteur = 42;
auteur = false;
auteur = () => {};

let ingredients: [];

/*
  UNION

  on prévient que le type sera tel ou tel ;
  exemple : ̂la variable peut être un tableau ou nulle
*/
let waterGlassRecipeSteps: string[] | null;
waterGlassRecipeSteps = null;
waterGlassRecipeSteps = [];
waterGlassRecipeSteps = 'va au robinet';

// `[]` on autorise SEULEMENT les tableaux vides
// pour dire que je peux avoir un tableau de string,
// j'utilise `string[]`
waterGlassRecipeSteps = ['prend un verre', "et de l'eau", 42, true];

/*
  FONCTION
*/
function sum(a: number, b: number) {
  return a + b;
}

sum('Hello ', 'World');

/*
  OBJET
*/
const user: {
  firstName: string;
  lastName: string;
  age: number;
  admin: boolean;
} = {
  firstName: 'Dave',
  lastName: 'Lopper',
  age: 42,
  admin: false,
};

// pour les objets, on passe généralement par des INTERFACES
interface Address {
  street: string;
  number: number;
  zipCode: string;
  locality: string;
}

interface User {
  firstName: string;
  lastName: string;
  age: number;
  admin: boolean;
  address: Address;
}

const toto: User = {
  firstName: 'Dave',
  lastName: 'Lopper',
  age: 42,
  admin: false,
  address: {
    street: 'Main street',
    number: 16,
    zipCode: '42000',
    locality: 'Saint-Étienne',
  },
};

interface House {
  year: number;
  owner: User;
  address: Address;
}

const myHome: House = {
  year: 2023,
  owner: toto,
  address: {
    street: 'Main street',
    number: 16,
    zipCode: '42000',
    locality: 'Saint-Étienne',
  },
};
