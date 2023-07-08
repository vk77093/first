import { Outlet,Link } from "react-router-dom";
export default function NavBar(){
    return(
        <>
        <nav>
        <ul>
        <li>
            <Link to="/">Test</Link>
          </li>
          <li>
            <Link to="/nav">Nav</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <link to="/gallery">Gallery</link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet/>
        </>
    )
}