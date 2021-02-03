import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/';
import cartWidget from './components/cartWidget'

function App() {
  return (
    <div className="App">
      <Navbar><cartWidget/></Navbar>
      <header>
        <h1>Tierra Santa Shop</h1>
      </header>
    </div>

  );
}

export default App;
