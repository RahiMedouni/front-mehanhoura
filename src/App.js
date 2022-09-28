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
import images from "./Components/blog/BlogCoverCard";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { display } from '@mui/system';
import PopUp from './Components/PopUp';

const TikTokIcon = ({ color = "#000000" }) => {
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

  const [showVideo, setShowVideo] = useState(false);

  useEffect( () => {
    setInterval( () => {
      setShowVideo(!showVideo)
    }, 5000 );
  }, []);

//  const closeVideo = 

  return (
    <div className="App">
      <header className='navbarr'>
      < Navbar />
      </header>
      {/* <div>
        { showVideo && <PopUp /> } 
      </div> */}
      <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/about" element={< AboutUs />} />
      <Route path="/blog" element={< MehanBlog images={images} />} />
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
             <CopyrightOutlinedIcon />
             <p style={{
              marginRight: 10
             }}>Copyrights</p>
             <p style={{
              marginLeft: 10,
              marginRight: 10
             }}>|</p>
             <p style={{
              marginLeft: 10,
              marginRight: 10
             }}>Privacy</p>
             <p style={{
              marginLeft: 10,
              marginRight: 10
             }}>|</p>
             <p style={{
              marginLeft: 10,
              marginRight: 10
             }}>Terms</p>
          </span>
          <span style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
             <CopyrightOutlinedIcon />
             <FacebookOutlinedIcon />
             <InstagramIcon />
             <LinkedInIcon />
             <YouTubeIcon />
             <TikTokIcon/>
             <TwitterIcon />
          </span>
    </footer>
    </div>
  );
}

export default App;
