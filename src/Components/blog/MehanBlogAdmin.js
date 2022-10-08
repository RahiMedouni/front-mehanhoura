import ImageSlider from "./ImageSlider";
import images from "./BlogCoverCard";
import BlogCards from "./BlogCards";
import Article from "./Article";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import AddArticle from "./AddArticle";




const Articles = (props) => {
  let params = useParams();

  return (
    <div>
      <Article params={params} articles={props.articles} />
    </div>
  );
};


const MehanBlog = () => {

    const [articles, setArticles] = useState([
        {
          title: "The good doctor",
          description: "",
          coverUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
          category: "Électro-méager",
          content: "",
          date: "04/10/2022"
        },
        {
            title: "The good doctor",
            description: "book description",
            coverUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
            category: "plomberie",
            content: "",
            date: "04/10/2022"
          },
          {
            title: "The good doctor",
            description: "book description",
            coverUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
            category: "Électricité",
            content: "",
            date: "04/10/2022"
          },
          {
            title: "The good doctor",
            description: "book description",
            coverUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
            category: "plomberie",
            content: "",
            date: "04/10/2022"
          },
          {
            title: "The good doctor",
            description: "book description",
            coverUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
            category: "maçonerie",
            content: "",
            date: "04/10/2022"
          },
          {
            title: "The good doctor",
            description: "book description",
            coverUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
            category: "Électro-ménager",
            content: "",
            date: "04/10/2022"
          },
          {
            title: "The good doctor",
            description: "book description",
            coverUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
            category: "Électricité",
            content: "",
            date: "04/10/2022"
          },
          {
            title: "The good doctor",
            description: "book description",
            coverUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
            category: "maçonerie",
            content: "",
            date: "04/10/2022"
          },
      ]);

      

      const handleAddArticle = (newArticle) => {
        setArticles([...articles, newArticle]);
      };

      const BlogsCards = ({ articles, title }) => {
        return (
          <div>
            <AddArticle handleAddArticle={handleAddArticle} />
            <BlogCards
              articles={articles}
              handleAddArticle={handleAddArticle}
            />
          </div>
        );
      };
    
    

return (
    <div>
	<div style={{
        height: "60vh",
        width: "100%",
    }}>
        <ImageSlider
        images={images} />
        </div>
    <div>
        <BlogsCards articles = {articles} />
    </div>
    <Routes>
    <Route
              path="/blog/:title"
              element={<Articles articles={articles} />}
            />
    </Routes>
    
        
    </div>
)
}
export default MehanBlog;
