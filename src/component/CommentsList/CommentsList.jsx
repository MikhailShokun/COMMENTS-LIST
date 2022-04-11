import React from "react";
import styles from "./CommentsList.module.css"
import Comment from "../Comment/Comment";
import moment from "moment";

const CommentsList = ({comments, loading}) => {
let time = moment().format('DD.MM.YYYY');

    return (
        <div className={styles.listWrapper}>
            {loading && <h3 className={styles.loading}>Loading...</h3>}
            <div className={styles.list}>
                {
                    comments.map(comment =>
                        <Comment key={comment.id}
                                 name={comment.name}
                                 body={comment.body}
                        />)
                }
            </div>
        </div>
    )
}

export default CommentsList