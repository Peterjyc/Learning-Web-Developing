import './App.css';
import Navbar from './Navbar.js';
import Main from './Main.js'
import Menu from './Menu.js'
import Flavour from './Flavour.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Menu />
      <Flavour />
      <Footer />
    </div>
  );
}

export default App;
