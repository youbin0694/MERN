import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>main Page</h1>
            <Link to="/user/signUp">
                <button style={{ marginRight: '10px' }}>signUp</button>
            </Link>
            <Link to="/user/login">
                <button>Login</button>
            </Link>
        </div>
    );
}

export default Home;
