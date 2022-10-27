import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailCard from '../../Shared/CourseDetailCard/CourseDetailCard';

const CourseList = () => {
    const courses = useLoaderData();
    return (
        <div className='mt-4'>
            {
                courses.map(course => <CourseDetailCard
                    key={course._id}
                    course={course}
                ></CourseDetailCard>)
            }
        </div>
    );
};

export default CourseList;