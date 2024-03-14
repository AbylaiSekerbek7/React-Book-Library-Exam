import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFaceGrin } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer_main'>
                    <div className="tag">
                        <Link to={"/"}><img src="../../../public/images/logo.png" alt="Logo picture" /></Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum officia voluptates impedit quasi quam, delectus facilis harum accusamus iure iste nostrum saepe fuga quod? Quisquam iure veniam iste ratione.</p>
                    </div>
                    <div className="tag">
                        <h1>Quick Link</h1>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/books"}>Books</Link>
                        <Link to={"/search"}>Search</Link>
                    </div>
                    <div className="tag">
                        <h1>Contact Info</h1>
                        <a href="#"><FontAwesomeIcon icon={faPhone} /> + 7 707 888 9999</a>
                        <a href="#"><FontAwesomeIcon icon={faPhone} /> + 7 707 777 8888</a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} /> bookstore123@gmail.com</a>
                    </div>
                    <div className="tag">
                        <h1>Follow Us</h1>
                        <div className="social_link">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>
                </div>
                <p className='end'>Design By <span><FontAwesomeIcon icon={faFaceGrin}/> Sekerbek Abylaikhan and WT Master Code</span></p>
            </footer>
        </>
    )
}

export default Footer