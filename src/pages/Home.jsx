import Navbar from "../components/Navbar";
import './Home.css';
import Modernhouse1 from "../images/avi-werde-hHz4yrvxwlA-unsplash.jpg";
import Modernhouse2 from "../images/lycs-architecture-kUdbEEMcRwE-unsplash.jpg";
import Modernhouse3 from "../images/webaliser-_TPTXZd9mOo-unsplash.jpg"
import Modernhouse4 from "../images/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import Person1 from "../images/vince-veras-AJIqZDAUD7A-unsplash.jpg";
import Person2 from "../images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import Person3 from "../images/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <section className="banner">
                <h2 className="Title">Find A Home</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. enim ad minim <br /> veniam, quis nostrud  ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute <br />irure  in reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur. </p>
            </section>

            <section className="main">
                <div className="main--left--section">
                    
                    <img className="main--left--bg" src={Modernhouse1} alt="" />
                    <div className="main--left--text">
                    <h2>Find Modern Houses</h2>
                    <p>Lorem ipsum dolor sit amet,<br />consectetur  elit, sed do <br />eiusmod tempor ut labore et dolore <br />magna aliqua. enim ad minim</p>
                    </div>
                </div>
                <div className="main--right--section">
                    {/* <img className="main--right--img" src={Modernhouse2} alt="" /> */}
                    <div className="main--right--img"></div>
                </div>
            </section>

            <section className="teams"> 


                <div className="teams--section">                     
                    <div className="teams--left--section">
                    </div>
                    <div className="teams--right--section">
                        <img src={Modernhouse3} alt="" className="teams--right--bg" />
                        <div className="teams--head--section">
                            Our Team
                        </div>
                    </div>
                </div>

                
            <div className="card--section">
                <div className="card" id="card1">
                    <img className="teams--img" src={Person1} alt="" />
                    <div className="teams--info">
                        <p>Jane Doe</p>
                        <p className="team--title">Seniors Real Estate Specialist</p>
                    </div>
                </div>
                <div className="card">
                    <img className="teams--img" src={Person2} alt="" />
                    <div className="teams--info">
                        <p>James Padinton</p>
                        <p className="team--title">Seller Representative Specialist</p>
                    </div>
                </div>
                <div className="card">
                    <img className="teams--img" src={Person3} alt="" />
                    <div className="teams--info">
                        <p>Michelle Ham</p>
                        <p className="team--title">Accredited Buyer’s Representative</p>
                    </div>
                </div>
            </div>
            </section>


            <section className="steps">

                <div className="steps--head--section">
                    <p>Follow Steps</p>
                </div>

                <div className="steps--middle--section">
                    <ol>
                        <li>Create An Account</li>
                        <li>Sign In</li>
                        <li>Browse Our Catalog</li>
                        <li>Contact Listing Agents</li>
                        <li>Schedule A Visit</li>
                        <li>Sign Contract</li>
                        <li>Get The Keys To Your New Home</li>
                    </ol>
                    <button>View Available Prices</button>
                </div>

                <img className="steps--img" src={Modernhouse4} alt="" />
    

                <div className="steps--low--section">
                    <p>Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor ut labore et dolore magna . enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure  in reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur. </p>
                </div>
            </section>

            <Footer/>


        </div>
     );
}
 
export default Home;