import "./AboutUs.css";
import Founders from "./Founders";
import Interns from "./Interns";
import PartnersSlide from "../partners/PartnersSlide";
import PartnersImages from "../partners/Partners";

  const AboutUs= () => {

    return (
      <>
         <section style={{
        backgroundImage: `url("../cover2.jpeg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        backgroundPosition:"center",
      }} className="firstsection">
        </section>
        <section className="secondsectionabout">
        <span className="sarlmehanhoura" >
          <img src="../tinamira.svg" alt="cover" />
          <h1 align="center">SARL Mehan Houra</h1>
          <p>On n’est jamais à l’abri d’une fuite au niveau de notre installation de plomberie, problème d'installation électrique ,un four qui reste froid alors qu’on essaye de préparer un repas de famille ou un frigo qui ne fonctionne plus et laisse tous les produits frais se perdre ...

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

        <section className="foundersection">
          <Founders />
        </section>
        <section className="internsection">
          <Interns />
        </section>
        <div>
        <h1 align="center" style={{marginTop: -200, color: "#0040AA"}}>Nos Partenaires</h1>
        </div>
        <section className="partnerfooter">
         <PartnersSlide
        PartnersImages={PartnersImages} />
        </section>
    </>
    );
  };

  export default AboutUs;