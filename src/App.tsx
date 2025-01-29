import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/add-recipe" element={<AddRecipe />} /> {/* Add Recipe Page */}
        
      </Routes>
    </Router>
  );
};

export default App;
