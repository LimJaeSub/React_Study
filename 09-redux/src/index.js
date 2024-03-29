import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools()); // 스토어를 만듭니다.
//console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <App />
  </Provider>
   
);

reportWebVitals();
