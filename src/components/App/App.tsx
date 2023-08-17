import Header from './Header/Header';
import Ingredients from './Ingredients/Ingredients';
import Steps from './Steps/Steps';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header title="Cêpes raffinées" author="John Doe" level="facile" />
      <Ingredients />
      <Steps />
    </div>
  );
}

export default App;
