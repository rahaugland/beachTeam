
import './App.css';
import volleyball from "./volleyball.svg";
import Navbar from './components/Header.tsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={volleyball} className="App-logo" alt="logo" />
        <p>
          WIP: Homepage for NTNUI elite beach 
        </p>
      </header>
    </div>
  );
}

export default App;
