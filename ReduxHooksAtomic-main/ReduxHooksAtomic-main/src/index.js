
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';

import reportWebVitals from './reportWebVitals';
import reducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.css";


const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };
const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
