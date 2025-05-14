import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = ({ email, password }) => {
    // TODO: replace with real API call
    setUser({ id: 1, name: 'Demo User', email, isAdmin: email === 'admin@example.com' });
  };

  const signup = ({ name, email, password }) => {
    // TODO: replace with real API call
    setUser({ id: 2, name, email, isAdmin: false });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);