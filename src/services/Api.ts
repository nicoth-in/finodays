

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

export default class Api {

    endpoint: string = "";
    emulated: boolean = true;

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

    async invokeLogin() {
        if (this.emulated)
        {
            let response: LoginResponse = { 
                loggedin: true,
                username: "good",
            };
            return response;
        }

        return { error: "not supported" };
    }

}