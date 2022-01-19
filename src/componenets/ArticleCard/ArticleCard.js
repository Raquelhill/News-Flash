import './ArticleCard.css';

const ArticleCard = ({ title, multimedia, section, url }) => {
  return (
    <div>
      <a href={url} target="blank" id="card-text">
        <article className="article-cards">
          <img
            className="card-poster"
            src={multimedia}
            alt={`${title} poster`}
          />
          <p className="section">{section}</p>
          <p className="title">{title}</p>
        </article>
      </a>
    </div>
  );
};

export default ArticleCard;
