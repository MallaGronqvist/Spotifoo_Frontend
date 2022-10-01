import Logo from "../assets/logo.png";
import HomeIcon from "../assets/home.svg";
import Button from "./Button";

export default function NavigationBar() {
  return (
    
      <nav role="navigation" aria-label="navigation menu">
        <div className = "NavBackGround">
        <img className="logo" src={Logo} />
            <Button path={"../assets/home.svg"} label={"Home"} />
          
        </div>
    
      </nav>
    
  );
  }
