import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Link
          key={article.name}
          className="article-list-item"
          to={`/articles/${article.name}`}>
          {" "}
          {/**need to have key prop whenever anything has values that can dynamically change, in this case map method*/}
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
          {/**taking first paragraph from content property then grabbing just the 1st 150 char as sample to show the reader */}
        </Link>
      ))}
    </>
  );
};

export default ArticlesList;
