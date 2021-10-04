import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Courses = (props) => {
    const { name, img, key } = props.course;
    const history = useHistory();


    const handleDetail = () => {
        history.push('/course');
    }

    return (
        <Col>
            <Card>
                <Card.Img width="100%" height="300px" variant="top" src={img} />
                <Card.Body className="d-flex justify-content-between">
                    <Card.Title>{name}</Card.Title>
                    <button onClick={handleDetail} className="bg-danger text-white border-0 py-1 px-4 rounded-3">Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Courses;