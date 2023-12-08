import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { UserNameContext } from 'components/context/nameContext';
import './Styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="test_CRM">
      <UserNameContext.Provider
        value={{ userName: 'Daniil', role: 'Developer' }}
      >
        <App />
      </UserNameContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
