import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div style={{ border: '0', width: '50rem', backgroundColor: '#FFFFFF', textAlign: 'center', margin: '10px' }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;





/*import React from 'react';

function SearchBar() {
    return (
        <div className="container">
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="form" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <i className="fa fa-search" style={{ color: '#9ca3af', marginRight: '10px' }}></i>
                        <input
                            type="text"
                            className="form-control form-input"
                            style={{ height: '55px', textIndent: '33px', borderRadius: '10px', boxShadow: 'none', border: 'none', flex: '1' }}
                            placeholder="Search anything..."
                        />
                        <span className="left-pan" style={{ position: 'absolute', right: '17px', top: '13px', padding: '2px', borderLeft: '1px solid #d1d5db' }}><i className="fa fa-microphone"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
*/



