import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-col items-center gap-2">
        <a className="btn"><Link to="/add-recipe">Ajouter une recette</Link></a>
        <a className="btn"><Link to="/listing-users">Voir tous les utilisateurs</Link></a>
      </div>
    </div>
  );
};

export default Dashboard;
