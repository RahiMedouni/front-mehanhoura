import ImageSlider from "./ImageSlider";
import images from "./BlogCoverCard";
import BlogCards from "./BlogCards";
import ArticleDetails from "./ArticleDetails";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import AddArticle from "./AddArticle";




const ArticlesDetails = (props, articles) => {
  let params = useParams();
  console.log({ articles });
  return (
    <div>
      <ArticleDetails params={params} articles={props.articles} />
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
	<div style={{
        height: "70vh",
        width: "100%",
        backgroundColor: "#0040AA"
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
              element={<ArticlesDetails articles={articles} />}
            />
    </Routes>
    
        
    </div>
)
}
export default MehanBlog;
