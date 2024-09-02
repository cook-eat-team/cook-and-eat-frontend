
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import Recipes from './views/Recipes';
import ListingUser from './views/ListingUser';
import EditUser from './views/EditUser';
import Header from './components/header';
import Footer from './components/Footer';
import Account from './views/Account';
import Dashboard from './views/Dashboard';
import AddRecipe from './views/AddRecipe';
import ShowRecipe from "./views/ShowRecipe";
import Register from './components/FormRegister';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/listing-users" element={<ListingUser />} />
        <Route path='/edit-user' element={<EditUser />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/showRecipe" element={<ShowRecipe />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
