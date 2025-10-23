import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkSession = async () => {
    try {
      const token = localStorage.getItem('admin_access_token');
      if (!token) {
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/admin/verify`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setAccessToken(token);
      } else {
        localStorage.removeItem('admin_access_token');
        setUser(null);
        setAccessToken(null);
      }
    } catch (error) {
      console.error('Session check error:', error);
      localStorage.removeItem('admin_access_token');
      setUser(null);
      setAccessToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/admin/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login failed');
      }

      const data = await response.json();
      setUser(data.user);
      setAccessToken(data.access_token);
      localStorage.setItem('admin_access_token', data.access_token);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem('admin_access_token');
    setUser(null);
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, accessToken, isLoading, login, logout, checkSession }}>
      {children}
    </AuthContext.Provider>
  );
};
