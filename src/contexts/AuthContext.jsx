import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AUTH_KEY = "drift_enterprises_auth";

// Mock users database (in production, this would be on the backend)
const MOCK_USERS = {
  admin: {
    username: "admin",
    password: "admin123", // In production, this would be hashed
    role: "admin",
    email: "admin@drift.com",
    fullName: "Admin User"
  },
  user: {
    username: "user",
    password: "user123",
    role: "customer",
    email: "user@drift.com",
    fullName: "Regular User"
  }
};

function loadAuthFromStorage() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => loadAuthFromStorage());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (user) {
      window.localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(AUTH_KEY);
    }
  }, [user]);

  const login = (username, password) => {
    setLoading(true);
    
    // Simulate API call delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mockUser = MOCK_USERS[username];
        
        if (!mockUser || mockUser.password !== password) {
          setLoading(false);
          reject(new Error("Invalid username or password"));
          return;
        }

        const authUser = {
          username: mockUser.username,
          role: mockUser.role,
          email: mockUser.email,
          fullName: mockUser.fullName,
          loginTime: new Date().toISOString()
        };

        setUser(authUser);
        setLoading(false);
        resolve(authUser);
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const isAdmin = () => {
    return user && user.role === "admin";
  };

  const hasRole = (role) => {
    return user && user.role === role;
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
    isAdmin,
    hasRole
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
