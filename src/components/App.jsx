import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import CardList from './CardList/CardList';
import Searchbar from './Searchbar/Searchbar';
import Home from './Home/Home';

export const App = () => {
  return (
    <Router>
      <>
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<CardList />} />
        </Routes>
      </>
    </Router>
  );
};
