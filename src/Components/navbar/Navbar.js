import "./Navbar.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
// import Langues from "./Langues";
import { animateScroll } from 'react-scroll';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import { useTranslation } from 'react-i18next';

import { connect } from "react-redux";

  const Navbar = ({scrollToTop,language, changeLang} ) => {
    const [Lang, setLang] = useState(language)
    const { t, i18n } = useTranslation();


    useEffect(() => {
      i18n.changeLanguage(Lang)
      changeLang(Lang)
    }, [Lang])
    


    console.log("state language  : " + Lang)
    console.log("reedux language: " + language)

    const [colornav, setColornav] = useState(false);
    const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

    
useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0
    });
}, [window.location.pathname]);

  
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColornav(true)
      }
      else {
        setColornav(false)
      }
    }

    window.addEventListener('scroll', changeColor)

  

    return (
      <div className="navbarr">
        <header className={colornav ? 'firsthead firsthead-bg' : 'firsthead' }>
          <div>
        <span onClick={scrollToTop}> <Link to="/"><img src="../logotrans.png" className="iconlogo"/> </Link> </span>
       <span   onClick={scrollToTop}> <Link to="/"><h2 className="logo">Mehan Houra</h2></Link> </span>
        </div>
		<button className="icon" style={{
        marginLeft: 10,
        marginTop: 15,
        backgroundColor: "transparent",
        color: "#FDD720"}} >
      &#8801; </button>
        <nav className={open ? 'navv active' : 'navv'}>

        <div className="navlinks">
        <span   onClick={scrollToTop}><Link to="/about/">About Us</Link></span>
        </div>
      <div className="dropdown">
        <button className="dropbtn">Services <i class="arrow down"></i></button>
        <div className="dropdown-content" id="drop-menu">
          <div className="row">
            <div className="column">
              <div className="bricool">
              <h3>Profesionals network </h3>
              <span onClick={scrollToTop}><Link to="/artisans/">Directory of professionals</Link></span>
              <span onClick={scrollToTop}><Link to="/bricool/">Instant repairing reaquest bricool</Link></span>
              <span onClick={scrollToTop}><Link to="/demandes/">Create reaquest</Link></span>
              <a href="https://www.mehanhoura.com/" target="_blank" >Join us</a>
              </div>
            <div className="bricool">
            <h3>Online Stores</h3>
              <a href="https://app.mehanhoura.com/" target="_blank">Stores l'Affaire</a>
              <span onClick={scrollToTop}><Link to="/demandes/">Promotions</Link></span>
              <a href="offrecommercialmehanhoura.pdf" download="Offre Commerciale Mehan Houra">pricing</a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navlinks">
      <span   onClick={scrollToTop}> <Link to="/blog/">Blog</Link> </span>
      <span onClick={scrollToTop}><Link to="/contactus/">{t('Contact Us')}</Link></span>
      <span onClick={scrollToTop}><Link to="/comment/">How To?</Link></span>
        </div>
        </nav>
        
      <div className="androidios">
      <a href="https://www.mehanhoura.com/" target="_blank"><button className="iconandroid" ><AndroidIcon style={{fontSize: 11}} /></button></a>
      <button disabled= {true} className="iconios"><AppleIcon style={{fontSize: 11}} /></button>
      </div>
      <div className="langdropdownp">
        <button className="langdropbtnp"> Fr <LanguageIcon /></button>
        <div className="langdropdown-contentp" style={{ marginRight: 20 }} >
            <div className="langcolumnp">
              <div className="langbricoolp">
              <a href="#" 
              onClick={()=>{
                setLang("en")
               } }>en</a>
              <a href="#" onClick={()=>{
                setLang("fr")    
                }}>fr</a>
              </div>
            </div>
        </div>
      </div>
        <div>
      <span className="androis">
      <a href="https://www.mehanhoura.com/" target="_blank">
        <button className="androidbtnav"><span>Android<AndroidIcon style={{fontSize: 14}} /></span></button>
        </a>
      <button disabled= {true} className="iosbtnav"><span>IOS<AppleIcon style={{fontSize: 14}} /></span></button>
      </span>
      </div>
      <div className="langdropdown">
        <button className="langdropbtn">{language} <LanguageIcon style={{marginLeft: 5 }}/></button>
        <div className="langdropdown-content">
          <div className="langrow">
            <div className="langcolumn">
              <div className="langbricool">
              <div className="langcolumnp">
              <div className="langbricoolp">
              <a href="#" 
              onClick={()=>{
                setLang("en")
               } }>en</a>
              <a href="#" onClick={()=>{
                setLang("fr")    
                }}>fr</a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      language: state.language,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      changeLang: (lang) =>
        dispatch({ type: "CHANGE_LANGUAGE", payload: lang }),

    };
  };


  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);