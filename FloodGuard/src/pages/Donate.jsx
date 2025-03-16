import React from "react";
import { useNavigate } from "react-router-dom";
import './missingperson.css';
function MissingPerson() {
    const navigates = useNavigate();
    return(
        <div className="missingpersonpage">
            <div className="container-missing">
                <div className="missing-elements" onClick={()=>navigates("/Donation")}><svg xmlns="http://www.w3.org/2000/svg" height="30dvh" viewBox="0 -960 960 960" width="17dvw" fill="#e8eaed"><path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z"/></svg>
                Donate
                </div>
                <div className="missing-elements" onClick={()=>navigates("/TRACK")}><svg xmlns="http://www.w3.org/2000/svg" height="30dvh" viewBox="0 -960 960 960" width="17dvw" fill="#e8eaed"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/></svg>Track Your Donation</div>
                <div className="missing-elements" onClick={()=>navigates("/Greivance")}><svg xmlns="http://www.w3.org/2000/svg" height="30dvh" viewBox="0 -960 960 960" width="17dvw" fill="#e8eaed"><path d="M320-400h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>Greivience</div>
            </div>
        </div>
    );
}
export default MissingPerson;