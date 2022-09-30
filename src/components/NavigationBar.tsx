import Logo from "../assets/logo.png";
import HomeIcon from "../assets/home.svg";

export default function NavigationBar() {
  return (
    <nav className="NavBar" role="navigation" aria-label="navigation menu">
      <ul>
        <li>
          <img className="logo" src={Logo} />
        </li>
        <li>
          <button className="button"> <img className="homeIcon" src={HomeIcon} />Home</button>
        </li>
      </ul>
    </nav>
  );
}
