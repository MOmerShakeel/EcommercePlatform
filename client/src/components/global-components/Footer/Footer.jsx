import logo from "../../../assets/logo.png"

function Footer() {
    return <>
        <div>
            <div><img src={logo} /></div>
            <div><h3>Important Links</h3>
                <ul><li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li></ul>
            </div>
            <div><ul>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul></div>
        </div>
    </>
}

export default Footer;