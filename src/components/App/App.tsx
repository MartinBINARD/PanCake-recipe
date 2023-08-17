import Header from './Header/Header';
import Ingredients from './Ingredients/Ingredients';
import Steps from './Steps/Steps';

import recipes from '../../data/recipe';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header
        thumbnail={recipes.thumbnail}
        title={recipes.title}
        author={recipes.author}
        difficulty={recipes.difficulty}
      />
      <Ingredients ingredients={recipes.ingredients} />
      <Steps />
    </div>
  );
}

export default App;
