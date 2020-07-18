import React from 'react';
import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index'

import AppProvider from './hooks/index'



const App: React.FC = () => {

  return (
    <BrowserRouter>
        <AppProvider>
            <Routes/>
        </AppProvider>

        <GlobalStyles/>
    </BrowserRouter>
  )
}

export default App;
