// https://jsonplaceholder.typicode.com/users

import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: { 'Content-Type': 'application/json' },
});

export const fetchUsers = async () => {
    
    try {
        const response = await apiClient.get('/users');
        // console.log(response.data)
        return response.data;
    } catch (error) {
        console.log("error with fetching users");
    }
}

export const fetchUserPosts = async () => {
    try {
        const response = await apiClient.get('/posts');
        return response.data;
    } catch (error) {
        console.log('error with fetching posts');
    }
}
