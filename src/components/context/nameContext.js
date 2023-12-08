import { createContext, useContext } from 'react';

export const UserNameContext = createContext();

export const useUserName = () => useContext(UserNameContext);
