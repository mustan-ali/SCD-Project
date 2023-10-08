import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Quest from './components/Quests';
import Home from './components/Home';
import Card from './components/Card';
import Contact from './components/Contact';

function App() {
  return (
    <div>

      <div className="app-container">
        <Header />

        {/* <Home /> */}
        <Quest />
        {/* <Contact /> */}
        <Footer />
      </div>

    </div>
  );
}

export default App;
