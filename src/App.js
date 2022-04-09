import './App.css';
import React, {useState} from "react";
import axios from "axios";
import CommentsForm from "./component/CommentsForm/CommentsForm";
import CommentsList from "./component/CommentsList/CommentsList";
import AppPagination from "./component/Pagination/AppPagination";


const App = () => {
    const [comments, setComment] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(8);

    const getComments = async () => {
        setLoading(true);
        const response = await axios.get('http://localhost:3001/comments');
        response.data.reverse().map(e=>e);
        setComment(response.data);
        setLoading(false);
    }
     // Get current page
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

    return (
        <div className={'app'}>
            <h1>Add comments (with react-hook-form)</h1>
            <CommentsForm getComments={getComments} setLoading={setLoading} />
            <AppPagination commentsPerPage={commentsPerPage}
                           totalComments={comments.length}
                           setCurrentPage={setCurrentPage}/>
            <CommentsList comments={currentComments} loading={loading} />

        </div>
    );
}

export default App;






