import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import { MantineProvider } from '@mantine/core';
import { Router } from '@utils';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS
      theme={{
        fontFamily: 'Josefin Sans', 
        colors: {
          'primary-purple': ["#E8E5F3","#CDC4E8","#B2A2E4","#977BE7","#7950F2","#6B45DD","#603EC7","#5C42A9","#57448F","#52447A","#4C4269"],
          'secondary-purple': ["#FDFAFB","#F3D6E0","#F1AFC6","#F783AC","#E66E99","#D26088","#BF557A","#A94F6F","#904F66","#7C4D5E"],
          'btn-color':["#D1B1B9","#CA96A3","#C7798C","#C95975","#D3355D","#D81848","#DA0037","#B1143B","#91203C","#78273B","#652A39","#552B36","#492B32"
          ]
        }
      }}
    >
      <Router/>
    </MantineProvider>
  </React.StrictMode>
)
