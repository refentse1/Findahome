import { Outlet, Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return ( 
        <div className="footer">
            <section className="upper--footer--section">

                <p className="footer--logo">Find A Home</p>
                <ul className="footer--web--links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/catalog'>Catalog</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                </ul>

            <Outlet/>

                <div className="footer--contact--form">
                    <input type="text" /><br />
                    <input type="text" /><br />
                    <textarea name="" id=""></textarea>
                    <div className="footer--btn">
                        <button className="contact--btn">Contact Us</button>
                    </div>
                </div>

            </section>

            <section className="lower--footer--section">
                <p><span className="copyright"></span> Find A Home All Rights Reserved 2023</p>
                <div className="lower--section--text">
                    <p>Policy</p>
                    <p>Disclaimer</p>
                </div>
                <ul className="footer--social--links">
                    <li><Link to='/'>Instagram</Link></li>
                    <li><Link to='/'>Whatsapp</Link></li>
                    <li><Link to='/'>Twitter</Link></li>
                    <li><Link to='/'>LinkedIn</Link></li>
                </ul>
            </section>
        </div>
     );
}
 
export default Footer;