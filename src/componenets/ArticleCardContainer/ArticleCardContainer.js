import './ArticleCardContainer.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleCardContainer = ({ allArticles }) => {
  let counter = 0;
  const articleCard = allArticles.map((article) => {
    if (article.multimedia && article.title !== '') {
      return (
        <div>
          <ArticleCard
            key={counter++}
            title={article.title}
            date={article.published_date}
            section={article.section}
            subsection={article.subsection}
            multimedia={article.multimedia[0].url}
            url={article.url}
          />
        </div>
      );
    }
  });

  return <div className="article-container">{articleCard}</div>;
};

export default ArticleCardContainer;
