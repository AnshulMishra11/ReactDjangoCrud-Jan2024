// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Create from './components/Create';
import About from './components/About';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import Delete from './components/Delete';


function App() {
  const width = 220;
  return (
    
    <div className="App">
      {/* <Navbar drawerWidth={220}/> */}
      <Navbar 
        drawerWidth={width}
        content = {
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit/:id/' element={<Edit/>}/>
            <Route path='/delete/:id/' element={<Delete/>}/>
          </Routes>
        } 
      />
      
    </div>
  );
}

export default App;
