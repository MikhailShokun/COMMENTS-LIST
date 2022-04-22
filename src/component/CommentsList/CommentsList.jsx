import React from "react";
import styles from "./CommentsList.module.css"
import Comment from "../Comment/Comment";

const CommentsList = ({comments, loading}) => {
    return (
        <div className={styles.listWrapper}>
            {loading && <h3 className={styles.loading}>Loading...</h3>}
            <div className={styles.list}>
                {
                    comments.map(comment =>
                        <Comment key={comment.id}
                                 name={comment.name}
                                 body={comment.body}
                                 time={comment.date}
                        />)
                }
            </div>
        </div>
    )
}

export default CommentsList