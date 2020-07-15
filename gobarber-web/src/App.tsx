import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { AuthProvider }  from './hooks/AuthContext'

import ToastContainer from './components/ToastContainer/index'



const App: React.FC = () => {

  return (
    <>
        <AuthProvider>
          <SignIn/>
        </AuthProvider>

        <ToastContainer></ToastContainer>

        <GlobalStyles/>
    </>
  )
}

export default App;
