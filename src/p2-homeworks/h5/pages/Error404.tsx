import React from "react";
import s from "./Error404.module.css";

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.status}>404</div>
            <div className={s.descr}>Page not found!</div>
            <div className={s.icon}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
