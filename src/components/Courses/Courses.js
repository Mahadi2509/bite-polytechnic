import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Courses = (props) => {
    const { name, img } = props.course;
    return (
        <Col>
            <Card>
                <img width="100%" height="300px" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Courses;