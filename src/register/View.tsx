import React from "react";
import { useRegistration, useLogin } from "./Model";
import styles from "./Styles.module.css";
import { Link } from "react-router-dom";


export function Register() {

    const { inputParams, setEmail, setUsername, setPassword, requestRegister } = useRegistration();

    return (
        <div className={styles.registerModal}>

            <h1>Регистрация</h1>

            <input type="text" placeholder="Имя пользователя" onChange={(e)=>setUsername(e.target.value)} />
            <input type="email" placeholder="Почта" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Пароль" onChange={(e)=>setPassword(e.target.value)} />

            <Link to="/login/">Уже есть Аккаунт? Войти.</Link>

            <div className={styles.chooseButtons}>
                <button onClick={_ => requestRegister(false)}>Пользователем</button>
                <button onClick={_ => requestRegister(true)}>Оператором</button>
            </div>

            
            
        </div>

    );
}

export function Login() {

    const { inputParams, setEmail, setPassword, requestLogin } = useLogin();

    return (
        <div className={styles.registerModal}>

            <h1>Войти</h1>

            {/* <input type="email" placeholder="Почта" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Пароль" onChange={(e)=>setPassword(e.target.value)} />

            <Link to="/register/">Ещё нет аккаунта?</Link> */}

            <div className={styles.chooseButtons}>
                <button onClick={_ => requestLogin(false)}>Пользователем</button>
                <button onClick={_ => requestLogin(true)}>Оператором</button>
            </div>

        </div>

    );
}