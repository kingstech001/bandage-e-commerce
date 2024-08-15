'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContextType, AuthProviderProps } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for existing user in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true); // Set isAuthenticated to true if a user is found
    }
  }, []);

  const signIn = (user: string) => {
    setUser(user);
    localStorage.setItem('user', user); // Persist user in localStorage
    setIsAuthenticated(true); // Set isAuthenticated to true on sign-in
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
    setIsAuthenticated(false); // Set isAuthenticated to false on sign-out
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
