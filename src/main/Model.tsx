
import { useState  } from "react";
import { useQuery, useMutation } from 'react-query';
import { API, queryClient } from "../App";
import { AnalyseRequest, AnalyseResponse, PostMessageRequest } from "../services/Api";

import { useHistory } from 'react-router-dom';

export function useTextAnalysis() {

    const [ inputText, setInputText ] = useState("");
    const [ currentStatus, updateCurrentStatus ] = useState("Type text to get status");

    const analysisUpdater = useMutation(
        (request: AnalyseRequest) => API.analyseText(request),
        {
            onSuccess: (data: AnalyseResponse) => {

                if (!!data.metrics) {
                    updateCurrentStatus("Your status is: " + data.metrics);
                }
                
            },
            onError: () => {},
            onSettled: () => {}
        }
    );

    const history = useHistory();

    const updateText = (text: string) => {
        setInputText(text);
    };

    const reportUpdate = () => {
        analysisUpdater.mutate({ text: inputText });
    };

    if (!API.loggedIn) {
        history.push("/login/");
    }

    return { updateText, reportUpdate, currentStatus }

}

export function useAuth() {

}

export function useChat() {

    const { data: status } = useQuery("status", _ => API.getStatus());
    const { data: messages } = useQuery("messages", _ => API.getMessages(), { refetchInterval: 1000 });
    const [ inputMessage, changeMessage ] = useState("");

    const messagePost = useMutation(
        (request: PostMessageRequest) => API.postMessage(request),
        {
            onMutate: async (newMsg: any) => {
                await queryClient.cancelQueries('status');
                await queryClient.cancelQueries('messages');
                const pervMsgs = queryClient.getQueryData('messages');
                queryClient.setQueryData('messages', (old: any) => [...old, newMsg]);
                return { pervMsgs }
            },
            onError: (err, newTodo, context: any) => {
                queryClient.setQueryData('messages', context.previousTodos)
            },
            onSettled: () => {
                queryClient.invalidateQueries('messages');
                queryClient.invalidateQueries('status');
            },
        }
    );

    const chatPostMessage = () => {
        messagePost.mutate({ text: inputMessage, operator: API.isOperator });
        changeMessage("");
    };

    const isOperator = API.isOperator;


    return { chatPostMessage, changeMessage, inputMessage, messages, isOperator, status }
}