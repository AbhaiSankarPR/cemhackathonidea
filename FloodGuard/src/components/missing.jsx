import React from "react";
import "./missing.css"; 

const MissingList = () => {
    const missingPersons = [
        { id: 1, name: "John Doe", age: 32, lastSeen: "New York, 2024-03-10" },
        { id: 2, name: "Jane Smith", age: 28, lastSeen: "Los Angeles, 2024-03-08" },
        { id: 3, name: "Mike Johnson", age: 45, lastSeen: "Chicago, 2024-02-25" },
        { id: 4, name: "John Doe", age: 32, lastSeen: "New York, 2024-03-10" },
        { id: 5, name: "John Doe", age: 32, lastSeen: "New York, 2024-03-10" },

    ];

    return (
        <div className="missingpage">
            <div className="container">
                <div className="title">Missing Person List</div>
                <div className="missing-list">
                    {missingPersons.map((person) => (
                        <div className="missing-card" key={person.id}>
                            <h3>{person.name}</h3>
                            <p>Age: {person.age}</p>
                            <p>Last Seen: {person.lastSeen}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MissingList;
