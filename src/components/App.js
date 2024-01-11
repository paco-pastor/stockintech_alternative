import logo from './images/logo.svg';
import './styles/App.css';

import Accueil from './Accueil';
import FormAjout from './FormAjout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Accueil/>
        <FormAjout/>
      </header>
    </div>
  );
}

export default App;
