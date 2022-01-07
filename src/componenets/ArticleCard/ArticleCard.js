import './ArticleCard.css';

const ArticleCard = ({ title, multimedia, section, id }) => {
  return (
    <div>
      <article className="article-cards">
        <img className="card-poster" src={multimedia} alt={`${title} poster`} />
        <p className="section">{section}</p>
        <p className="title">{title}</p>
      </article>
    </div>
  );
};

export default ArticleCard;
