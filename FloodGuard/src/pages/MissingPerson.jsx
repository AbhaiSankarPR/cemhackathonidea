import React from "react";
import { useNavigate } from "react-router-dom";
import './missingperson.css';
function MissingPerson() {
    const navigates = useNavigate();
    return(
        <div className="missingpersonpage">
            <div className="container-missing">
                <div className="missing-elements" onClick={()=>navigates("/Searchmissing")}><svg xmlns="http://www.w3.org/2000/svg" height="30dvh" viewBox="0 -960 960 960" width="15dvw" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                        Search
                </div>
                <div className="missing-elements"><svg xmlns="http://www.w3.org/2000/svg" height="30dvh" viewBox="0 -960 960 960" width="17dvw" fill="#e8eaed"><path d="M80-160v-160h160v160H80Zm240 0v-160h560v160H320ZM80-400v-160h160v160H80Zm240 0v-160h560v160H320ZM80-640v-160h160v160H80Zm240 0v-160h560v160H320Z"/></svg>List Missing People</div>
                <div className="missing-elements" onClick={()=>navigates("/Chatbot")}><svg xmlns="http://www.w3.org/2000/svg" height="30dvh" viewBox="0 -960 960 960" width="17dvw" fill="#e8eaed"><path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"/></svg>ChatBot</div>
            </div>
        </div>
    );
}
export default MissingPerson;