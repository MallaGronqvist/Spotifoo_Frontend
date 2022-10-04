import Logo from "../assets/logo.png";
import HomeIcon from "../assets/home.svg";
import Button from "./Button";

export default function NavigationBar() {

    return (
      <nav role="navigation" aria-label="navigation menu">
        <div className="NavBackGround">
          <img className="logo" src={Logo} />

          <button id="HomeButton">
            <svg className="Icon">
                <img src={HomeIcon} />
            </svg>
            <p id="HomeLabel">Home</p>
          </button>

          <button id="SearchButton">
            <svg className="Icon"></svg>
            <p id="SearchLabel">Search</p>
          </button>
        </div>
      </nav>
    );
};


