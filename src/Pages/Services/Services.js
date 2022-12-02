import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ListCardCourses from '../Shared/ListCardCourses/ListCardCourses';

const Services = () => {
    const courses = useLoaderData();

    return (
        <div>
            <div className='text-center'>
                <h2>Our Courses</h2>
            </div>
            <div className='card-list'>
                {
                    courses.map(course => <ListCardCourses
                        key={course._id}
                        course={course}
                    ></ListCardCourses>)
                }
            </div>
        </div>
    );
};

export default Services;