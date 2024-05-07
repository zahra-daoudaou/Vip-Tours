import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
//import axios from 'axios';

function Partenaire() {

  const hotels = [
    { 'id_hotel': 1, 'logo': 'partners/10.png' },
    { 'id_hotel': 2, 'logo': 'partners/11.png' },
    { 'id_hotel': 3, 'logo': 'partners/12.png' },
    { 'id_hotel': 4, 'logo': 'partners/13.png' },
    { 'id_hotel': 5, 'logo': 'partners/14.png' },
    { 'id_hotel': 6, 'logo': 'partners/15.png' },
    { 'id_hotel': 7, 'logo': 'partners/16.png' },
    { 'id_hotel': 8, 'logo': 'partners/17.png' },
    { 'id_hotel': 9, 'logo': 'partners/18.png' },
    { 'id_hotel': 10, 'logo': 'partners/19.png' },
  ];

  return (
    <section id="partenaires">
      <div className="d-flex justify-content-center">
        <Card style={{ width: '80%' }}>
          <Card.Body>
            <h1 style={{ color: "#2C3892", fontWeight: "bold", fontSize: "60px", fontFamily: "Roboto", textAlign: "center" }}>Partenaires</h1>
            <div className="d-flex justify-content-around">
              <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                  {Array.isArray(hotels) && hotels.map(hotel => (
                    <div className="col" key={hotel.id_hotel}>
                      <div className="p-3">
                        <img src={hotel.logo} alt={hotel.nom} style={{ width: '150px', height: '150px' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default Partenaire;


/*
    { 'id_hotel': 11, 'logo': 'partners/20.png' },
    { 'id_hotel': 12, 'logo': 'partners/21.png' },
    { 'id_hotel': 13, 'logo': 'partners/22.png' },
    { 'id_hotel': 14, 'logo': 'partners/23.png' }
*/

/*
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/hotels')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);
  */