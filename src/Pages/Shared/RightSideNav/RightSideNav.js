import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <div className="d-sm-grid d-lg-flex gap-4">
                <Button variant="primary" size="lg">
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