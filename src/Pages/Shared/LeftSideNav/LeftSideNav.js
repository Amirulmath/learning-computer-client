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
        <div>
            <h2>List of Courses: {lists.length}</h2>
            <div>
                {
                    lists.map(list => <p key={list.course_id}>
                        <Link to={`/courseList/${list.course_id}`}>{list.course_name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;