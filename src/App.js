import logo from './logo.svg';
import './App.css';
 import ColorChanges from './pages/ColorChanges.js';
 //testing Page we added the all data into index.js 
 //now moved with navigation to 
 import ReactTesting from './pages/reactTest';

 // router Data


import AboutUs from './pages/about';
import ContactUs from './pages/contact';
import GalleryPage from './pages/gallery';
import HomePage from './pages/home';
import NoPage from './pages/npage';

//Counter Test
import CounterTest from './pages/CounterTest';
//Hooks test with Objects 
import HooksTest from './pages/HooksTest';

 import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //  <h4 className="text-center">Hello Clubs</h4>
     
    // </div>
    <Router>
       <Link to={"/"} className="navbar-brand text-white linkmarging">
         Main App
        </Link>
       
        <Link to={"colorchnages"} className="navbar text-white linkmarging">
    Color Changes
        </Link>


        <Link to={"testing"} className='navbar linkmarging'>Testing React</Link>
        <Link to={'counterTest'} className='linkmarging'>Counter Test</Link>
        <Link to={'hookstest'} className='linkmarging'>Hooks Test</Link>
        <Routes>
        <Route  path='/' element={<HomePage/>}/>
      <Route  path='about' element={<AboutUs/>}/>
      <Route   path='gallery' Component={GalleryPage}/>
      <Route  path='contact' element={<ContactUs/>}/>
      <Route  path='colorchnages' element={<ColorChanges/>}/>
      <Route  path='*' element={<NoPage/>}/>
      <Route path='testing' element={<ReactTesting/>}/>
      <Route path='counterTest' element={<CounterTest/>}/>
      <Route path='hookstest' element={<HooksTest/>}/>
        </Routes>
        
    </Router>
    
  );
}

export default App;
