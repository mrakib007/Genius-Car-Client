import React from 'react';
import { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            
        setAuthToken(user);
        })
        .catch(error => console.error(error));
    }
    
    return (
        <div>
            {/* <p className='text-center'><small>Social Login</small></p> */}
            <p className="text-center">
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Continue With Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;