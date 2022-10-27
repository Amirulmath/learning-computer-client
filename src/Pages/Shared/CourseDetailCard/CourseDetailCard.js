import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const CourseDetailCard = ({course}) => {
    const { _id, title, types, teacher, details, fee, image_url } = course;

    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                        <Image
                            roundedCircle
                            className='me-2'
                            src={teacher?.img}
                            style={{ height: '60px' }}
                        ></Image>
                        <div>
                            <p className='mb-0'>{teacher?.name}</p>
                            <p>{teacher?.degree}, {teacher?.university}</p>
                        </div>
                </div>
                <div>
                    <Button variant="primary">Download</Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Img className="mb-2" variant="top" src={image_url} />
                <Card.Text>
                    <p><b>What will be taught: </b>{types}</p>
                    <p><b>Teacher's Experience: </b>{teacher?.experience}</p>
                    <p><b>Course Detail: </b>{details}</p>
                    <p><b>Course Fee: </b>Tk.{fee}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Link to={`/courses/${_id}`}>
                    <Button variant="primary">Get Premium Access</Button>
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default CourseDetailCard;