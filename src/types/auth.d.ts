// /src/types/auth.ts

export interface AuthContextType {
  user: string | null;
  isAuthenticated: boolean;
  signIn: (user: string) => void;
  signOut: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
