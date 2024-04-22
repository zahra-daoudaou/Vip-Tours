// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

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

function Guide() {

    console.log(guidesDetails);

    return (
        <div className="slide-container">
            {guidesDetails.length === 0 ? (
                <p className="card-text" style={{ color: '#2C3892' }}> No Guide to be found !!</p>
            ) : (
                <div style={{ justifyContent: 'center' }}>
                    {guidesDetails.map((g) => (
                        <div key={g.id_guide} className="card shadow" style={{ border: '0', width: '40rem', backgroundColor: '#FFFFFF', textAlign: 'center', margin: '10px' }}>
                            <div className="card-body" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="mx-auto col-4">
                                    <img src={g.photo} alt="guide" style={{ borderRadius: "50%", width: "150px", height: "150px", margin: " 0 auto", marginTop: "20px" }} />
                                </div>
                                {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <div className="col-8">
                                    <h4 className="card-title" style={{ fontWeight: 'bold', color: '#2C3892', display: 'inline-block', marginRight: '20px' }}>{g.name}</h4>
                                    <h5 className="card-text" style={{ color: '#2C3892', display: 'inline-block', marginRight: '20px' }}>{g.country}</h5>
                                    <img src={g.photo} alt="flag country" style={{ width: "50px", display: 'inline-block', marginLeft: '20px' }} />
                                    {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", textDecoration: 'underline', display: 'inline-block', marginRight: '50px' }}>{g.email} </p>
                                    <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", display: 'inline-block' }}>{g.num_tel} </p>
                                    {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", fontWeight: 'bold', display: 'inline-block', marginRight: '50px' }}>+{g.price}$ </p>
                                    <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", display: 'inline-block' }}> {g.nom_language.join(', ')} </p>
                                    {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", fontWeight: 'bold', display: 'inline-block', marginRight: '20px' }}>Rank: {g.rank} </p>
                                    <div className="mx-auto shadow" style={{ height: 'auto', width: '6rem', backgroundColor: '#FFFFFF', borderRadius: '25px', display: 'inline-block', marginRight: '20px' }}>
                                        <StarRatingComponent editing={false} name="Etoile" starCount={5} value={g.evaluation} />
                                    </div>
                                    <Button style={{ border: '0', height: '3rem', width: '9rem', backgroundColor: '#51ADE5', color: '#F4F4F4', fontWeight: 'bold', fontSize: 'large', display: 'inline-block', marginLeft: '20px' }} >
                                        <Link to="/" class="nav-link px-2 link-light"> Know more </Link>
                                    </Button>
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

// const [loading, setLoading] = useState(true);
// const [guides, setGuides] = useState([]);

// useEffect(() => {
//     axios.get(`http://localhost:8000/api/guides`)
//         .then(res => {
//             console.log(res)
//             setGuides(res.data.guides);
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error('Error fetching guides:', error);
//             setLoading(false);
//         });
// }, []);


// if (loading) {
//     return (
//         <Loading />
//     )
// }

// var guidesDetails = '';
// guidesDetails = guides;