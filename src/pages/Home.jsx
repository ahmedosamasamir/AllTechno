import React from "react";
import "./Home.css";
import VideoBg from "../components/video/background1.mp4";
import laptopImage from "../components/imgs/sales.jpeg";
import aboutImg from "../components/imgs/about1.jpg"
import { Link } from "react-router-dom";
import logo from "../components/imgs/all.jpg"
import PRODUCTS from "../data";
import laptop from "../components/imgs/laptop.png"
import accessores from "../components/imgs/accessores.png"




export const Home = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src={VideoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <h1 className="main-heading">Enjoy Shopping at All Techno</h1>
        <p className="sub-heading">
          Enjoy shopping, you can return the product to the company and have the
          order delivered on the same day.
        </p>
        <button
          className="shop-now-button"
          onClick={() => (window.location.href = "./Laptop")}
        >
          Shop Now
        </button>
      </div>   
      <div className="container2" >
        <div className="overlay1">
          <Link className="link1" to={'./Laptop'}><img src={laptop} alt="Logo" /></Link>
          <Link className="link1" to={'/'}><img src={accessores} title="accessores" alt="accessores" /><title>accessores</title></Link>
          <Link className="link1" to={'/'}><img src={logo}  alt="Logo" /></Link>
          <Link className="link1" to={'/'}><img src={logo} alt="Logo" /></Link>
          <Link className="link1" to={'/'}><img src={logo} alt="Logo" /></Link>
          <Link className="link1" to={'/'}><img src={logo} alt="Logo" /></Link>
          <Link className="link1" to={'/'}><img src={logo} alt="Logo" /></Link>
          <Link className="link1" to={'/'}><img src={logo} alt="Logo" /></Link> 
        </div>

        <div className="about-img">
          <img src={aboutImg} alt="img" className="about-img" />  

          <div className="about-overlay">
            <div className="-overlay-">
              <h2>Welcome to all techno, your go-to destination for all things tech! </h2>
              <button onClick={()=>(window.location.href="./about")}> About us</button>
            </div>
          </div>
          </div>
 
      </div> 

    </div>
    
  );
};

export default Home;
