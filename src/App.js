import './App.css';
import React from "react";
import CommentsForm from "./component/CommentsForm/CommentsForm";
import CommentsList from "./component/CommentsList/CommentsList";


const App = (props) => {

    return (
        <div>
            <CommentsForm/>
            <CommentsList/>
        </div>
    );
}

export default App;






