import { Diversity2 } from '@mui/icons-material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import "./HomePage.css";
import PartnersSlide from "../partners/PartnersSlide";
import images from "../partners/BlogCoverCard";

const HomePage= () => {

    return (
      <div>
        
        <div style={{ 
          opacity:0.8,
        backgroundImage: `url("../cover3.jpeg")`,
        marginTop: -75,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        height: '100vh',
        width: "100%",
        right: 0,
        textAlign: "center",
      }} className="firstsection">
        <span style={{ marginTop: 280 }}>
        <div className="slogan">
      <div className='textdiv'>
         <span style={{ marginTop: 280, fontSize: 48, textAlign: "center" }} className='spandiv'>Construction Renovation <span style={{color: "#0040AA"}}>Aménagement</span> <br /> la Réparation, notre <span style={{color: "#FFD720"}}>Passion</span>
      </span>
      </div>
      {/* <h1 style={{ marginTop: 280, fontSize: 48 }} className="slogantext">Construction <span style={{color: "#0040AA", fontWeight: "bolder"}}>Renovation</span> Aménagement <br /> la Réparation, notre <span style={{color: "#FFD720", fontWeight: "bolder"}}>Passion</span>
      </h1> */}
      <h3 className="downloadapp">Download The App</h3>
      <div>
        <button className="androidbtn"><span className='btnspan'>Android version <AndroidIcon style={{fontSize: 24}} /></span></button>
      <button className="iosbtn"> <span className='btnspan'>IOS version <AppleIcon style={{
        fontSize: 24
      }}/></span></button>
      </div>
      </div>
      </span>
        </div>
        <section style={{
        marginTop: 0,
        backgroundColor: "whiteSmoke",
        height: '120vh',
        textAlign: "center",
      }} className="secondsection">
        <div className="pub">
          <span style={{
            marginTop: 150,
            marginRight: 100,
            width: 500,
          }}>
        <iframe title="Mehan Houra" width="579" height="327" src="https://www.youtube.com/embed/l5gg7vv-JUY?mute=1&loop=1">
</iframe>
          </span>
          <span style={{
            marginTop: 150,
            width: 500,
          }}>
            <div>
              <h1 style={{
              color: "#13191E",
              fontSize: 60,
              margin: "0px 0px 8px",
              textAlign: "left",
            }}>Breeze past your competition this fall</h1>
              <p style={{
              color: "#13191E",
              fontSize: 22,
              margin: "0px 0px 48px",
              textAlign: "justify",
            }}>As the seasons change, Mehan Houra is making it easy for you to get ahead of your competitors with a limited-time offer. Check out the details below and click to get started today!</p>
            </div>
          <div>
      <span style={{ display: "flex", flexDirection: "row", float: "right" }}>
        <div className="btndiv">
        <button className="androidbtn"><span className='btnspan'>Android version <AndroidIcon style={{
          fontSize: 24
        }} /></span></button>
      <button className="iosbtn"> <span className='btnspan'>IOS version <AppleIcon style={{
        fontSize: 24
      }}/></span></button>
      </div>
      </span>
      </div>
      </span>
      </div>
        </section>
        <section style={{
        marginTop: 0,
        backgroundColor: "whitesmoke",
        height: '40vh',
        textAlign: "center",
      }} className="secondsection">
         <PartnersSlide
        images={images} style={{
          marginTop: 50
        }} />
        </section>
    </div>
    );
  };
  
  export default HomePage;

  // import AndroidIcon from '@mui/icons-material/Android';
  //import AppleIcon from '@mui/icons-material/Apple';

  {/* <div>
        <iframe title="Offre" src="offrecommercialmehanhoura.pdf" style={{ overFlow: "hidden" }}>Offre Commerciale</iframe>
      </div> */}