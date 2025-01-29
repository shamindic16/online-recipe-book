import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import Recipes from './pages/Recipes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/add-recipe" element={<AddRecipe />} /> {/* Add Recipe Page */}
        <Route path="/recipes" element={<Recipes />} /> {/* View Recipes Page */}
      </Routes>
    </Router>
  );
};

export default App;
