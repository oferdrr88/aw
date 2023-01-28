// import React from 'react';

import './App.css';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Business from './auth/Business';
import Create_card from './pages/Create_card';
import Business_owners from './pages/Business_owners/Business_owners';
import { ToastContainer } from 'react-toastify';
import { RouteGuardAuth, RouteGuardNotAuth } from './auth/RouteGuard';
import AdminOnly from './auth/AdminOnly';
import Onecard from './components/card/Onecard';
import './App.css';
import { useEffect } from 'react';

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                navigate('/create_card');
            }
        }

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    return (
        <>
            <div className="App">
                <div>
                    <Header />
                    <ToastContainer />
                </div>

                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />

                    <Route
                        path="onecard/:id"
                        element={
                            <RouteGuardAuth>
                                <Onecard />
                            </RouteGuardAuth>
                        }
                    />
                    <Route
                        path="create_card"
                        element={
                            <RouteGuardAuth>
                                <Create_card />
                            </RouteGuardAuth>
                        }
                    />

                    <Route path="/admin" element={<AdminOnly />} />
                    <Route
                        path="business_owners"
                        element={
                            <RouteGuardAuth>
                                <Business_owners />
                            </RouteGuardAuth>
                        }
                    />
                    <Route path="business" element={<Business />} />

                    <Route
                        path="signup"
                        element={
                            <RouteGuardNotAuth>
                                <Signup />
                            </RouteGuardNotAuth>
                        }
                    />
                    <Route
                        path="login"
                        element={
                            <RouteGuardNotAuth>
                                <Login />
                            </RouteGuardNotAuth>
                        }
                    />
                    <Route
                        path="logout"
                        element={
                            <RouteGuardAuth>
                                <Logout handler={Logout} />
                            </RouteGuardAuth>
                        }
                    />
                </Routes>

                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
