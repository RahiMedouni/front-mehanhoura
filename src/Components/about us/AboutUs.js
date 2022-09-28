import "./AboutUs.css";
import Founders from "./Founders";
import Interns from "./Interns";


  const AboutUs= () => {

    return (
      <div style={{
      }} className="aboutus">
         <section style={{
        backgroundImage: `url("../cover2.jpeg")`,
        marginTop: -100,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        height: '105vh',
        textAlign: "center",
      }} className="firstsection">
        {/* <div className="slogan">
      <h1 style={{ marginTop: 200 }}>construction Renovation Aménagement<br />la Réparation, notre Passion
      </h1>
      <h3>Download The App</h3>
      <span style={{ display: "flex", flexDirection: "row" }}><button className="androidbtn">Android version</button>
      <button className="iosbtn">IOS version</button></span>
      </div> */}
        </section>
        <section style={{
        marginTop: 0,
        backgroundColor: "white",
        height: '130vh',
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }} className="secondsection">
        <span style={{
          backgroundColor: "whitesmoke",
          marginTop: 100,
          height: "100vh",
          width: "150vh",
          boxShadow: "5px 5px 5px 5px rgb(211,211,211)",
        }}>
          <img src="../cover1.jpeg" alt="cover" style={{
            float: "left",
            marginRight: 30,
            height: "50vh",
            width: "50vh",
          }}/>
          <div style={{
            height: 50
          }}>
          <h1 align="center">Sarl Mehan Houra</h1>
          </div>
          <p style={{
            textAlign: "justify",
            margin: 0,
            padding: "0px 50px 50px 50px" ,

            fontSize: 18
          }}>On n’est jamais à l’abri d’une fuite au niveau de notre installation de plomberie, problème d'installation électrique ,un four qui reste froid alors qu’on essaye de préparer un repas de famille ou un frigo qui ne fonctionne plus et laisse tous les produits frais se perdre ...

Que faire à ce moment-là ?

Vous cherchez un maçon plombier ,peintre (Hirafi).. Mehan Houra c'est fait !

Mehan houra met a votre disposition BriCool, un réseau d'artisans (Hirafi) de confiance, proximité de vous et à votre disposition 24/7 !

L'Affaire , des magasins de matériaux et outillages de construction :
Ne pas rater à découvrir les promotions des magasins a travers les 48 wilaya!

1-Habitat et construction :
-Matériaux de construction
-Matériaux préfabriques et précontraints
-Matériel de coffrage et échafaudage
-Matériaux nouveaux et procèdes de construction

Ainsi second œuvre :
-Revêtement mural, de sol et accessoires
-Peintures vitrerie et décoration
-Menuiseries bois, métalliques ,aluminium et PVC.
-Électricité du bâtiment
-Chauffage, climatisation et plomberie
-Ascenseurs, élévateurs systèmes integrés

2-Équipements et outillages :
-Machines et engins pour les carriers et chantiers
-Machines et équipements pour la fabrication de béton.
-Camions transports pour béton, véhicule utilitaires.
-Outillage individuel et collectif

3- Matériaux de construction :

Producteurs de matériaux de
construction.
Constructeurs d'équipements de cimenteries,briqueterie,céramiques,plâtres et chaux...ect

4-Matériel de sécurité
Matériel anti-incendie
Matériel divers de protection individuelle et collective .

Ne pas rater à découvrir les promotions des magasins a travers les 48 wilayas !

Besoin d'aide ?
Veuillez nous contactez sur : support@mehanhoura.com
Par un appel téléphonique sur : +213 6.56.29.87.02
          </p>
        </span>
        </section>

        <section style={{
          marginTop: -30,
          backgroundColor: "white",
          height: '120vh',
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        
        }} className="secondsection">
          <Founders />
        </section>
        <section style={{
          marginTop: -30,
          backgroundColor: "white",
          height: '120vh',
          textAlign: "center",
        
        }} className="secondsection">
          <Interns />
        </section>
    </div>
    );
  };

  export default AboutUs;