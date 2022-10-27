import React from 'react';
import Card from 'react-bootstrap/Card';

const FAQpage = () => {
    return (
        <div>
            <div className='mt-4 text-center'>
                <h1>Frequently Asked Question</h1>
            </div>
            <div className='mt-4'>
                <div>
                    <Card>
                        <Card.Body>
                            <h4>Q1. How much we will benefit from taking the course here?</h4>
                            <p><b>Answer: </b>If you attend classes regularly and work hard, you will surely benefit.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='mt-4'>
                <div>
                    <Card>
                        <Card.Body>
                            <h4>Q2. Will we get a job by taking the course here?</h4>
                            <p><b>Answer: </b>If you attend classes regularly and work hard, you will definitely get a job.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='mt-4'>
                <div>
                    <Card>
                        <Card.Body>
                            <h4>Q3. How much can we trust you?</h4>
                            <p><b>Answer: </b>You can trust us completely.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FAQpage;