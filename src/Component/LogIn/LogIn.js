import React from 'react';
import './LogIn.css'
const LogIn = () => {
    return (
        <div>
            <h3>Please LogIn</h3>
            <div>
                <button>Sign With Google</button>
            </div>
            <br />
            <form>
                <input type="email" placeholder='Enter Email' />
                <br />
                <input type="password" placeholder='Password'/>
                <br />
                <input type="submit" value='LogIn'/>
                
            </form>
        </div>
    );
};

export default LogIn;