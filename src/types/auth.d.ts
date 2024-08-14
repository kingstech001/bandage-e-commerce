
export interface AuthContextType {
    user: string | null;
    signIn: (user: string) => void;
    signOut: () => void;
  }
  
  export interface AuthProviderProps {
    children: React.ReactNode;
  }
  