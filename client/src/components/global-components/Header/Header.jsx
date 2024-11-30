import logo from "../../../assets/logo.png";
import "../Header/Header.css";
import cartIcon from "../../../assets/carticon.png"

function Header() {
    return (
        <div className="header-main">
            <div className="header-sub-section">
                <div className="header-right-section">
                    <div className="header-logo-div">
                        <a href="#"><img src={logo} className="header-logo" alt="logo" /></a>
                    </div>
                    <div className="header-store-button">
                        <a href="#">Store</a>
                    </div>
                </div>
                <div className="header-left-section">
                    <div className="header-menu-div">
                        <nav>
                            <li>
                                <ul><a href="#">
                                    Home
                                </a>
                                </ul>
                                <ul><a href="#">
                                    Store</a>
                                </ul>
                                <ul><a href="#">
                                    About</a>
                                </ul>
                                <ul><a href="#">
                                    Contact</a>
                                </ul>
                            </li>
                        </nav>
                    </div>
                    <div className="header-cart-icon">
                        <button><img src={cartIcon} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;