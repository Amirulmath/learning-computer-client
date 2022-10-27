import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

const ListCardCourses = ({course}) => {
    const { title, image_url } = course;

    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Img className="mb-2" variant="top" src={image_url} />
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="primary">Detail Page</Button>
            </Card.Footer>
        </Card>
    );
};

export default ListCardCourses;