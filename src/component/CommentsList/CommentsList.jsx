import React, {useEffect, useState} from "react";
import styles from "./CommentsList.module.css"
import axios from "axios";
import Comment from "../Comment/Comment";


const CommentsList = ({comments, loading}) => {

    return (
        <div className={styles.listWrapper}>
            {loading && <h3 className={styles.loading}>Loading...</h3>}
            {/*<h4>Comments list</h4>*/}
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