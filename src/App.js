import './App.css';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className='homeContainer'>

     <Sidebar/>
    <div className='home'>
      <Welcome/>
      <Projects/> 
      <Skills/>
    </div>
     </div>
    </div>
  );
}

export default App;
