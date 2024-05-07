import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style/signinon.css';
import { Link } from 'react-router-dom';








export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the login API
            const response = await axios.post('http://localhost:8000/api/compte/login', {
                login: email,
                password: password
            });


            if (response.status === 200) {

                const { token, compte } = response.data;


                // Store the token in local storage
                localStorage.setItem('token', token);


                console.log(compte.type_Compte)



                if (compte.type_Compte == "utilisateur") { navigate('/blog/'); }
                else {
                    navigate('/about/');
                }

            }
        } catch (error) {
            // Handle error cases
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className='whiteContainer'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Email'
                    className='signInput'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='signInput'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
                <div className='spaceBetween'>
                    <div id='divsize1'>

                    </div>
                    <div id='divsize2'>
                        <input type='submit' value={'Log in'} className='signBtn' />
                    </div>
                </div>
            </form>
        </div>
    );
}
/*
<div>
<Link to='/forgot-password'>
    <p>forgot password</p>
</Link>
</div>
*/