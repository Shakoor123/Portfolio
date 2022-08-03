import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className='homeContainer'>

     <Sidebar/>
    <span className='home'>
      <Welcome/>
    </span>
     </div>
    </div>
  );
}

export default App;
