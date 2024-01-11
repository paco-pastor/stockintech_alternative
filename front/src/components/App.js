import './styles/App.css';

import Accueil from './Accueil';
import APropos from './APropos';
import ListDeparts from './ListDeparts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accueil/>
        <APropos/>
        <ListDeparts/>
      </header>
    </div>
  );
}

export default App;
