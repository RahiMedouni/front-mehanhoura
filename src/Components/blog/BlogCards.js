import "./BlogCards.css";
import BlogCard from "./BlogCard"

const BlogCards = (props, scrollToTop) => {

return (
    <div className="blogcards">
        <span className="articlelist">
        {props.articles.map((article, index) => (
        <BlogCard
          index={index}
          key={index}
          article={article}
          scrollToTop={scrollToTop}
        />
      ))}
        </span>
    </div>
)
}
export default BlogCards;