import './ArticleCardContainer.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleCardContainer = ({ allArticles }) => {
  const articleCards = allArticles.map((article) => {
    return (
      <div className="articles">
        <ArticleCard
          title={article.title}
          section={article.section}
          multimedia={article.multimedia[0].url}
          id={article.title}
        />
      </div>
    );
  });

  return (
    <>
      <section className="articles-container">
        {allArticles.length ? (
          articleCards
        ) : (
          <h2 className="noMatch"> No results found </h2>
        )}
      </section>
    </>
  );
};

export default ArticleCardContainer;
