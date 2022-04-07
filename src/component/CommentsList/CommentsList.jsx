import React, {useEffect, useState} from "react";
import "./CommentsList.css"
import axios from "axios";
import Comment from "../Comment/Comment";

const CommentsList = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/comments`)
            .then(response => setData(response.data))
    }, [])


    return (
        <div className={'listWrapper'}>
            <h4>Comments list</h4>
            <div>
                {
                    data.reverse().map(comment => <Comment key={comment.id} name={comment.name} body={comment.body}/>)
                }
            </div>
        </div>
    )
}

export default CommentsList