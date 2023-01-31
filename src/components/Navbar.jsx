import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

window.addEventListener("scroll",()=>{
    var header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0)
})

const Navbar = () => {
    return ( 
        <header>

            <Link className="logo" to='/'>Find A Home</Link>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/catalog'>Catalog</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>

            <Outlet/>
        </header>
     );
}
 
export default Navbar;
