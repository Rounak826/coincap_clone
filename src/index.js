import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import coinReducer from './Redux/slices/coinState'
import coinSaga from './Redux/saga/coinSaga';

const saga = createSagaMiddleware()

const store = configureStore({
  reducer:{
    coins:coinReducer
  },
  middleware: [saga]
})
saga.run(coinSaga); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>

);


