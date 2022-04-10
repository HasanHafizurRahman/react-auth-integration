import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './LogIn.css'
const LogIn = () => {
const {signUpWithGoogle} = useFirebase();

    return (
        <div>
            <h3>Please LogIn</h3>
            <div>
                <button onClick={signUpWithGoogle}>Sign With Google</button>
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