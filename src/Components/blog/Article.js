
const Article = ({ params, articles }) => {
  // const [questions, setQuestions] = useState([]);

  const article = articles.find((elt) => elt.title === params.title);
  console.log({ articles });
  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2>{article?.title}</h2>
      </div> */}
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

export default Article;
