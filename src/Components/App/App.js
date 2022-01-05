import { useEffect, useState } from 'react';
import { getArticles } from '../../apiCalls';
import ArticleCardContainer from '../ArticleCardContainer/ArticleCardContainer';
import NavBar from '../NavBar/NavBar';
import './App.css';

const App = () => {
  const [allArticles, setAllArticles] = useState([]);

  const setData = (section) => {
    getArticles(section)
      .then((data) => setAllArticles(data.results))
      .catch((error) => console.log('error: ', error));
  };

  useEffect(() => {
    setData('home');
  }, []);

  return (
    <div className="App">
      <NavBar setData={setData} />
      <ArticleCardContainer allArticles={allArticles} />
    </div>
  );
};

export default App;
