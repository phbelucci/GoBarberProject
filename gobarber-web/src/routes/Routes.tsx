import React from 'react';
import { useAuth } from '../hooks/auth';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDomRoute,
  Redirect

} from 'react-router-dom';
import { isString } from 'util';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

/*
  1 - rota privada - user auth = ok
  2 - rota privada - user not auth = nok -> redirecinar login
  3 - rota não privada - user auth -> nok -> redirecionar dashboard
  4 - rota não privada - user not auth = ok
*/

const Route: React.FC<RouteProps> = ({ isPrivate= false, component: Component, ...rest }) => {

  const { user } = useAuth();

  return (

    <ReactDomRoute
     {...rest}
      render={
        () => {
          return isPrivate === !!user ? (
            <Component/>
          ) : (
            <Redirect to={{pathname: isPrivate ? '/' : '/dashboard'}}/>
          )
        }
      }>

    </ReactDomRoute>

  );
}

export default Route;
