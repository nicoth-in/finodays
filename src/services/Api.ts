import Axios from "axios";

export interface AnalyseRequest {
    text: string,
}

export interface ErrorResponse {
    error?: string,
}

export interface AnalyseResponse extends ErrorResponse {
    metrics?: "good" | "neutral" | "bad",
}

export interface LoginResponse extends ErrorResponse {
    loggedin: boolean,
    operator?: boolean,
    username?: string,
}

export interface LoginRequest {
    email: string,
    password: string,
    operator: boolean,
}

export interface RegisterRequest extends LoginRequest {
    username: string,
}

export interface PostMessageRequest {
    text: string,
    operator: boolean,
}

export default class Api {

    endpoint: string = "https://localhost:5001/api";
    emulated: boolean = true;
    token: string = "";

    loggedIn: boolean = false;
    isOperator: boolean = false;

    emulatedChat: any = [];

    async analyseText({ text }: AnalyseRequest)
    {
        if (this.emulated)
        {
            let response: AnalyseResponse = { metrics: "good", };
            return response;
        }

        return { error: "not supported" };

        // TODO
    }
        
    async register(registerObj: RegisterRequest) {

        if (this.emulated)
        {
            this.loggedIn = true;
            this.isOperator = registerObj.operator;

            let response: LoginResponse = { 
                loggedin: true,
                username: "good",
            };
            return response;
        }

        const result = await Axios.post(`${this.endpoint}/auth/register`, registerObj);
        return await result;

    };

    async login(loginObj: LoginRequest) {

        if (this.emulated)
        {
            this.loggedIn = true;
            this.isOperator = loginObj.operator;

            let response: LoginResponse = { 
                loggedin: true,
                username: "good",
            };
            return response;
        }

        const result = await Axios.post(`${this.endpoint}/auth/login`, loginObj);
        return await result;
    };

    async postMessage(request: PostMessageRequest) {

        let response = await fetch(`${this.endpoint}/Messages/`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });

        return await response.json();
        // if (this.emulated)
        // {
        //     this.emulatedChat.push(finalRequest);
        //     return {}
        // }

        // console.error("Not implemented!");
    }

    async getMessages() {

        // if (this.emulated)
        // {
        //     return this.emulatedChat;
        // }

        // console.error("Not implemented!");

        let response = await fetch(`${this.endpoint}/Messages`);

        return await response.json();
    }

    async getStatus() {

        let response = await fetch(`${this.endpoint}/Status`);
        return await response.json();

    }

    // const searchForUsers = async (value, token) => {
    //         const result = await Axios.get(`${_baseUrl}users/search?name=${value}`, {
    //             headers: authHeader(token)
    //         });
    //         return await result;
    // };

    // const uploadAvatar = async (fromData, token) =>{
    //     const result = await Axios.post(`${_baseUrl}avatars/upload`, fromData, {
    //         headers: authHeader(token)
    //     });
    //     return await result;
    // };
    // const getProfile = async (token) =>{
    //     const result = await Axios.get(`${_baseUrl}users/getprofile`, {
    //         headers: authHeader(token)
    //     });
    //     return await result;
    // };

    // const getMessages = async (threadId, token) => {
    //     const result = await Axios.get(`${_baseUrl}thread/getmessages/${threadId}`, {
    //         headers: authHeader(token)
    //     });
    //     return await result;
    // };

    // const getThreads = async (token) => {
    //     const result = await Axios.get(`${_baseUrl}hey/getthreads`, {
    //         headers: authHeader(token)
    //     });
    //     return await result;
    // };

    // const createThread = async (oponentViewModel, token) => {
    //     const result = await Axios.post(`${_baseUrl}hey/createthread`, {
    //         OponentVM: oponentViewModel
    //     }, {
    //         headers: authHeader(token)
    //     });
    //     return await result;
    // };

    // const sendMessageToApi = async (messageViewModel, token) => {
    //     const result = await Axios.post(`${_baseUrl}hey/send`, messageViewModel, {
    //         headers: authHeader(token)
    //     });
    //     return await result;
    // };

    // const searchForMessageInThread = async (token, params) => {
    //     const result = await Axios.get(`${_baseUrl}thread/search`, {
    //         headers: authHeader(token),
    //         params: params
    //     });
    //     return await result;
    // }

    // const updateUsersProfile = async (token, user) => {
    //     const result = await Axios.post(`${_baseUrl}users/update`, user, {
    //         headers: authHeader(token)
    //     });
    //     return await result;

}