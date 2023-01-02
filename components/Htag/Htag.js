import React from "react";
import styles from "./Htag.module.scss"


export const Htag = ({bol, children})=>{
    return  (<>
        {bol && <h1 className={styles.Htag}>{children} One</h1>}
        {!bol && <h1 className={styles.Htag}>{children} Two</h1>}
    </>);
};