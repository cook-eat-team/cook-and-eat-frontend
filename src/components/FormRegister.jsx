import React from 'react';
import '../style/Register.css'

const FormRegister = () => {
    return (
        <div className="container-register">
            <div className="form-register">
                <h1 className='mb-20'>S’enregister</h1>
                <input type="text" placeholder="Nom:" className="input input-bordered w-full bg-inherit" />
                <input type="text" placeholder="Nombre de personnes:" className="input input-bordered w-full bg-inherit" />
                <input type="text" placeholder="Temps:" className="input input-bordered w-full bg-inherit" />
                <input type="text" placeholder="Description:" className="input input-bordered w-full bg-inherit" />
                <input type="text" placeholder="Appareil:" className="input input-bordered w-full bg-inherit" />
                <button className="btnForm mt-10 btn-register">S’enregistrer</button>
                <button className="btnForm mt-10 btn-login ">Vous avez déja un compte ? Se connecter</button>
            </div>
        </div>
            
    );
};

export default FormRegister;