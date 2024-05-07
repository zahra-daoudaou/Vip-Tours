import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Location() {

    const [continents, setContinents] = useState([]);
    const [countriesByContinent, setCountriesByContinent] = useState({});

    useEffect(() => {
        async function fetchContinents() {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const uniqueContinents = [...new Set(response.data.map(country => country.region))];
                setContinents(uniqueContinents.filter(region => region !== ""));
            } catch (error) {
                console.error("Error fetching continents:", error);
            }
        }

        fetchContinents();
    }, []);

    useEffect(() => {
        async function fetchCountriesByContinent(continent) {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/region/${continent}`);
                setCountriesByContinent(prevState => ({ ...prevState, [continent]: response.data }));
            } catch (error) {
                console.error(`Error fetching countries for ${continent}:`, error);
            }
        }

        continents.forEach(continent => {
            fetchCountriesByContinent(continent);
        });
    }, [continents]);

    return (
        <div className="d-flex justify-content-start">
            <Card style={{ width: '90%', height: '24rem', overflowY: 'scroll' }}>
                <div className='Accordion'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F68712' }}>
                        <h3>Location</h3>
                    </div>
                    {continents.map((continent, index) => (
                        <Accordion key={index}>
                            <Accordion.Item eventKey={index.toString()}>
                                <Accordion.Header>{continent}</Accordion.Header>
                                <Accordion.Body>
                                    {countriesByContinent[continent] &&
                                        countriesByContinent[continent].map((country, countryIndex) => (
                                            <div key={countryIndex}>
                                                <Link to={`/founded-guides/${country.name.common}`} class="nav-link px-2 link-secondary">{country.name.common}</Link>
                                            </div>
                                        ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Location;
