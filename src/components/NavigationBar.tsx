import Logo from "../assets/logo.png";
import HomeIcon from "../assets/home.svg";
import Button from "./Button";

export default function NavigationBar() {
  return (
    <nav role="navigation" aria-label="navigation menu">
      <div className="NavBackGround">
        <img className="logo" src={Logo} />

        <button className="HomeButton">
          <svg className="Icon">
            <path className="Vector" d="../assets/home.svg" />
          </svg>
          <p className="HomeLabel">Home</p>
        </button>

        <button className="SearchButton">
          <svg className="Icon">
            <path className="Vector" d="../assets/search.svg" />
          </svg>
          <p className="SearchLabel">Search</p>
        </button>
      </div>
    </nav>
  );
}
