import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Quest from './components/Quests';

function App() {
  return (
    <div>

      <Header />

      <div className="container">
        <Quest />
      </div>

      <Footer />
      
    </div>
  );
}

export default App;
