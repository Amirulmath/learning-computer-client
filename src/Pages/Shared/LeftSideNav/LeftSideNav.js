import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftSideNav = () => {
    const [lists, setLists] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/course-lists')
        .then(res => res.json())
        .then(data => setLists(data));
    }, [])

    return (
        <div>
            <h2>List of Courses: {lists.length}</h2>
        </div>
    );
};

export default LeftSideNav;