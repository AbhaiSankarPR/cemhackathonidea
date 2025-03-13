import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header.jsx";
import Sos from "./components/Sos.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Floodmap from "./pages/Floodmap.jsx";
import MissingPerson from "./pages/MissingPerson.jsx";
import SearchMissing from "./pages/SearchMissing.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import Community from "./pages/Community.jsx";
import TaskList from "./pages/TaskList.jsx";
import About from "./pages/About.jsx";
import Loading from "./styles/Loading";  // Import Loading component
import Register from "./pages/Registers.jsx";
import MissingList from "./pages/MissingList.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />  
            ) : (
                <Router>
                    <Sos />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Floodmap" element={<Floodmap />} />
                        <Route path="/MissingPerson" element={<MissingPerson />} />
                        <Route path="/SearchMissing" element={<SearchMissing />} />
                        <Route path="/Chatbot" element={<Chatbot />} />
                        <Route path="/Volunteer" element={<Volunteer />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/tasklist" element={<TaskList />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/community" element={<Community/>}/>
                        <Route path="/missinglist" element={<MissingList />} />

                    </Routes>
                </Router>
            )}
        </>
    );
}
export default App;
