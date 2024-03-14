import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const scrollToAbout = () => {
        const aboutElement = document.getElementById('about');
        aboutElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section>
                <nav>
                    <div className="logo">
                        <Link to={"/"}><img src="../../public/images/logo.png" alt="Logo picture" /></Link>
                    </div>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><a onClick={scrollToAbout}>About</a></li>
                        <li><Link to={'/books'}>Books</Link></li>
                        <li></li>
                    </ul>
                    <div className="social_icon">
                        <Link to={'/search'}><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Header