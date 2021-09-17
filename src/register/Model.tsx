import { useState  } from "react";
import { useQuery, useMutation } from 'react-query';
import { API } from "../App";
import { LoginRequest, RegisterRequest } from "../services/Api";
import { useHistory } from 'react-router-dom';

export function useRegistration() {

    const [ inputParams, setInputParams ] = useState({ email: "", username: "", password: "" });
    const [ status, setStatus ] = useState(null);

    const register = useMutation(
        (request: RegisterRequest) => API.register(request),
        {
            onSuccess: (data: any) => {

                console.log(data);
                
            },
            onError: () => {},
            onSettled: () => {}
        }
    );


    const setEmail = (email: string) => {
        setInputParams({ ...inputParams, email });
    };

    const setPassword = (password: string) => {
        setInputParams({ ...inputParams, password });
    };

    const setUsername = (username: string) => {
        setInputParams({ ...inputParams, username });
    };

    const requestRegister = (operator: boolean) => {
        register.mutate({ ...inputParams, operator });
    };

    return { inputParams, setEmail, setUsername, setPassword, requestRegister }

}


export function useLogin() {

    const [ inputParams, setInputParams ] = useState({ email: "", username: "", password: "" });
    const [ status, setStatus ] = useState(null);

    const history = useHistory();

    const login = useMutation(
        (request: LoginRequest) => API.login(request),
        {
            onSuccess: (data: any) => {

                console.log(data);
                history.push("/");
            },
            onError: () => {},
            onSettled: () => {}
        }
    );


    const setEmail = (email: string) => {
        setInputParams({ ...inputParams, email });
    };

    const setPassword = (password: string) => {
        setInputParams({ ...inputParams, password });
    };

    const requestLogin = (operator: boolean) => {
        login.mutate({ ...inputParams, operator });
    };
    

    return { inputParams, setEmail, setPassword, requestLogin }

}