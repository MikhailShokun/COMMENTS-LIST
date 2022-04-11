import React from 'react';
import styles from "./Comment.module.css";
import ava from "../../assets/images/git.png";


const Comment = ({name, body, time}) => {
    return (
        <div className={styles.commentsWrapper}>
            <div className={styles.userInfo}>
                <div className={styles.userAvaName}>
                    <div className={styles.ava}>
                        <img src={ava} alt="ava"/>
                    </div>
                    <div className={styles.name}>
                        {name} :
                    </div>
                </div>
                <div className={styles.time}>
                    {time}
                </div>
            </div>

            <div>
                {body}
            </div>

        </div>
    )
}

export default Comment