import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { logout } from '../../actions/auth';
import { apiAuth } from '../../helpers/apiAuth';

import './Navbar.css';

export const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const { user, dispatchLogin } = useContext(AuthContext);

    const { name, logged } = user;

    const handleLogout = () => {
        dispatchLogin( logout() );
    }

    useEffect(() => {
        apiAuth.saveUser(user)
            .then(console.log)
            .catch(console.log)
    }, [user]);

    return (
        <nav className='navigation'>
            <a href='/' className='brand-name'>
                Christmas Gift App
            </a>

            <button className='hamburger' onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
                {
                    logged && (
                        <ul>
                            <li>
                                { name }
                            </li>

                            <li
                                onClick={handleLogout}
                            >
                                <a href='/'>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}