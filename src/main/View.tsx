import React from "react";
import { useTextAnalysis } from "./Model";
import styles from "./Styles.module.css";

import Chat from "./Chat";

export default function Main() {

    const { updateText, reportUpdate, currentStatus } = useTextAnalysis();

    const reportTextChange = (ev: any) => {
        updateText(ev.target.value);
    }
    
    // return (
    //     <div className={styles.page}>
    //         <span>{currentStatus}</span>
    //         <textarea onChange={reportTextChange}></textarea>
    //         <button onClick={reportUpdate}>Go!</button>
    //     </div>
    // )

    return (
        <div className={styles.grid}>

            {/* Left Bar */}

            {/* <div className={styles.dialogsHead}>
                <h1>Диалоги поддержки</h1>
            </div>

            
            <div className={styles.dialogsList}>
                
                <a href="#" className={styles.dialogLink}>
                    Иван Фёдорович
                    <span>5 мин 10 сек</span>
                </a>

            </div> */}

            {/* Chat section */}

            <Chat />

            {/* Emotion section */}

            

        </div>
    )
}