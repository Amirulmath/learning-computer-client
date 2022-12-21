import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [lists, setLists] = useState([]);

    useEffect( () =>{
        fetch('https://learning-computer-server.vercel.app/course-lists')
        .then(res => res.json())
        .then(data => setLists(data));
    }, [])

    return (
        <div className='bg-primary text-white p-4'>
            <h2 className='mb-3'>List of Courses</h2>
            <div>
                {
                    lists.map(list => <p key={list.course_id}>
                        <Link to={`/courseList/${list.course_id}`}><button type="button" class="btn btn-dark w-100">{list.course_name}</button></Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;