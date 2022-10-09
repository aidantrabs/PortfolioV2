import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { AppContainer } from './components';
import Router from './utils/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContainer>
      <Router/>
    </AppContainer>
  </React.StrictMode>
)
