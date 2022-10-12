import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { MantineProvider } from '@mantine/core';
import Router from './utils/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <Router/>
    </MantineProvider>
  </React.StrictMode>
)
