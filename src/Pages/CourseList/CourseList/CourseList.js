import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseList = () => {
    const course = useLoaderData();
    return (
        <div>
            <h3>Course List: {course.length}</h3>
        </div>
    );
};

export default CourseList;