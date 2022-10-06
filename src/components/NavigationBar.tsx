import Logo from "../assets/logo.png";
import HomeIcon from "../assets/home.svg";
import SearchIcon from "../assets/search.svg"

import { useNavigate } from "react-router-dom";


export default function NavigationBar() {
let navigate = useNavigate();
    return (

      <nav id="navBar" role="navigation" aria-label="navigation menu">
        <div className="navBackGround">
          <img className="logo" src={Logo} />

          <button id="homeButton" onClick={() => {
            navigate("/");
          }}>
          <svg>
           
          </svg>
                 <embed className="vector" src= {HomeIcon} />
            
            <p id="homeLabel">Home</p>
          </button>
         
            

          <button id="searchButton" onClick={() => {
            navigate("/search");
          }}>
          <svg>
           
           </svg>
                  
            <p id="searchLabel">Search</p>
          </button>
        </div>
      </nav>
    );
};


