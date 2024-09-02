
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import Header from './components/Header';
import Moncompte from './views/Moncompte';
import Recipes from './views/Recipes';
import Dashboard from './views/Dashboard';
import AddRecipe from './views/AddRecipe';
import Login from './views/Login';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/moncompte" element={<Moncompte />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        

      </Routes>
    </Router>
  );
}

export default App;
