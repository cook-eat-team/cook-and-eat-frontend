import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div>
        <h1>Dashboard</h1>
        <li><Link to="/add-recipe">Ajouter une recette</Link></li>

      </div>
    );
  }
  
  export default Dashboard;
  
