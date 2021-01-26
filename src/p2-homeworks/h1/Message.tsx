import React from "react";
import styles from "./Message.module.css";

type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={styles.message__wrapper}>
            <div className={styles.message__avatar_block}>
                <img className={styles.message__avatar_img} src={props.avatar} alt="your-avatar"/>
            </div>
            <div className={styles.message__window}>
                <div className={styles.message__name}>
                    {props.name}
                </div>
                <div className={styles.message__text}>
                    {props.message}
                </div>
                <div className={styles.message__time}>
                    {props.time}
                </div>
            </div>
        </div>
    );
}

export default Message;
