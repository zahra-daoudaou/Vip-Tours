import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div class="d-flex justify-content-center">
                <footer style={{
                    width: '100%',
                    bottom: 0,
                    position: 'relative'
                }} class="py-3">
                    <div style={{ backgroundColor: '#24265D' }} class="py-3">
                        <ul class="nav justify-content-center">
                            <li style={{ color: '#F4F4F4', fontWeight: 'bold', fontSize: 'large' }} class="nav-item">
                                <Link to="/terms-of-use" class="nav-link px-2 link-light">Terms of use</Link>
                            </li>
                            <li style={{ color: '#F4F4F4', fontWeight: 'bold', fontSize: 'large' }} class="nav-item">
                                <Link to="/faqs" class="nav-link px-2 link-light">FAQs</Link>
                            </li>
                            <li style={{ color: '#F4F4F4', fontWeight: 'bold', fontSize: 'large' }} class="nav-item">
                                <Link to="/privacy-policy" class="nav-link px-2 link-light">Privacy policy</Link>
                            </li>
                        </ul>
                    </div>
                    <p style={{ color: '#24265D', fontStyle: 'italic', textAlign: 'center' }}>
                        ©2024 all rights reserved by TECHNOCASTLE1
                    </p>
                </footer>
            </div>
        </>
    );
};


export default Footer;