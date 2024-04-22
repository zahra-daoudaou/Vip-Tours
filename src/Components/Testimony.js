import React from "react";
import StarRatingComponent from 'react-star-rating-component';

function Testimony() {

    const temoignageTable = [
        { id_temoignage: 1, description: 'Great experience!', etoile: 5, image: 'merakech.jpeg', name: 'John Doe', country: 'France' },
        { id_temoignage: 2, description: 'Very helpful guide.', etoile: 4, image: 'merakech.jpeg', name: 'Jane Smith', country: 'UK' },
        { id_temoignage: 3, description: 'Could be better.', etoile: 3, image: 'merakech.jpeg', name: 'Alice Wonder', country: 'USA' }
    ];
    console.log(temoignageTable);

    return (
        <div className="slide-container">
            {temoignageTable.length === 0 ? (
                <p class="card-text" style={{ color: '#2C3892' }}> Be the first to give us a Testimony !!</p>
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {temoignageTable.map((t) => (
                        <div key={t.id_temoignage} className="card"
                            style={{ width: '18rem', backgroundColor: '#F4F4F4', textAlign: 'center', margin: '10px' }}>
                            <div className="card-body">
                                <div className="mx-auto">
                                    <img src={t.image} alt="user" style={{ width: '50%', borderRadius: '50%' }} />
                                </div>
                                <p className="card-text" style={{ color: '#2C3892' }}>"{t.description}"</p>
                                <h5 className="card-title" style={{ color: '#2C3892' }}>{t.name}, {t.country}</h5>
                                <div className="mx-auto shadow" style={{ width: '35%', backgroundColor: '#FFFFFF', borderRadius: '25px' }}>
                                    <StarRatingComponent
                                        name="Etoile"
                                        starCount={5}
                                        value={t.etoile}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Testimony;