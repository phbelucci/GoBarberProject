import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api'

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: object;
  //quando transforma um metodo em async ele passa a retornar uma Promise.
  signIn(credentials : SignInCredentials): Promise<void>;
  signOut(): void;

}

interface AuthState {
  token: string;
  user: object;
}

//Esta poderia ser uma interface para a resposta do server, mas como não sabemos exatamente
// todos os campos que vamos precisar, podemos trabalhar com o formato any nesse caso
// interface AuthResponse {
//   token: string;
//   user: string
// }

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {


  const [data, setData] = useState<AuthState>(() => {
    //verificar se existe algo armazenado no localstorage atraves do getItem
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    //caso exista token e user inicializa a variavel data com os valores abaixo
    if (token && user){
      return {token , user: JSON.parse(user)};
    }
    //caso não exista inicializa a variavel data com objeto vazio.
    return {} as AuthState;
  });

  const signIn = useCallback( async ({ email, password }) => {

    const response = await api.post('sessions', {
      email,
      password
    })

    const {token, user} = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({token, user});

  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() : AuthContextData {
  const context = useContext(AuthContext);

  //dispara erro quando o AuthProvider não for utilizado na aplicação.
  if (!context){
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
