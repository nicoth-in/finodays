
import { useState  } from "react";
import { useQuery, useMutation } from 'react-query';
import { API } from "../App";
import { AnalyseRequest, AnalyseResponse } from "../services/Api";

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


    const updateText = (text: string) => {
        setInputText(text);
    };

    const reportUpdate = () => {
        analysisUpdater.mutate({ text: inputText });
    };

    return { updateText, reportUpdate, currentStatus }

}