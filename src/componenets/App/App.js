import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
import { getData } from '../../apiCalls';
import ArticleCardContainer from '../ArticleCardContainer/ArticleCardContainer';
// import SingleArticle from '../SingleArticle/SingleArticle';

const App = () => {
  const [allArticles, setAllArticles] = useState([]);
  // const [error, setError] = useState('');

  useEffect(() => {
    getData('home').then((data) => setAllArticles(data.results));
    // .catch((error) => setError(error.message));
  }, []);

  // return (
  //   <main className="App">
  //     <Route
  //       exact
  //       path="/"
  //       render={() => {
  return (
    <>
      <NavBar />
      <ArticleCardContainer allArticles={allArticles} />
    </>
  );
  //   }}
  // />
  // {/* <Route
  //   exact
  //   path="/:id"
  //   render={({ match }) => {
  //     const currentArticleId = match.params.id;
  //     return <SingleArticle id={currentArticleId} />;
  //   }}
  // /> */}
  //   </main>
  // );
};

export default App;
