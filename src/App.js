
import './style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import ListingUser from './views/ListingUser';
import EditUser from './views/EditUser';
import Header from './components/header';
import Footer from './components/Footer';
import Account from './views/Account';
import Dashboard from './views/Dashboard';
import AddRecipe from './views/AddRecipe';
import ShowRecipe from "./views/ShowRecipe";
import Register from './views/Register';
import Login from './views/Login'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listing-users" element={<ListingUser />} />
        <Route path='/edit-user' element={<EditUser />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/show-recipe/:id" element={<ShowRecipe />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
