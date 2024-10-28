import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem('token') || null,
    username: localStorage.getItem('username') || null,
    userId: localStorage.getItem('userId') || null,
    is_superuser: localStorage.getItem('is_superuser') === 'true' || false,
  });

  const login = (token, username, userId, is_superuser) => {
    setUser({ token, username, userId, is_superuser });

    // Store the token and user details in localStorage
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
    localStorage.setItem('is_superuser', is_superuser);
  };

  const logout = () => {
    setUser({ token: null, username: null, userId: null, is_superuser: false });
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('is_superuser');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
