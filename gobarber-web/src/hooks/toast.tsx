import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api'

import ToastContainer from '../components/ToastContainer/index'

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}


const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({children}) => {

  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);
  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{addToast, removeToast}}>
      {children}
      <ToastContainer></ToastContainer>
    </ToastContext.Provider>

  );
};


function useToast() : ToastContextData {
  const context = useContext(ToastContext);

  if(!context){
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast }
