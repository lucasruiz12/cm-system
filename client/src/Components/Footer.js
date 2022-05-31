import '../css/Footer.css'

function Footer() {
    return (
        <div className="container">
            <footer className="footer">
                <p className='msg'>Seguinos en nuestras redes sociales</p>
                <div className="footer-content">
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="https://www.facebook.com/">
                                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="NOIMG" />
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="https://www.instagram.com/">
                                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="NOIMG" />
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="https://www.twitter.com/">
                                <img src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="NOIMG" />
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="https://www.youtube.com/">
                                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="NOIMG" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;