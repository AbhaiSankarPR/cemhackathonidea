import React from "react";
import './sos.css';
function Sos() {
    return(
        <div className="sos" onClick={()=>alert("SOS sent")}>
            SOS
        </div>
    )
}
export default Sos;