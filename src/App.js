import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Project from './components/Project'

function App() {
  return (
    <div className="App">
      <Header/>
      <Resume/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
