import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Course = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);

    return (
        <div style={{ minHeight: '320px' }}>

        </div>
    );
};

export default Course;