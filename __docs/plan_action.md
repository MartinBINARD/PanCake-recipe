# Création une application React

## 0. Environnement de développement

- installer Vite
- installer les dépendances (React, ReactDom, ESLint + Prettier…) + configuration

> Astuce : [React-modele-vite](https://github.com/O-Clock-Yellowstone-Yost-React/React-modele-vite)
> pour avoir une configuration clé en main  
> ou on explore : <https://github.com/vitejs/awesome-vite#react>

## 1. Analyse de la maquette

- on regarde à quoi ça ressemble !
- on détermine nos composants principaux

## 2. Préparation des composants principaux

```tsx
function App() {
  return (
    <div className="App">
      <Header />
      <Ingredients />
      <Steps />
    </div>
  );
}
```

## 3. Composants « statiques »

- on crée les composants un par un…
- …et on commence par des données codées en dur (statiques)

Ils ne servent qu'à « poser un cadre » pour le moment

## 4. _Props_

Qu'est-ce qui sera transformé en _props_ ?

- une variable utilisé UNIQUEMENT dans le composant
  sera une « simple » variable locale

- une variable utilisée dans plusieurs composants,
  je vais la créer dans un ancêtre commun, puis transmise via les _props_.
- une variable définie dans un parent

**On commence par créer les _props_ en dur !**
