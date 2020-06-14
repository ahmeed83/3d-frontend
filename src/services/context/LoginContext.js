import React, { createContext } from 'react';
import { USER, ACCESS_TOKEN } from '../common/constants';

export const LoginContext = createContext();

const LoginContextProvider = props => {
  const user = localStorage.getItem(USER);
  const token = localStorage.getItem(ACCESS_TOKEN);

  return (
    <LoginContext.Provider value={{ user, token }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
