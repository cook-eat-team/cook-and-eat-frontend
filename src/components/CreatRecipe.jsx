import React from 'react';
import '../style/CreatRecipe.css';
const CreatRecipe = () => {
    return (
        <div class='formRecipe'>

            <h1>CRÉER UNE RECETTE</h1>

            <div class='formRecipe-block'>

                <div class='formRecipe-block-1 block'>
                    <input type="text" placeholder="Nom:" className="input input-bordered w-full" />
                    <input type="text" placeholder="Nombre de personnes:" className="input input-bordered w-full" />
                    <input type="text" placeholder="Temps:" className="input input-bordered w-full" />
                    <input type="text" placeholder="Description:" className="input input-bordered w-full" />
                    <input type="text" placeholder="Appareil:" className="input input-bordered w-full" />
                    <input type="text" placeholder="Ustensiles:" className="input input-bordered w-full" />
                </div>

                <div class='formRecipe-block-2 block'>
                    <div class='formRecipe-internal-blobk-2-1'>
                        <input type="text" placeholder="Quantité:" className="input input-bordered w-full" />
                    </div>

                    <div class='formRecipe-block-3'>
                        <div class='formRecipe-internal-block-3-1'>
                            <input type="text" placeholder="Ingrédients:" className="input input-bordered w-full semi-block" />
                            <input type="text" placeholder="Ingrédients:" className="input input-bordered w-full semi-block" />
                            <input type="text" placeholder="Ingrédients:" className="input input-bordered w-full semi-block" />
                            <input type="text" placeholder="Ingrédients:" className="input input-bordered w-full semi-block" />
                        </div>
                        <div class='formRecipe-internal-block-3-2'>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Unité:</option>
                                <option>g</option>
                                <option>kg</option>
                                <option>ml</option>
                                <option>cl</option>
                                <option>litre</option>
                                <option>cs (cuillère a soupe)</option>
                                <option>cf (cuillère a café)</option>
                                <option>tranches</option>
                            </select>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Unité:</option>
                                <option>g</option>
                                <option>kg</option>
                                <option>ml</option>
                                <option>cl</option>
                                <option>litre</option>
                                <option>cs (cuillère a soupe)</option>
                                <option>cf (cuillère a café)</option>
                                <option>tranches</option>
                            </select>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Unité:</option>
                                <option>g</option>
                                <option>kg</option>
                                <option>ml</option>
                                <option>cl</option>
                                <option>litre</option>
                                <option>cs (cuillère a soupe)</option>
                                <option>cf (cuillère a café)</option>
                                <option>tranches</option>
                            </select>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Unité:</option>
                                <option>g</option>
                                <option>kg</option>
                                <option>ml</option>
                                <option>cl</option>
                                <option>litre</option>
                                <option>cs (cuillère a soupe)</option>
                                <option>cf (cuillère a café)</option>
                                <option>tranches</option>
                            </select>
                        </div>
                    </div>
                    <div class='formRecipe-block-4'>
                        <input type="file" className="file-input w-full max-w-xs" />
                    </div>
                </div>
            </div>
            <button className="btnForm">Créer la recette</button>
        </div>
    )
}
export default CreatRecipe;
