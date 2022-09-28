import "./Navbar.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
// import Langues from "./Langues";
import { animateScroll } from 'react-scroll';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

  
  const Navbar = (scrollToTop) => {

    // const myFunction = () => {
    //   var x = document.getElementById("myTopnav");
    //   if (x.className === "topnav") {
    //     x.className += " responsive";
    //   } else {
    //     x.className = "topnav";
    //   }
    // };

    
useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0
    });
}, [window.location.pathname]);

  const [colornav, setColornav] = useState(false)
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColornav(true)
      }
      else {
        setColornav(false)
      }
    }

    window.addEventListener('scroll', changeColor)

    //&#8801;

    return (
      <div className="navbarr">
        <header className={colornav ? 'firsthead firsthead-bg' : 'firsthead' }>
          <div style={{
          }}>
          {/* <img src="../logotrans.png" style={{
            float: "left",
            marginLeft: 10,
            marginTop: 19,
            height: 26.38,
            width: 83.7,
          }}/> */}
       <span   onClick={scrollToTop}> <Link to="/"><h2 className="logo">Mehan Houra</h2></Link> </span>
        </div>
        <nav className="navv">
        <div className="navlinks">
        <span   onClick={scrollToTop}><Link to="/about/">About Us</Link></span>
        </div>
      <div className="dropdown">
        <button className="dropbtn">Services <i class="arrow down"></i></button>
        <div className="dropdown-content">
          <div className="row">
            <div className="column">
              <div className="bricool">
              <h3>Profesionals network </h3>
              <a href="#">Directory of professionals</a>
              <a href="#">Instant repairing reaquest bricool</a>
              <a href="#">Create reaquest</a>
              <a href="#">Join us</a>
              </div>
            <div className="bricool">
            <h3>Online Stores</h3>
              <a href="https://app.mehanhoura.com/" target="_blank">Stores l'Affaire</a>
              <a href="#">Promotions</a>
              <a href="offrecommercialmehanhoura.pdf" download="Offre Commerciale Mehan Houra">pricing</a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navlinks">
      <span   onClick={scrollToTop}> <Link to="/blog/">Blog</Link> </span>
      <a href="#contacts">Contact Us</a>
      <a href="#howto">How To?</a>
        </div>
        </nav>
        <div>
      <span style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginRight: 50, float: "right" }}>
        <button className="androidbtnav">Android<AndroidIcon style={{fontSize: 14}} /></button>
      <button className="iosbtnav">IOS<AppleIcon style={{fontSize: 14}} /></button>
      </span>
      </div>

      <div className="langdropdown">
        <button className="langdropbtn"> En <LanguageIcon style={{marginLeft: 5 }}/></button>
        <div className="langdropdown-content">
          <div className="langrow">
            <div className="langcolumn">
              <div className="langbricool">
              <a href="#">Ar</a>
              <a href="#">En</a>
              <a href="#">Fr</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
    );
  };
  
  export default Navbar;
  
  // <LanguageIcon />

//   import React from "react";
// import { Link } from "react-router-dom";
// import "./index.css";

// function Header() {
//   const myFunction = () => {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   };

//   return (
//     <nav>
//       <div className="topnav" id="myTopnav">
//         <a href="#home" className="active">
//           Home
//         </a>
//         <a href="#news">News</a>
//         <a href="#contact">Contact</a>
//         <a href="#about">About</a>
//         <a href="javascript:void(0);" className="icon" onClick={myFunction}>
//           <i className="fa fa-bars"></i>
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Header;


// .topnav {
//   overflow: hidden;
//   background-color: black;
// }

// .topnav a {
//   float: left;
//   display: block;
//   color: #f2f2f2;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
// }

// .topnav a:hover {
//   background-color: #ddd;
//   color: black;
// }

// .topnav .icon {
//   display: none;
// }

// @media screen and (max-width: 600px) {
//   .topnav a {
//     display: none;
//   }
//   .topnav a.icon {
//     float: right;
//     display: block;
//   }
// }

// @media screen and (max-width: 600px) {
//   .topnav.responsive {
//     position: relative;
//   }
//   .topnav.responsive .icon {
//     position: absolute;
//     right: 0;
//     top: 0;
//   }
//   .topnav.responsive a {
//     float: none;
//     display: block;
//     text-align: left;
//   }
// }
