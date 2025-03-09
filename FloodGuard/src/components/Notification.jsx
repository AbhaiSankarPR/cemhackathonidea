import React from "react";
import { useEffect, useRef } from "react"
import './notification.css';
function Notification() {
    return(
        <div className="notification">
            <h3>Live Updates</h3>
            <div className="updates">
            [10:45 AM]: Heavy rainfall continues in Ernakulam and Thrissur; authorities issue orange alert.
<br></br>
[11:00 AM]: Water level in Periyar River rises by 1.2 meters, warning issued for low-lying areas.
<br></br>
[11:15 AM]: Water level in Periyar River rises by 1.2 meters, warning issued for low-lying areas.
<br></br>
[12:00 PM]: Rescue teams deployed in Alappuzha as houses get submerged floodwaters.
<br></br>
[12:30 PM]: Power supply disrupted in Kottayam due to fallen electric poles. Restoration efforts underway.
<br></br>
[01:00 PM]: Real-time satellite monitoring detects severe waterlogging in Kochi city.
<br></br>
[01:30 PM]: Over 200 stranded individuals rescued by NDRF teams in Pathanamthitta.
<br></br>
[02:15 PM]: Traffic diversions announced in Wayand
            </div>
        </div>
    );
}
export default Notification;