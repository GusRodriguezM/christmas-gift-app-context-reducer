import React, { useState } from 'react';

import './Navbar.css';

export const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className='navigation'>
            <a href='/' className='brand-name'>
                Christmas Gift App
            </a>

            <button className='hamburger' onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
                <ul>
                    <li>
                        <a href='/'>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}