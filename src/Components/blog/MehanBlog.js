import ImageSlider from "./ImageSlider";
import images from "./BlogCoverCard";
import BlogCards from "./BlogCards";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import AddArticle from "./AddArticle";
import { animateScroll } from 'react-scroll';


const MehanBlog = (scrollToTop) => {


  const [articles, setArticles] = useState([
    {
      title: "Le Ramonage",
      description: "Le ramonage des conduits de fumées",
      articleImage:"../signes.svg",
      category: "Électro-méager",
      content: "Le ramonage des conduits de fumées  : une nécessité absolue avant l'arrivée de l'hiver, Malgré les campagnes de sensibilisation continue, le ramonage des cheminées et des conduits de fumées fait partie des tâches ignorées par les familles algériennes, bien qu'il entraîne malheureusement de nombreuses catastrophes chaque année . En plus de l'entretien des appareils de chauffage, il faut veiller à ramoner les cheminées et les bouches d'aération des maisons et des  immeubles , par le nettoyage de la paroi intérieur des conduits  pour éliminer les suies et les dépôts de cendres accumulés tout au long de la saison de chauffe, ou encore les nids d'oiseaux qui prennent  ces canaux comme refuge. Le ramonage des cheminées a plusieurs avantages tels que éviter le danger des incendies, car les dépôts de cendres et d'autres particules le long du conduit peuvent s'embraser et propagent l'incendie au reste de la maison. On peut aussi éviter l'intoxication  au monoxyde de carbone; ce tueur silencieux qui fait chaque année des centaines de victimes, car sans un nettoyage adéquat des conduits de fumées les  particules de ce  gaz toxique  s'accumulent  à l'intérieur de la maison au lieu de  s’évacuer à l'extérieur. Du côté économique, le nettoyage constant de ces cheminées garantit le bon fonctionnement des appareils de chauffage, ce qui prolonge leur durée de vie. C'est pourquoi nous vous conseillons de se préparer à  l'hiver par l'effectuation de  cette tâche par un artisan spécialiste  .Vous pouvez désormais chercher l'artisan le plus proche de votre lieu de résidence grâce à notre application 'mehan houra' ",
      date: "04/10/2022",
      fbLink: "https://www.facebook.com/sharer/sharer.php?u=https://www.housecallpro.com/resources/marketing/the-cost-of-running-an-hvac-business/",

    },
    {
      title: "Les symptômes de l'intoxication au monoxyde de carbone",
      description: "L'hiver se rapproche, et  le danger d'intoxication au monoxyde",
      articleImage: "../symptomes.svg",
      category: "plomberie",
      content: "L'hiver se rapproche, et  le danger d'intoxication au monoxyde de carbone revient sur le devant de la scène. Malgré les campagnes de sensibilisation lancées par les autorités responsables, on entend à chaque fois de nombreuses histoires tristes de victimes dont le nombre augmente chaque année. Le monoxyde de carbone  est un gaz incolore qui peut provenir de l'un des éléments suivants : 🔴Chauffe-eau 🔴 Cheminée 🔴Cheminée traditionnelle 🔴 Les cuisinières  Pour prévenir les dangers de ces appareils, il faut éviter : ✅le manque d'aération ✅l'Absence de suivi périodique des appareils  ✅l'Utilisation de matériel non conforme aux normes de sécurité ✅l'Utilisation d'appareils non destinés au chauffage 🔹Pour éviter ce danger, vous pouvez vous renseigner sur ses causes, les symptômes d'inhalation et les méthodes de prévention dans la publication suivante",
      date: "04/10/2022",
      fbLink: "https://www.facebook.com/sharer/sharer.php?u=https://www.housecallpro.com/resources/marketing/the-cost-of-running-an-hvac-business/",

    },
  ]);

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0
    });
}, [window.location.pathname]);

  // const handleAddArticle = (newArticle) => {
  //   setArticles([...articles, newArticle]);
  // };

  const BlogsCards = ({ articles, title }) => {
    return (
      <div>
        <BlogCards
          articles={articles}
          //handleAddArticle={handleAddArticle}
          title={title}
        />
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          height: "70vh",
          width: "100%",
          backgroundColor: "#0040AA",
        }}
      >
        <ImageSlider images={images} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <BlogsCards articles={articles} scrollToTop={scrollToTop} />
            </div>
          }
        />

      </Routes>
    </div>
  );
};
export default MehanBlog;
