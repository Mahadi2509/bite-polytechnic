import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data.all))
    }, []);
    console.log(courses);
    return (
        <div className="my-5 w-75 mx-auto">
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map(course => <Courses key={course.key} course={course}></Courses>)
                }
            </Row>
        </div>

    );
};

export default Home;