import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';
import Skills from './components/Skills/Skills';
import Welcome from './components/Welcome/Welcome';
import {AuthContext} from '../src/Context/Context';
import './DarkMode.scss'
import './Responsive.scss'

import Footer from './components/Footer/Footer';
function App() {
  const {dark}=useContext(AuthContext)
  return (
    <div className={dark ? "App dark":"App"}>
     <Navbar/>
     <div className='homeContainer'>

     <Sidebar/>
    <div className='home'>
      <Welcome/>
      <Projects/> 
      <Skills/>
      <Footer/>
    </div>
     </div>
    </div>
  );
}

export default App;
