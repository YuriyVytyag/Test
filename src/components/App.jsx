import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import CardList from './CardList/CardList';
// import Searchbar from './Searchbar/Searchbar';
// import Home from './Home/Home';

const CardList = lazy(() => import('./CardList/CardList'));
const Searchbar = lazy(() => import('./Searchbar/Searchbar'));
const Home = lazy(() => import('./Home/Home'));

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/test">
        <Searchbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tweets" element={<CardList />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
