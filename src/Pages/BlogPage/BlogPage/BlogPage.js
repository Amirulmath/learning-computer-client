import React from 'react';
import Card from 'react-bootstrap/Card';

const BlogPage = () => {
    return (
        <div>
            <div className='mt-4 text-center'>
                <h1>Questions & Answers</h1>
            </div>
            <div className='mt-4'>
                <div>
                    <Card>
                        <Card.Body>
                            <h4>Q1. What is CORS?</h4>
                            <b>Answer:</b>
                            <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                            <p>In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <Card.Body>
                            <h4>Q2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                            <b>Answer:</b>
                            <p>Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.
Cause for using firebase: It’s easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don’t have to send requests to get new data, you only need to subscribe once.
The same applies for file storage. Quick setup authentication via the major providers (Google, Twitter, Facebook, GitHub). Https by default - secure http traffic without setting up certificates. Any static html/javascript content can be hosted.</p>
                            <p><b>Other options  to implement authentication: </b>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <Card.Body>
                            <h4>Q3. How does the private route work?</h4>
                            <b>Answer:</b>
                            <p>The react private route component renders child components (children) if the user is logged in . If not logged in the user is redirected to the /login page with the return url passed in the location state property.
Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className='mt-4'>
                    <Card>
                        <Card.Body>
                            <h4>Q4. What is Node? How does Node work?</h4>
                            <b>Answer:</b>
                            <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
</p>
                            <p><b>Working of Node.js: </b>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;