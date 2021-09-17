
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'

import Api from "./services/Api";
import Main from "./main/View";

const queryClient = new QueryClient()
export const API = new Api();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <Main />
     </QueryClientProvider>
  );
}

export default App;
