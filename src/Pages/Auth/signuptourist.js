import axios from 'axios';
import React, { useState } from 'react';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [specialities, setSpecialities] = useState("utilisateur");



    const handleSubmit = async (e) => {
        e.preventDefault();



        // Prepare the request data
        const requestData = {
            email,
            password,
            fullName,
            phone,

            country,
            city,
            specialities,
        };

        try {
            // Make a POST request to the /api/signup endpoint
            const response = await axios.post('http://localhost:8000/api/compte/signup', requestData);

            // Handle successful sign-up
            console.log('Sign up successful!', response.data);
            setEmail("")
            setPassword("")
            setFullName("")
            setPhone("")

            setCountry("")
            setCity("")
            // You can show a success message, redirect the user, etc.

        } catch (error) {
            // Handle error during sign-up
            console.error('Sign-up failed:', error);
            // You can display an error message to the user
        }
    };

    return (
        <div className='whiteContainer'>
            <div className="form-and-table-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className='signInput'
                        required
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className='signInput'
                        required
                    />
                    <input
                        type='text'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder='Full name'
                        maxLength={60}
                        className='signInput'
                        required
                    />
                    <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='Phone number'
                        className='signInput'
                        required
                    />

                    <select
                        id="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className='selectInput'
                        required
                    >
                        <option value="">Country</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="France">France</option>
                        <option value="Morocco">Morocco</option>
                    </select>
                    <select
                        id="cities"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className='selectInput2'
                        required
                    >
                        <option value="">City</option>
                        <option value="New York">New York</option>
                        <option value="London">London</option>
                        <option value="Paris">Paris</option>
                        <option value="Rabat">Rabat</option>
                    </select>


                    <input type='submit' value='Register' className='RegisterBtn' id='btnApply' />
                </form>
            </div>
        </div>
    );
}
