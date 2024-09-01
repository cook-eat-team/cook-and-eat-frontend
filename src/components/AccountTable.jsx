import React from 'react';
import { Link } from 'react-router-dom';
import '../style/AccountTable.css';

const AccountTable = () => {
    return (
        <div className='table-container'>
            <h1>DÉTAILS DU COMPTE</h1>

            <div className="table-content">
                <div className="table-content-1">
                    <p className='ml-2'>Détails du compte</p>
                </div>
                <div className="table-content-2">
                    <p className='ml-2'>username@username.io</p>
                    <Link to='/editUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </Link>
                </div>
                <div className="table-content-2">
                    <p className='ml-2'>Password: **********</p>
                    <Link to='/editUser'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </Link>
                </div>
                <div className="table-content-3">
                    <Link to='/logout'><button>Deconnexion</button></Link>
                </div>
            </div>

            <div className="table-content">
                <div className="table-content-1">
                    <p className='ml-2'>Paramètre du compte</p>
                </div>
                <div className="table-content-2-1">
                    <p className='ml-2'>Delete Account</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default AccountTable;