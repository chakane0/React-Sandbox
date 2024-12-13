import React, { useState, useEffect } from 'react';
import { fetchUsers, fetchUserPosts } from '../usersAPI/MockAPI';

export function Users() {
    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);
    
    // because fetchUsers() is an async function, it will return a promise. 
    // using use effect here will call on the API once the component is first mounted
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const users = await fetchUsers();
    //         setData(users);
    //     }
    //     setTimeout(() => {
    //         fetchData()
    //     }, 2000);
    // }, []);


    const fetchData = async () => {
        const users = await fetchUsers();
        console.log(users);
        setUserData(users);
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 3000);
        
    })

    const fetchPosts = async () => {
        const posts = await fetchUserPosts();
        setPostData(posts);
    }


    return (
        <>
            <section>{userData.map(o => (
                <p key={o.id}>{o.name}</p>
            ))}</section>
            <button onClick={fetchPosts}>click to fetch users numbers</button>
            <section>
                {postData.map(o => (
                    <p key={o.id}>{o.title}</p>
                ))}
            </section>

        </>
    )
}