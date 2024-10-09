import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import GoodsPage from './pages/GoodsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/frontend-basics-react/" exact element={<HomePage />} />
        <Route path="/frontend-basics-react/goods" element={<GoodsPage />} />
      </Routes>
    </>
  );
}

export default App;
