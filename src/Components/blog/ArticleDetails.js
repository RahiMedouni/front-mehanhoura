
const ArticleDetails = ({ params, articles }) => {

  const article = articles.find((elt) => elt.title === params.title);
  console.log({ articles });
  return (
    <div>
      <img
        src={article?.coverUrl}
        alt="article's cover"
        style={{ width: "100%", height: 200, textAlign: "center" }}
      />
       <h3>{article?.title}</h3>
      <h3>{article?.author}</h3>
    </div>
  );
};

export default ArticleDetails;