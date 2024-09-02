import "../style/Card.css"
import { Link } from 'react-router-dom';

const Card = () =>{
    return <> 
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src="../images/Tartiflette.jpg"
        alt="Tartiflette" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Tartiflette</h2>
      <p class='text-card'>Commencer par cuire les pommes de terre dans l'eau bouillante. Puis épluchez les et coupez les en rondelles. Émincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le reblochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !</p>
      <div className="card-actions justify-space-between items-center">
        <p>60min - 4 personnes</p>
        <button className="btn"><Link to="/show-recipe">VOIR RECETTE</Link></button>
      </div>
    </div>
  </div></>
}
export default Card;