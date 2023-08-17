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
