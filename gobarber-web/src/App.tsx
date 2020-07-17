import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AppProvider from './hooks/index'



const App: React.FC = () => {

  return (
    <>
        <AppProvider>
          <SignIn/>
        </AppProvider>

        <GlobalStyles/>
    </>
  )
}

export default App;
