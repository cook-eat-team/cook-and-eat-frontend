import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Register.css'

const FormRegister = () => {
    return (
        <div className="container-register">
            <div className="form-register">
                <h1 className='title-register'>S’enregister</h1>
                <input type="text" placeholder="Nom:" className="input input-bordered w-full bg-inherit" />
                <input type="text" placeholder="Email:" className="input input-bordered w-full bg-inherit" />
                <input type="text" placeholder="Téléphone:" className="input input-bordered w-full bg-inherit" />
                <input type="text" placeholder="Mot de passe:" className="input input-bordered w-full bg-inherit" />
                <button className="btnForm mt-10 btn-register">S’enregistrer</button>
                <button className="btnForm mt-10 btn-login "><Link to='/login'>Vous avez déja un compte ? Se connecter</Link></button>
            </div>
        </div>
            
    );
};

export default FormRegister;