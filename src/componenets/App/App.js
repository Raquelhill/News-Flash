import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
import { getData } from '../../apiCalls';
import ArticleCardContainer from '../ArticleCardContainer/ArticleCardContainer';
// import SingleArticle from '../SingleArticle/SingleArticle';

const App = () => {
  const [allArticles, setArticles] = useState([]);
  // const [error, setError] = useState('');

  const setData = (category) => {
    getData(category)
      .then((data) => setArticles(data.results))
      .catch((error) => console.log('error: ', error));
  };

  useEffect(() => {
    setData('world');
  }, []);

  return (
    <>
      <NavBar setData={setData} />
      <ArticleCardContainer allArticles={allArticles} />
    </>
  );
};

export default App;
