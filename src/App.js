import logo from './logo.svg';
import './App.css';
import Clock from './components/pure/clock';
import Clockhook from './hooks/clockhook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente Class */}
        {/* <Clock></Clock> */}
        {/* Compnente funcional */}
        <Clockhook></Clockhook>
      </header>
    </div>
  );
}

export default App;
