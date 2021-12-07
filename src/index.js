import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import {createAPI} from './api';
import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer/reducer';
import {ApiActions} from './store/api-actions';
import {Provider} from 'react-redux';

const api = createAPI();

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }),
});

store.dispatch(ApiActions.GetQuests());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
