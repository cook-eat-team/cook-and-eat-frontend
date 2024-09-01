
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import Header from './components/Header';
import Account from './views/Account';
import Recipes from './views/Recipes';
import Dashboard from './views/Dashboard';
import AddRecipe from './views/AddRecipe';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addRecipe" element={<AddRecipe />} />

      </Routes>
    </Router>
  );
}

export default App;
