import "./AboutUs.css";

  const Interns= () => {

    return (
      <>
      <h1 align= "center" className="team">Team</h1>
      <div className="cointerns">
            <div className="intern">
            <img src="../rahim.svg" alt="cover" style={{
              height: "40%",
              width: "40%",
              marginTop: 20}} />
            <h1>Medouni Abderrahim</h1>
            <p>Sales intern</p>
            <p>Web developement</p>
            </div>
            <div className="intern">
            <img src="../tina.jpeg" alt="cover" style={{marginTop: 20,
           height: "40%",
           width: "40%",
            }} />
            <h1>Tinhinane Mahi</h1>
            <p>Sales intern</p>
            <p>Marketing</p>
            </div>
            <div className="intern">
            <img src="../kawther.svg" alt="cover" style={{marginTop: 20,
            height: "40%",
            width: "40%",
            }} />
            <h1>Kawther Rahmani</h1>
            <p>Sales intern</p>
            <p>Physics</p>
            </div>
            <div className="intern">
            <img src="../raoufsvg.svg" alt="raouf" style={{marginTop: 20,
           height: "40%",
           width: "40%",
            }} />
            <h1>Abderraouf Bessai</h1>
            <p>Designer intern</p>
            <p>something hard to remember</p>
            </div>
            <div className="intern">
            <img src="../ahlam.svg" alt="ahlem picture" style={{marginTop: 20,
            height: "40%",
            width: "40%",
            }} />
            <h1>Ahlam dreams</h1>
            <p>Comunity manager intern</p>
            <p>Architect</p>
            </div>
    </div>
    </>
    );
  };

  export default Interns;