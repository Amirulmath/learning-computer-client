import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="d-sm-grid d-lg-flex gap-4">
                <Button onClick={handleGoogleSignIn} variant="primary" size="lg">
                    <FaGoogle></FaGoogle> Login with Google
                </Button>
                <Button variant="secondary" size="lg">
                    <FaGithub></FaGithub> Login with Github
                </Button>
            </div>
        </div>
    );
};

export default RightSideNav;