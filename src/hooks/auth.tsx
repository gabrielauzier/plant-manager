import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Loading } from "../components/Loading";

interface AuthContextProps {
  children: ReactNode;
}

interface User {
  name: string;
  photo?: string;
}

interface IAuthContextData {
  user: User | null;
  logout(): void;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  async function loadUser() {
    try {
      const username = await AsyncStorage.getItem("@plantmanager:user");
      if (username) setUser({ name: username });
    } catch (err) {
      console.error(err);
    }

    setIsLoadingUser(false);
  }

  async function logout() {
    await AsyncStorage.removeItem("@plantmanager:user");
  }

  useEffect(() => {
    loadUser();
  }, []);

  if (isLoadingUser) return <Loading />;

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) throw new Error("useAuth must be used inside AuthProvider");

  return auth;
}

export { AuthProvider, useAuth };
