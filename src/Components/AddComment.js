import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


function AddComment(props) {

    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/commentaire/create', {
            comment: comment
        })
            .then(response => {
                console.log('Comment added successfully:', response.data);
                // Optionally, you can update your UI to reflect the new comment
            })
            .catch(error => {
                console.error('Error adding comment:', error);
            });
    };

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <input type='text' placeholder='Add comment' onChange={(e) => setComment(e.target.value)} />
                    </Form.Group>
                    <button type='submit'>Submit</button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default AddComment