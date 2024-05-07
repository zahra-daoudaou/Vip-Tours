import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function AddBlog() {
    const [title, setTitle] = useState('');
    const [language, setLanguage] = useState('');
    const [body, setBody] = useState('');
    const [picture, setPicture] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('language', language);
        formData.append('body', body);
        formData.append('picture', picture);

        axios.post('http://127.0.0.1:8000/api/blog/create', formData)
            .then(response => {
                console.log('Blog post created successfully:', response.data);
            })
            .catch(error => {
                console.error('Error creating blog post:', error);
            });
    }

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '80%', border: '0' }}>
                    <h2 style={{ color: "#000080", fontWeight: "bold" }}>Create your Blog Post!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row justify-content-md-center">
                            <div className="form-group">
                                <label htmlFor="title" style={{ color: "#000080", fontWeight: "bold" }}>Post title</label>
                                <input type="title" className="form-control is-invalid" id="inputTitle" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} />
                                <small id="titleHelp" className="form-text text-muted">Choose a unique title for your post.</small>
                            </div>
                            <div className="col">
                                <label className="text-capitalize" style={{ color: "#000080", fontWeight: "bold" }} htmlFor="language">Language</label>
                                <input type="language" className="form-control is-invalid" id="inputTitle" placeholder="Enter a Language" onChange={(e) => setLanguage(e.target.value)} />
                            </div>
                        </div>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <div className="mb-3">
                                <label htmlFor="blogPost" style={{ color: "#000080", fontWeight: "bold" }}>Post Body</label>
                                <textarea className="form-control is-invalid" id="blogPost" placeholder="Required Blog Post" required onChange={(e) => setBody(e.target.value)}></textarea>
                                <div className="form-text text-muted">Please enter your post body in the textarea.</div>
                            </div>
                        </div>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <label className="form-label" htmlFor="customFile" style={{ color: "#000080", fontWeight: "bold" }}>Choose Pictures</label>
                            <input type="file" className="form-control" id="customFile" onChange={(e) => setPicture(e.target.files[0])} />
                        </div>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <button type="submit" className="btn btn-primary" style={{ width: "100%", backgroundColor: "#FF8C00" }}>Submit</button>
                        </div>
                    </form>
                </Card>
            </div>
        </Container>
    );
}
