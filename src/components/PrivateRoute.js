import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ({ component: Compoenet, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <div>
      <Route
        {...rest}
        render={props => {
          return currentUser ? <Compoenet {...props} /> : <Redirect to='login' />
        }}
      >
        
        
      </Route>
    </div>
  )
}

export default PrivateRoute
