import React from 'react';
import { useState, useEffect } from 'react';
import { db } from './firebase';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        db.collection('courses').onSnapshot(snap => {
            // console.log(snap.docs)
            setCourses(snap.docs.map(doc => ({
                id: doc.id,
                course: doc.data()
            })))
        })
    }, []);

    return (
        <div className='curses'>
            {
                courses?.map(function(val){
                    return (
                        <div>
                            <p key={val.id}>{val.id}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Courses