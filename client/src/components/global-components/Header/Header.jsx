import logo from "../../../assets/logo.png";
import "../Header/Header.css";

function Header() {
    return (
        <div className="header-main">
            <div className="header-sub-section">
                <div className="header-logo-div">
                    <img src={logo} className="header-logo" alt="logo" />
                </div>
                <div className="header-menu-div">
                    <nav>
                        <li>
                            <ul>
                                Home
                            </ul>
                            <ul>
                                Shop
                            </ul>
                            <ul>
                                About
                            </ul>
                            <ul>
                                Contact
                            </ul>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;