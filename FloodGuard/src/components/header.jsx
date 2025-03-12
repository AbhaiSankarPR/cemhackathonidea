import react from "react";
import { useNavigate } from "react-router-dom";
import './header.css';
function Header() {
    const navigate = useNavigate(); 
    return (
        <div className="home_header">
             <div className="logo" onClick={()=>navigate("/")}>
                    <h3>FloodGuard</h3>
             </div>
             <div className="Links">
                <nav>
                    <ul>
                        <li onClick={()=>navigate("/Floodmap")}>Live Flood map</li>
                        <li onClick={()=>navigate("/MissingPerson")}>Missing person</li>
                        <li onClick={()=>navigate("/Volunteer")} >Volunteer</li>
                        <li>Donate</li>
                        <li onClick={()=>navigate("/About")} >About</li>
                    </ul>
                </nav>
             </div>
        </div>
        
    );
}
export default Header;