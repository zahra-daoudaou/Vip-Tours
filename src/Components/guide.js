import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import SearchBar from "./SearchBar";

const images = [
    {
        "id_img": 1,
        'photo': 'guides.jpeg',

    },
    {
        "id_img": 2,
        "id_compte": 2,
    },
    {
        "id_img": 3,
        'photo': 'guides.jpeg',
    }
];

function Guide() {

    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [guidesDetails, setGuidesDetails] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/guides')
            .then(response => {
                setGuides(response.data);
                setGuidesDetails(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching guides:', error);
                setLoading(true)
            });
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }

    console.log(typeof guidesDetails);
    console.log(guidesDetails);

    return (
        <div className="slide-container">
            <SearchBar />
            {Object.keys(guidesDetails).length === 0 ? (
                <p className="card-text" style={{ color: '#2C3892' }}> No Guide to be found !!</p>
            ) : (
                <div style={{ justifyContent: 'center' }}>
                    {Object.values(guidesDetails).map((g) => (
                        <div key={g.id_guide} className="card shadow" style={{ border: '0', width: '50rem', backgroundColor: '#FFFFFF', textAlign: 'center', margin: '10px' }}>

                            <div className="card-body" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="col-8">
                                    <div className="row" style={{ marginBottom: '10px' }}>
                                        <div className="col">
                                            <h4 className="card-title d-inline" style={{ fontWeight: 'bold', color: '#2C3892' }}>{g.name}</h4>
                                            <h5 className="card-text d-inline" style={{ color: '#2C3892' }}>{g.country}</h5>
                                            <img className="d-inline" src={g.photo} alt="flag country" style={{ width: "50px" }} />
                                        </div>
                                    </div>

                                    <div className="row" style={{ marginBottom: '10px' }}>
                                        <div className="col">
                                            <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", textDecoration: 'underline' }}>{g.email}</p>
                                            <p className="card-text" style={{ color: '#2C3892', fontSize: "20px" }}>{g.num_tel}</p>
                                        </div>
                                    </div>

                                    <div className="row" style={{ marginBottom: '10px' }}>
                                        <div className="col">
                                            <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", fontWeight: 'bold' }}>+{g.price}$</p>
                                            <p className="card-text" style={{ color: '#2C3892', fontSize: "20px" }}>
                                                {g.nom_language && Array.isArray(g.nom_language) ? g.nom_language.join(', ') : ''}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", fontWeight: 'bold' }}>Rank: {g.rank}</p>
                                            <div className="mx-auto shadow" style={{ height: 'auto', width: '6rem', backgroundColor: '#FFFFFF', borderRadius: '25px' }}>
                                                <StarRatingComponent editing={false} name="Etoile" starCount={5} value={g.evaluation} />
                                            </div>
                                            <Button style={{ border: '0', height: '3rem', width: '9rem', backgroundColor: '#51ADE5', color: '#F4F4F4', fontWeight: 'bold', fontSize: 'large' }}>
                                                <Link to="/" className="nav-link px-2 link-light">Know more</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Guide;




//{ filteredPrice }
//const filteredGuides = guidesDetails.filter(g => g.price <= filteredPrice);
//onSearch={handleSearch}

/*
const guidesDetails = [
    {
        "id_guide": 1,
        "name": "Alice Smith",
        "country": "France",
        "email": "alice@example.com",
        "num_tel": "+33 123456789",
        "nom_language": ["Arabic", "English", "French", "Spanish"],
        "description": "Friendly and knowledgeable guide",
        "evaluation": 5,
        "cin": "AB123456",
        "specialite": "History",
        "price": 50,
        'photo': 'guides.jpeg',
        "id_compte": 1,
        "rank": 1
    },
    {
        "id_guide": 2,
        "name": "Bob Johnson",
        "country": "UK",
        "email": "bob@example.com",
        "num_tel": "+44 987654321",
        "nom_language": ["Arabic", "English", "French", "Spanish"],
        "description": "Helpful and informative guide",
        "evaluation": 4,
        "cin": "CD654321",
        "specialite": "Art",
        "price": 60,
        'photo': 'guides.jpeg',
        "id_compte": 2,
        "rank": 1
    },
    {
        "id_guide": 3,
        "name": "Charlie Brown",
        "country": "USA",
        "email": "charlie@example.com",
        "num_tel": "+1 5551234567",
        "nom_language": ["Arabic", "English", "French", "Spanish"],
        "description": "Professional and experienced guide",
        "evaluation": 5,
        "cin": "EF987654",
        "specialite": "Nature",
        "price": 55,
        'photo': 'guides.jpeg',
        "id_compte": 3,
        "rank": 3
    }
];
*/