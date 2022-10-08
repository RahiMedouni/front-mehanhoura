import "./AboutUs.css";

  const Founders= () => {

    return (
      <>
      <h1 align= "center" className="founderteam">Founders</h1>
      <div className="cofounders">
            <div className="founder">
            <img src="../amira.jpeg" alt="cover" style={{
              height: "40%",
              width: "40%",
              marginTop: 20}} />
            <h1>Amira Irmal</h1>
            <p>CEO</p>
            <p>automatics</p>
            </div>
            <div className="founder">
            <img src="../zehor.jpeg" alt="cover" style={{marginTop: 20,
           height: "40%",
           width: "40%",
            }} />
            <h1>Zehor Mahi</h1>
            <p>COO</p>
            <p>automatics</p>
            </div>
            <div className="founder">
            <img src="../abdellah.jpeg" alt="cover" style={{marginTop: 20,
            height: "40%",
            width: "40%",
            }} />
            <h1>Abdellah Sellam</h1>
            <p>CTO</p>
            <p>AI Engineer</p>
            </div>
    </div>
    </>
    );
  };

  export default Founders;