import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ListCardCourses from '../../Shared/ListCardCourses/ListCardCourses';
import './Home.css';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div className='card-list mb-4'>
            {
                courses.map(course =><ListCardCourses
                    key={course._id}
                    course={course}
                ></ListCardCourses>)
            }
        </div>
    );
};

export default Home;