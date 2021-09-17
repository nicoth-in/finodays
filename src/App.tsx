
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Api from "./services/Api";
import Main from "./main/View";
import { Register, Login } from "./register/View";

export const queryClient = new QueryClient()
export const API = new Api();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> 
        </Switch>
      </BrowserRouter>
     </QueryClientProvider>
  );
}

export default App;
