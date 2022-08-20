import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ToastContainer from './components/ToastContainer';
import ToastProvider from './context/ToastContext';
import { UserProvider } from './context/UserContext';
import GlobalStyle from './style/global';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <ToastContainer />
        <UserProvider>

          <GlobalStyle />
          <App />
        </UserProvider>

      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);

