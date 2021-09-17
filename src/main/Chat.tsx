import React from "react";
import { useChat } from "./Model";
import styles from "./Styles.module.css";



export default function Chat() {


    const { chatPostMessage, changeMessage, inputMessage, messages, isOperator, status } = useChat();

    const OpBlock = (isOperator) ? ChatMessageSent : ChatMessageRecv;
    const ClientBlock = (!isOperator) ? ChatMessageSent : ChatMessageRecv;

    return (
        <>
            <div className={styles.chatHead}>
                <h1>{(isOperator) ? "Диалог с клиентом" : "Диалог с поддержкой"}</h1>
                {/* <span>{(isOperator) ? null : "тех поддержка"}</span> */}
            </div>

            <div className={styles.chatHistory}>
                {
                    (!!messages) ? messages.map((m: any, i: number) => (m.operator) ? <OpBlock { ...m} name="Оператор" /> : <ClientBlock { ...m } name="Клиент"/>) : null
                }
            </div>

            <div className={styles.chatInput}>
                <input type="text" placeholder="Введите текст.." value={inputMessage} onChange={(e)=>changeMessage(e.target.value)} onKeyPress={e => (e.code === "Enter") ? chatPostMessage() : null}/>
            </div>


            {(isOperator) ? (
                <>
                    <div className={styles.emotionHead}>
                        <h1>Эмоциональная оценка</h1>
                    </div>

                    <div className={styles.emotionSuggestions}>

                        <div className={styles.emotionLevel}>
                            <p>Состояние: {(!!status) ? status.status1 : null}</p>
                            <p>В процентах: {(!!status) ? (status.status1Percenet * 100) : null} %</p>
                            <div className={("negative" == status.status1) ? styles.emotionLevelBar : styles.emotionLevelBarPos}></div>
                            <div></div>
                        </div>

                    </div>
                </>
            ) : null}
        </>
    )
}

function ChatMessageRecv({ name, text }: { name: string, text: string }) {
    return (
        <div className={styles.chatMsgRecv}>
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    )
}

function ChatMessageSent({ text }: { text: string }) {
    return (
        <div className={styles.chatMsgSent}>
            <p>{text}</p>
        </div>
    )
}