import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logaut from '../auth/Logout';
import { rmoveAll } from '../auth/tokenMgmt';
import User from './user/User';
import './user/user.css';

function Header() {
    const [userName, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('USER');

        if (!name) return;
        setUsername(name);
    }, []);

    function handelLogout() {
        // removeToken()
        rmoveAll();
        toast.success('Disconnected successfully');
        setUsername('');
        navigate('/login');
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <div className=" navbar-collapse" id="navbarNav  ">
                            <ul className="navbar-nav">
                                <li className="nav-item  ">
                                    <NavLink className="nav-link active navbar-brand fs-6" aria-current="page" to="/">
                                        Animal <i className="fas fa-dragon "></i> World
                                    </NavLink>
                                </li>
                            </ul>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active navbar-brand fs-6" aria-current="page" to="About">
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {!userName && (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active navbar-brand fs-6" aria-current="page" to="Signup">
                                        <i className="bi bi-card-text p-1"></i>
                                        Signup
                                    </NavLink>
                                </li>
                            </ul>
                        )}

                        {userName && (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active navbar-brand fs-6" aria-current="page" to="/admin">
                                        <i className="bi bi-card-text p-1"></i>
                                        admin
                                    </NavLink>
                                </li>
                            </ul>
                        )}

                        {!userName && (
                            <ul className="navbar-nav">
                                <li className="nav-item nav-bar">
                                    <NavLink className="nav-link active navbar-brand fs-6" aria-current="page" to="Login">
                                        <i className="bi bi-box-arrow-in-right p-1 "></i>
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                        {userName && (
                            <ul className="navbar-nav ">
                                <li className="nav-item ">
                                    <Logaut handler={handelLogout} />
                                </li>
                            </ul>
                        )}
                    </div>
                </nav>
                <User userName={userName} />
            </header>
        </>
    );
}

export default Header;
