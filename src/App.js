import './App.css';
import AboutUs from './Components/about us/AboutUs';
import Navbar from './Components/navbar/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Components/home page/HomePage';
import React, { useEffect, useState } from 'react';
import MehanBlog from './Components/blog/MehanBlog';
import ContactUs from './Components/contact us/ContactUs';
import images from "./Components/blog/BlogCoverCard";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import HowTo from './Components/onDoing/HowTo';
import CreateRequest from './Components/onDoing/CreateRequest';
import Handymen from './Components/onDoing/Handymen';
import Bricool from './Components/onDoing/bricool';
import Promo from './Components/onDoing/Promo';



const TikTokIcon = ({ color = "white" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="20px"
      height="20px"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

function App() {

  return (
    <div className="App">
      <header className='navbarr'>
      < Navbar />
      </header>
      <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/about" element={< AboutUs />} />
      <Route path="/blog" element= {< MehanBlog images={images} />} />
      <Route path="/demandes" element={<CreateRequest />} />
      <Route path="/artisans" element={<Handymen />} />
      <Route path="/comment" element={<HowTo />} />
      <Route path="/bricool" element={<Bricool />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>

    <footer style={{
      backgroundColor: "#0040AA",
      marginTop: -30,
      color: "black",
      height: 200,
      bottom: 0,
    }}>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <img src="../logotrans.png" style={{
            height: 40,
            width: 100,
            marginTop: 50,
          }}/>
          </div>
          <span style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
             <CopyrightOutlinedIcon sx={{ color: "white" }} />
             <p style={{
              marginRight: 10,
              color: "white"
             }}>Copyrights 2020</p>
             <p style={{
              marginLeft: 10,
              marginRight: 10,
              color: "whitesmoke"
             }}>|</p>
            <a href='https://mehanhoura.com/privacy.html?fbclid=IwAR1OvM-9t6pg1nJq8_TInwiA0PgVKeP6BHRo-igCcnM-u0PCXU6gTWTGZKk'>
               <p style={{
              marginLeft: 10,
              marginRight: 10,
              color: "white"
             }}>Privacy</p> </a>
             <p style={{
              marginLeft: 10,
              marginRight: 10,
              color: "whitesmoke"
             }}>|</p>
             <a href='https://mehanhoura.com/terms.html?fbclid=IwAR2m0vY7mr9OXtn3DUYSB32Kjhl_G2d5R3s3SLMBfraCaBS3MPVXnl3pJh4' >
             <p style={{
              marginLeft: 10,
              marginRight: 10,
              color: "white"
             }}>Terms</p> </a>
          </span>
          <span style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        
             <a href='https://web.facebook.com/search/top?q=mehanhoura%20-%20%D9%85%D9%87%D9%86%20%D8%AD%D8%B1%D8%A9' target="_blank"><FacebookOutlinedIcon sx={{color: "white"}} /> </a>
             <a href='https://www.instagram.com/mehanhoura/' target="_blank"> <InstagramIcon sx={{color: "white"}} /> </a>
             <a href='https://www.linkedin.com/company/mehan-houra' target="_blank"> <LinkedInIcon sx={{color: "white"}} /> </a>
            <a href='https://www.youtube.com/channel/UCFujFIFG1DrfIRLR7HoI1xQ' target="_blank"> <YouTubeIcon sx={{ color: "white" }}/> </a>
             <a href='https://www.tiktok.com/@mehanhoura?_t=8WHQuBzQG8r&_r=1' target="_blank"> <TikTokIcon /> </a>
             <a href='https://mobile.twitter.com/mehanhoura' target="_blank"> <TwitterIcon sx={{color: "white"}}/> </a>
          </span>
    </footer>
    </div>
  );
}

export default App;
