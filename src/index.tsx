import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CustomProvider } from 'rsuite';
import ruRU from 'rsuite/locales/ru_RU';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

export const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <QueryClientProvider client={queryClient}>
              <CustomProvider locale={ruRU}>
                  <Provider store={store}>
                    <App />
                  </Provider>
              </CustomProvider>
          </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>
);
