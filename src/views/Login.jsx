import React from "react";
import '../style/Login.css'

const Login = () => {
  return (
    <div className="container-login">
      <div className="form-login">
        <h1 className="title-login">Se connecter</h1>
        <input
          type="text"
          placeholder="Email:"
          className="input input-bordered w-full bg-inherit"
        />
        <input
          type="text"
          placeholder="Mot de passe:"
          className="input input-bordered w-full bg-inherit"
        />
        <button className="btnForm mt-10 btn-register">S’enregistrer</button>
      </div>
    </div>
  );
};

export default Login;
