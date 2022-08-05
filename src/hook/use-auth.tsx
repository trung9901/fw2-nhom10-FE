import useSWR, { useSWRConfig } from 'swr';
import { list, signin, signup } from '../api/user';
import { User } from '../models/User';
import { isAuthenticate, authenticated } from '../utils/localStorage';
export const useAuth = (options?) => {
  const { data, error, mutate } = useSWR('/users', { ...options });

  // register

  const register = async (user: User) => {
    const account = await signup(user);
    mutate([...data, account]);
  };

  const profile = (id: any) => {
    mutate(`/users/${id}`);
  };
  // login
  const login = async (user: User) => {
    const account = await signin(user);
    localStorage.setItem('user', JSON.stringify(account));
    mutate([...data, account]);
  };
  // logout
  const logout = async ()=>{
     localStorage.removeItem('user');
     mutate([...data])
  }
  return {
    data,
    error,
    register,
    profile,
    login,
    logout
  };
};
