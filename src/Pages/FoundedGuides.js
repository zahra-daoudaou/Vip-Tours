import React from 'react';
import { useParams } from 'react-router-dom';

function FoundedGuides() {

    const compteTable = [
        { id_compte: 1, login: 'john_doe', motpass: 'password123', type_Compte: 'admin', nom: 'John Doe', email: 'john.doe@example.com', num_tel: 1234567890, photo: 'john.jpg', ville: 'Paris', pays: 'moldova' },
        { id_compte: 2, login: 'jane_smith', motpass: 'pass123', type_Compte: 'user', nom: 'Jane Smith', email: 'jane.smith@example.com', num_tel: 987654321, photo: 'jane.jpg', ville: 'London', pays: 'United states' },
        { id_compte: 3, login: 'alice_wonder', motpass: 'alicepass', type_Compte: 'user', nom: 'Alice Wonder', email: 'alice.wonder@example.com', num_tel: 555555555, photo: 'alice.jpg', ville: 'New York', pays: 'MAyotte' }
    ];

    const { country } = useParams();

    const filteredGuides = compteTable.filter((guide) => guide.pays.toUpperCase() === country.toUpperCase());

    
    return (
        <div>
            <div>
                <h1>Guides from {country}</h1>
            </div>
            {filteredGuides.length === 0 ? (
                <p>No guides found from {country} !!</p>
            ) : (
                <ul>
                    {filteredGuides.map((guide, index) => (
                        <li key={index}>{guide.nom}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FoundedGuides;
