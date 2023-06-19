import './App.css';
import Navbar from './Navbar.js';
import Main from './Main.js'
import Menu from './Menu.js'
import Flavours from './Flavour.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Menu />
      <Flavours />
      <Footer />
    </div>
  );
}

export default App;
