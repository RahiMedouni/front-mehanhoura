import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import "./HomePage.css";
import PartnersSlide from "../partners/PartnersSlide";
import PartnersImages from "../partners/Partners";

const HomePage= () => {

    return (
      <div>
        
        <div style={{ 
          opacity:0.8,
        backgroundImage: `url("../cover3.jpeg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        backgroundPosition:"center",
      }} className="firstsection">
        <span>
        <div className="slogan">
      <div className='textdiv'>
         <span className='spandiv'>Construction Renovation Aménagement<br /> la Réparation, notre <span style={{color: "#FFD720"}}>Passion</span>
      </span>
      </div>
      <h3 className="downloadapp">Download The App</h3>
      <div>
      <a href="https://www.mehanhoura.com/" target="_blank"><button className="androidbtn">
          <span className='btnspan'>Android version <AndroidIcon className="icons" /></span>
        </button></a>
      <button disabled= {true} className="iosbtn">
        <span className='btnspan'>IOS version <AppleIcon className="icons" />
      </span>
      </button>
      </div>
      </div>
      </span>
        </div>
        <section className="secondsection">
        <div className="pub">
          <span className="videopub">
        <iframe title="Mehan Houra" width="95%" height="95%" src="https://www.youtube.com/embed/l5gg7vv-JUY?mute=1&loop=1">
</iframe>
          </span>
          <span className="textpub" >
            <div>
              <h1>Breeze past your competition this fall</h1>
              <p>As the seasons change, Mehan Houra is making it easy for you to get ahead of your competitors with a limited-time offer. Check out the details below and click to get started today!</p>
            </div>
          <div>
      <span style={{ display: "flex", flexDirection: "row", float: "right" }}>
        <div className="btndiv">
        <a href="https://www.mehanhoura.com/" target="_blank"><button className="androidbtn">
          <span className='btnspan'>Android version <AndroidIcon/></span>
          </button></a>
      <button disabled= {true} className="iosbtn"> <span className='btnspan'>IOS version <AppleIcon/></span></button>
      </div>
      </span>
      </div>
      </span>
      </div>
        </section>
        <section className="partnersfooter">
         <PartnersSlide
        PartnersImages={PartnersImages} />
        </section>
    </div>
    );
  };
  
  export default HomePage;

  // import AndroidIcon from '@mui/icons-material/Android';
  //import AppleIcon from '@mui/icons-material/Apple';

  /* <div>
        <iframe title="Offre" src="offrecommercialmehanhoura.pdf" style={{ overFlow: "hidden" }}>Offre Commerciale</iframe>
      </div> */