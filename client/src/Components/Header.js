import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar">
                    <img src="" style={{ maxWidth: '48px', maxHeight: '48px' }} alt="NOIMG" />

                    <ul className="nav-item">
                        <li className="li-item">
                            <Link to="/home" className='link-item'>Home</Link>
                        </li>
                        <li className="li-item">
                            <Link to="/about" className='link-item'>Quiénes somos</Link>
                        </li>
                        <li className="li-item">
                            <Link to="/contact" className='link-item'>Contactanos</Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default Header;