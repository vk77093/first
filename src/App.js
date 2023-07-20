import logo from './logo.svg';
import './App.css';
import './CSS/nav.css';
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
import HooksTest from './pages/hooks/HooksTest';
import HooksTest1 from './pages/hooks/hooksTest1';

//useEffect Hooks
import UseEffect1 from './pages/hooks/UseEffectHooks/UseEffect1';
import UseEffect2 from './pages/hooks/UseEffectHooks/UseEffect2';
import UseEffect3 from './pages/hooks/UseEffectHooks/UseEffect3';

//useRef Hooks
import TrackCount1 from './pages/hooks/UseRefHooks/TrackCount1';
import FocusChange from './pages/hooks/UseRefHooks/FocusChange';
 import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import WithoutCustHooks from './pages/hooks/CustomHooks/WithoutCustHooks';
import WithCustHooks from './pages/hooks/CustomHooks/WithCustHooks';


//Offical Docs 
import MyButton from './Components/OfficalDocs/MyButton';
import UserAvatar from './Components/OfficalDocs/UserAvatar';
import './CSS/reactdoc.css';
import ListComp from './Components/OfficalDocs/ListComp';
import ShowEventPage from './Components/OfficalDocs/ShowEventPage';

import MainTicToc from './Components/OfficalDocs/TicTocGame/MainTicToc';
import TableList from './Components/OfficalDocs/ThinkinInReact/TableList';
import ShowGallery from './Components/OfficalDocs/UIRender/First/ShowGallery';
function App() {
  return (
    // <div className="App">
    //  <h4 className="text-center">Hello Clubs</h4>
     
    // </div>
    <>
    
    <Router>
    <div class="navbar">
       <Link to={"/"} className="navbar-brand text-white linkmarging">
         Main App
        </Link>
       
        <Link to={"colorchnages"} className="navbar text-white linkmarging">
    Color Changes
        </Link>


        <Link to={"testing"} className='navbar linkmarging'>Testing React</Link>
        
        <div class="dropdown">
    <button class="dropbtn">Use State
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <Link to={'hookstest'} className='linkmarging'>State 1</Link>
    <Link to={'hookstest1'} className='linkmarging'>State 2</Link>
    <Link to={'counterTest'} className='linkmarging'>Counter Test</Link>      
    </div>
  </div> 
  <div className='dropdown'>
    <button className='dropbtn'>Use Effect</button>
    <div className='dropdown-content'>
      <Link to={'useEffect1'} className='linemarging'>Continous Counter</Link>
      <Link to={'useEffect2'} className='linemarging'>Only One Time</Link>
      <Link to={'useEffect3'} className='linemarging'>Counter Changes</Link>
    </div>
  </div>

  <div className='dropdown'>
    <button className='dropbtn'>Use Ref</button>
    <div className='dropdown-content'>
      <Link to={'useRef1'} className='linemarging'>Use Ref1</Link>
      <Link to={'useRef2'} className='linemarging'>Use Ref2</Link>
      
    </div>
  </div>
  <div className='dropdown'>
    <button className='dropbtn'>Custom Hooks</button>
    <div className='dropdown-content'>
      <Link to={'customHooks'} className='linemarging'>WIthou Hooks</Link>
      <Link to={'customHooks1'} className='linemarging'>With Hooks</Link>
      
    </div>
    
  </div>
  <div className='dropdown'>
    <button className='dropbtn'>Offical Docs</button>
    <div className='dropdown-content'>
      <Link to={'mybutton'}>MyButton</Link>
      <Link to={'useravatar'}>UserAvatar</Link>
      <Link to={'listcomp'}>List Component</Link>
      <Link to={'showevent'}>Show Event</Link>
      <Link to={'tictoc'}>TicTocGame</Link>
      <Link to={'reactThink'}>Table List</Link>
    </div>
  </div>
  <div className='dropdown'>
    <button className='dropbtn'>OfficalDocs 2</button>
    <div className='dropdown-content'>
      <Link to={'showGallery'}>Show Gallery</Link>
    </div>
  </div>
      </div> 
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
      <Route path='hookstest1' element={<HooksTest1/>}/>
      <Route path='useEffect1' element={<UseEffect1/>}/>
      <Route path='useEffect2' element={<UseEffect2/>}/>
      <Route path='useEffect3' element={<UseEffect3/>}/>
      <Route path='useRef1' element={<TrackCount1/>}/>
      <Route path='useRef2' element={<FocusChange/>}/>
      <Route path='customHooks' element={<WithoutCustHooks/>}/>
      <Route path='customHooks1' element={<WithCustHooks/>}/>
      <Route path='mybutton' element={<MyButton/>}/>
      <Route path='useravatar' element={<UserAvatar/>}/>
      <Route path='listcomp' element={<ListComp/>}/>
      <Route path='showevent' element={<ShowEventPage/>}/>
      <Route path='tictoc' element={<MainTicToc/>}/>
      <Route path='reactThink' element={<TableList/>}/>
      <Route path='showGallery' element={<ShowGallery/>}/>
        </Routes>
        
    </Router>
    </>
  );
}

export default App;
