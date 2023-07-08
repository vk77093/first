import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// // router Data


// import AboutUs from './pages/about';
// import ContactUs from './pages/contact';
// import GalleryPage from './pages/gallery';
// import HomePage from './pages/home';
// import NoPage from './pages/npage';
//  import NavBar from './pages/comp/Navbar';
//end of router data


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
  <React.StrictMode>
    <App /> 
    
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
