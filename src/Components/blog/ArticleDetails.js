
const ArticleDetails = ({ params, articles }) => {

  const article = articles.find((elt) => elt.title === params.title);
  console.log({ articles });



  return (
    <div>
    <div style={{
    marginTop: -75,
    width: "100%",
    height: "80vh",
    backgroundColor: "#0040AA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    }} >
      <img
        src={article?.articleImage}
        alt="article's cover"
        style={{ marginTop: 50, width: "80%", height: "70%", textAlign: "center" }}
      />
      </div>
      <div style={{
        marginTop: -10,
        height: "30vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}>
       <h2 style={{
        marginLeft: "12%"
      }}>{article?.title}</h2>
      <h4 style={{
        marginLeft: "13%",
        marginTop: -10
      }}>{article?.date}</h4>
      </div>
      <div style={{
        marginTop: -120,
        height: "100%",
        display: "block",
        backgroundColor: "white",
        paddingBottom: 50
      }}>
        <p style={{
          fontFamily: "Roboto",
        marginTop: -30,
        margin: "7%",
        letterSpacing: 1.2,
        lineHeight: 2,
        fontSize: 24,

        }}>
        {article?.content}
        </p>
      </div>
    </div>
  );
};

export default ArticleDetails;