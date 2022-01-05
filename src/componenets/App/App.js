import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
import { getData } from '../../apiCalls';
import ArticleCardContainer from '../ArticleCardContainer/ArticleCardContainer';
// import SingleArticle from '../SingleArticle/SingleArticle';

const App = () => {
  const [allArticles, setAllArticles] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    getData('home').then((data) => setAllArticles(data.results));
    // .catch((error) => setError(error));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <ArticleCardContainer allArticles={allArticles} />
    </div>
  );
};

export default App;
