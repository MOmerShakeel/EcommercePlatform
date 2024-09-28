import "../TopBar/TopBar.css"
import barIcon from "../../../assets/carticon.png"

function TopBar (){
    return (
    <div className="topbar-main-div">
        <div className="topbar-primary">
            <div className="topbar-tagline">Upto 20% off on all products!</div>
            <div className="topbar-icon"><img src={barIcon} /></div>
            <div className="topbar-tagline">Upto 20% off on all products!</div>
            <div className="topbar-icon"><img src={barIcon} /></div>
            <div className="topbar-tagline">Upto 20% off on all products!</div>
            <div className="topbar-icon"><img src={barIcon} /></div>
            <div className="topbar-tagline">Upto 20% off on all products!</div>
            <div className="topbar-icon"><img src={barIcon} /></div>
            <div className="topbar-tagline">Upto 20% off on all products!</div>
            <div className="topbar-icon"><img src={barIcon} /></div>
            <div className="topbar-tagline">Upto 20% off on all products!</div>
            <div className="topbar-icon"><img src={barIcon} /></div>
        </div>
    </div>
    );
}

export default TopBar;