import React from "react";
import styles from "./Comment.module.css";

const Comment = ({name, body}) => {
    return (
        <div className={styles.commentsBody}>

            <div>
                {name} :
            </div>

            <div>
                {body}
            </div>

        </div>
    )
}

export default Comment