import React from "react";
import { useTextAnalysis } from "./Model";
import styles from "./Styles.module.css";

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

            <div className={styles.dialogsHead}>
                <h1>Диалоги поддержки</h1>
            </div>

            
            <div className={styles.dialogsList}>
                
                <a href="#" className={styles.dialogLink}>
                    Иван Фёдорович
                    <span>5 мин 10 сек</span>
                </a>

            </div>

            {/* Chat section */}

            <div className={styles.chatHead}>
                <h1>Иван Фёдорович</h1>
                <span>1 мин 30 сек</span>
            </div>

            <div className={styles.chatHistory}>

                <div className={styles.chatMsgRecv}>
                    <h3>Иван Фёдорович</h3>
                    <p>Здравствуйте, в каком отделении банка я могу взять распечатку движения средств по счету??????</p>
                </div>

                <div className={styles.chatMsgSent}>
                    <p>Здравствуйте, в каком отделении банка я могу взять распечатку движения средств по счету??????</p>
                </div>

                <div className={styles.chatMsgRecv}>
                    <h3>Иван Фёдорович</h3>
                    <p>Здравствуйте, в каком отделении банка я могу взять распечатку движения средств по счету??????</p>
                </div>

                <div className={styles.chatMsgSent}>
                    <p>Здравствуйте, в каком отделении банка я могу взять распечатку движения средств по счету??????</p>
                </div>

                <div className={styles.chatMsgRecv}>
                    <h3>Иван Фёдорович</h3>
                    <p>Здравствуйте, в каком отделении банка я могу взять распечатку движения средств по счету??????</p>
                </div>

                <div className={styles.chatMsgSent}>
                    <p>Здравствуйте, в каком отделении банка я могу взять распечатку движения средств по счету??????</p>
                </div>


            </div>

            <div className={styles.chatInput}>
                <input type="text" placeholder="Введите текст.." />
            </div>

            {/* Emotion section */}

            <div className={styles.emotionHead}>
                <h1>Эмоциональная оценка</h1>
            </div>

            <div className={styles.emotionSuggestions}>

                <div className={styles.emotionLevel}>
                    <p>Высокий уровень негатива</p>

                    <div className={styles.emotionLevelBar}></div>
                    <div></div>
                </div>

            </div>

        </div>
    )
}