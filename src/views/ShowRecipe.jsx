import React from 'react';
import '../style/ShowRecipe.css';

const ShowRecipe = () => {
    return (
        <div class='container'>
            <div className="title">
                <h1>PATES A LA CARBONARA</h1>
            </div>
            <div className="desciption-title">
                (time) min . (nb) serve
            </div>
            <div className="container-image">
                <img src="../images/Tartiflette.jpg" alt="Tartiflette" className="image"/>
            </div>
            <div className="block-text">
                <div className="instructions">
                    <h2>INSTRUCTIONS</h2>
                    <p>Commencer par cuire les pommes de terre dans l'eau bouillante. Puis épluchez les et coupez les en rondelles. Émincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le reblochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !</p>
                </div>
                <div className="block">
                    <div className="internal-block ingredients">
                        <h4>INGRÉDIENTS</h4>
                        <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                            <li>(quantité) (unite) (ingrédients)</li>
                            <li>1 Reblochon</li>
                            <li>4.5kg Pommes de terre</li>
                            <li>2 tranches Jambon fumé</li>
                            <li>300g Oignon</li>
                            <li> 30cl Vin blanc sec</li>
                        </ul>
                    </div>
                    <div className="internal-block ustensils">
                        <h4>L'ÉQUIPEMENT DONT VOUS AVEZ BESOIN</h4>
                        <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                            <li>Four</li>
                            <li>plat à gratin</li>
                            <li>couteau</li>
                            <li>Économe</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowRecipe;