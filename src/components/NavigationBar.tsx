import Logo from "../assets/logo.png";
import HomeIcon from "../assets/home.svg";
import Button from "./Button";

export default function NavigationBar() {

    return (
      <nav id="navBar" role="navigation" aria-label="navigation menu">
        <div className="navBackGround">
          <img className="logo" src={Logo} />

          <button id="homeButton">
          <svg>
           
          </svg>
                 <embed className="vector" src= {HomeIcon} />
            
            <p id="homeLabel">Home</p>
          </button>

          <button id="searchButton">
            <svg className="icon"></svg>
            <p id="searchLabel">Search</p>
          </button>
        </div>
      </nav>
    );
};


