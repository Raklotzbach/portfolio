// import logo from './logo.svg';
import './App.css';
import Bio from './Components/Bio';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Home from './Components/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Bio />
      <Projects />
      <Footer />          
    </div>
  );
}

export default App;
