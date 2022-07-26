import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { logout } from '../../actions/auth';
import { apiAuth } from '../../helpers/apiAuth';

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
        <nav className='navbar'>
            <a href='/' className='navbar__brand-name'>
                Christmas Gift App
            </a>

            <button className='navbar__hamburger' onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className={isNavExpanded ? 'navbar__navigation-menu expanded' : 'navbar__navigation-menu'}>
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