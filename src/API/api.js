import * as axios from "axios";

export const pushComment = (data) => {
    return axios.post(`http://localhost:3001/comments`, {data})





    const promise = axios.post(`http://localhost:3001/comments`, {
        name: name,
        body: body
    });
    return promise.then((response) => {
        return response.data;
    })
}

export const getComment = () => {
    const promise = axios.get(`http://localhost:3001/comments`);
    return promise.then((response) => {
        return response.data;
    })
}
