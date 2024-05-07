import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import { Button, Form } from 'react-bootstrap';
//import axios from 'axios';
//useEffect
import { useState } from 'react';


const Container = styled.div`
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function AddTour() {

    const [inputs, setInputs] = useState(['']);

    const addInput = () => {
        setInputs([...inputs, '']);
    };

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };


    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '80%', border: '0' }}>
                    <h2 style={{ color: "#000080", fontWeight: "bold" }}>Create a tour!</h2>
                    <form>
                        <div className="form-row justify-content-md-center">
                            <div className="form-group">
                                <label htmlFor="title" style={{ color: "#000080", fontWeight: "bold" }}>Tour title</label>
                                <input type="title" className="form-control is-invalid" id="titre" placeholder="Enter Title" />
                                <small id="titleHelp" className="form-text text-muted">Chose a unique title for your tour.</small>
                            </div>
                        </div>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <div className="mb-3">
                                <label htmlFor="tourDiscription" style={{ color: "#000080", fontWeight: "bold" }}>Tour description</label>
                                <textarea className="form-control is-invalid" id="description" placeholder="Required tour Discription" required></textarea>
                                <div className="form-text text-muted">Describe in details your tour.</div>
                            </div>
                        </div>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <div className="mb-3">
                                <label htmlFor="price" style={{ color: "#000080", fontWeight: "bold" }}>Price</label>
                                <input type="number" className="form-control is-invalid" id="prix" placeholder="Enter a Price" />
                                <div className="form-text text-muted">what is your Tour Price?</div>
                            </div>
                        </div>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <label className="form-label" htmlFor="customFile" style={{ color: "#000080", fontWeight: "bold" }}>Starting Date</label>
                            <input type="number" className="form-control is-invalid" id="date_debut" placeholder="Exp : 15-06-2024" />
                            <div className="form-text text-muted">Folow the Format.</div>
                        </div>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <label className="form-label" htmlFor="customFile" style={{ color: "#000080", fontWeight: "bold" }}>Ending Date</label>
                            <input type="number" className="form-control is-invalid" id="date_fin" placeholder="Exp : 20-08-2024" />
                            <div className="form-text text-muted">Folow the Format.</div>
                        </div>
                        <br />

                        <hr class="hr hr-blurry" />
                        <br />
                        <h3 style={{ color: "#000080", fontWeight: "bold" }}>Distinations</h3>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <label className="form-label" htmlFor="customFile" style={{ color: "#000080", fontWeight: "bold" }}>Country </label>
                            <input type="text" className="form-control is-invalid" id="date_fin" placeholder="Enter Country Name" />
                            <br />
                            {inputs.map((input, index) => (
                                <Form.Group key={index}>
                                    <label className="form-label" htmlFor="customFile" style={{ color: "#000080", fontWeight: "bold" }}> City </label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter City Name"
                                        value={input}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                    />
                                    <br />
                                </Form.Group>
                            ))}
                            <button type="submit" className="btn btn-primary" style={{ width: "100%", height: "50px", backgroundColor: "#000080" }} onClick={addInput}>Add City</button>
                        </div>
                        <br />

                        <hr class="hr hr-blurry" />
                        <br />
                        <h3 style={{ color: "#000080", fontWeight: "bold" }}>More Details</h3>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <label className="form-label" htmlFor="customFile" style={{ color: "#000080", fontWeight: "bold" }}>Languages</label>
                            <input type="number" className="form-control is-invalid" id="language" placeholder="Language" />
                        </div>
                        <br />

                        <div className="form-row justify-content-md-center">
                            <button type="submit" className="btn btn-primary" style={{ width: "100%", height: "60px", backgroundColor: "#FF8C00" }}>Submit</button>
                        </div>
                    </form>
                </Card>
            </div>
        </Container>
    );
}
