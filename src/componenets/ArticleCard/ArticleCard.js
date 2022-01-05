import './ArticleCard.css';

const ArticleCard = ({ title, published_date, multimedia, id }) => {
  return (
    <div>
      <article className="article-cards">
        <p>{title}</p>
        <p>{published_date}</p>
        <img className="card-poster" src={multimedia} alt={`${title} poster`} />
      </article>
    </div>
  );
};

export default ArticleCard;
