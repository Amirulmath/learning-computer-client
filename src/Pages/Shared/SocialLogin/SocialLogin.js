import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));
    };

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error))
    };

    return (
        <div>
            <div className="d-sm-grid d-lg-flex gap-4">
                <Button onClick={handleGoogleSignIn} variant="primary" size="lg">
                    <FaGoogle></FaGoogle> Login with Google
                </Button>
                <Button onClick={handleGithubSignIn} variant="secondary" size="lg">
                    <FaGithub></FaGithub> Login with Github
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;