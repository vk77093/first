// import logo from './logo.svg';
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
import RenderJSX from './Components/OfficalDocs/UIRender/JSX/RenderJSX';
import List1 from './Components/OfficalDocs/UIRender/ListRender/List1';
import EventShow from './Components/OfficalDocs/Intractive/Events/Event1';
import ShowStateObject from './Components/OfficalDocs/Intractive/ObjectState/ShowStateObject';
import ShowArray from './Components/OfficalDocs/Intractive/Arrays/ShowArray';
import ShowInputState from './Components/OfficalDocs/UIState/InputState/ShowInputState';
import ShowStateShare from './Components/OfficalDocs/UIState/StateShare/ShowStateShare';
import ShowCarsoule from './Components/ReactTestingProjects/ImageCarsoule/ShowCarsoule';
import AccordainDemo from './Components/ReactTestingProjects/Accordain/AccordainDemo';
import Quote from './Components/ReactTestingProjects/QuoteGenerator/Quote';

function App() {
  return (
    // <div className="App">
    //  <h4 className="text-center">Hello Clubs</h4>
     
    // </div>
    <>
    
    <Router>
    <div className="navbarcss">
       <Link to={"/"} className="navbarcss-brand text-white linkmarging">
         Main App
        </Link>
       
        <Link to={"colorchnages"} className="navbarcss text-white linkmarging">
    Color Changes
        </Link>


        <Link to={"testing"} className='navbarcss linkmarging'>Testing React</Link>
        
        <div className="dropdowncss">
    <button className="dropbtncss">Use State
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdowncss-content">
    <Link to={'hookstest'} className='linkmarging'>State 1</Link>
    <Link to={'hookstest1'} className='linkmarging'>State 2</Link>
    <Link to={'counterTest'} className='linkmarging'>Counter Test</Link>      
    </div>
  </div> 
  <div className='dropdowncss'>
    <button className='dropbtncss'>Use Effect</button>
    <div className='dropdowncss-content'>
      <Link to={'useEffect1'} className='linemarging'>Continous Counter</Link>
      <Link to={'useEffect2'} className='linemarging'>Only One Time</Link>
      <Link to={'useEffect3'} className='linemarging'>Counter Changes</Link>
    </div>
  </div>

  <div className='dropdowncss'>
    <button className='dropbtncss'>Use Ref</button>
    <div className='dropdowncss-content'>
      <Link to={'useRef1'} className='linemarging'>Use Ref1</Link>
      <Link to={'useRef2'} className='linemarging'>Use Ref2</Link>
      
    </div>
  </div>
  <div className='dropdowncss'>
    <button className='dropbtncss'>Custom Hooks</button>
    <div className='dropdowncss-content'>
      <Link to={'customHooks'} className='linemarging'>WIthou Hooks</Link>
      <Link to={'customHooks1'} className='linemarging'>With Hooks</Link>
      
    </div>
    
  </div>
  <div className='dropdowncss'>
    <button className='dropbtncss'>Offical Docs</button>
    <div className='dropdowncss-content'>
      <Link to={'mybutton'}>MyButton</Link>
      <Link to={'useravatar'}>UserAvatar</Link>
      <Link to={'listcomp'}>List Component</Link>
      <Link to={'showevent'}>Show Event</Link>
      <Link to={'tictoc'}>TicTocGame</Link>
      <Link to={'reactThink'}>Table List</Link>
    </div>
  </div>
  <div className='dropdowncss'>
    <button className='dropbtncss'>OfficalDocs 2</button>
    <div className='dropdowncss-content'>
      <Link to={'showGallery'}>Show Gallery</Link>
      <Link to={'renderJSX'}>Render JSX</Link>
      <Link to={'listshow'}>List Show</Link>
      <button className='dropbtncss2'>Intractive</button>
    <div className='dropdowncss-content2'>
      <Link to={'eventshow'}>Event Show</Link>
      <Link to={'stateObject'}>State Object</Link>
      <Link to={'arrayshow'}>Array Show</Link>
    </div>
    </div>
    
  </div>
  <div className='dropdowncss'>
    <button className='dropbtncss'>Offical Docs2.1</button>
    <div className='dropdowncss-content'>
      <Link to={'UiState/firstState'}>First State</Link>
      <Link to={'UiState/SateShare'}>State Share</Link>
    </div>
  </div>
  <div className='dropdowncss'>
    <button className='dropbtncss'>Recat Projects</button>
    <div className='dropdowncss-content'>
      <Link to={'projects/imagecarsoule'}>Image Carsoules</Link>
      <Link to={'projects/accordain'}>AccordainDemo</Link>
      <Link to={'projects/quote'}>quotes</Link>
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
      <Route path='renderJSX' element={<RenderJSX/>}/>
      <Route path='listshow' element={<List1/>}/>
      <Route path='eventshow' element={<EventShow/>}/>
      <Route path='stateObject' element={<ShowStateObject/>}/>
      <Route path='arrayshow' element={<ShowArray/>}/>
      <Route path='UiState/firstState' element={<ShowInputState/>}/>
      <Route path='UiState/SateShare' element={<ShowStateShare/>}/>
      <Route path='projects/imagecarsoule' element={<ShowCarsoule/>}/>
      <Route path='projects/accordain' element={<AccordainDemo/>}/>
      <Route path='projects/quote' element={<Quote/>}/>
        </Routes>
        
    </Router>
    </>
  );
}

export default App;


