import "./AboutUs.css";

  const Interns= () => {

    return (
      <>
      <h1 align= "center">Team</h1>
      <div className="cointerns">
            <div className="intern">
            <img src="../rahim.jpeg" alt="cover" style={{
              height: 180,
              width: 200,
              marginTop: 20}} />
            <h1>Medouni Abderrahim</h1>
            <p>Sales intern</p>
            <p>Web developement</p>
            </div>
            <div className="intern">
            <img src="../tina.jpeg" alt="cover" style={{marginTop: 20,
            height: 180,
            width: 200,
            }} />
            <h1>Tinhinane Mahi</h1>
            <p>Sales intern</p>
            <p>Marketing</p>
            </div>
            <div className="intern">
            <img src="../kawther.jpeg" alt="cover" style={{marginTop: 20,
            height: 180,
            width: 200,
            }} />
            <h1>Kawther ...</h1>
            <p>Sales intern</p>
            <p>Physics</p>
            </div>
    </div>
    </>
    );
  };

  export default Interns;