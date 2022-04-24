import React from 'react';
 
import App from './App';
 
import {applyMiddleware, createStore} from "redux";
import { BrowserRouter } from 'react-router-dom'; 
import * as ReactDOMClient from 'react-dom/client';
import {Provider} from "react-redux"; 
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
export const store = createStore(rootReducer, applyMiddleware(thunk))

 const rootElement = document.getElementById('root');
 if (!rootElement) throw new Error('Failed to find the root element');
 const root = ReactDOMClient.createRoot(rootElement);
 
root.render(
 
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
 
  </BrowserRouter>
 )
