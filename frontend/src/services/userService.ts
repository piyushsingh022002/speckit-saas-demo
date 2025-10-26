import axiosClient from '../api/axiosClient';
import { User } from '../types/User';

export const getUsers = async (): Promise<User[]> => {
  const res = await axiosClient.get<User[]>('/users');
  return res.data;
};

export const createUser = async (user: Partial<User>): Promise<User> => {
  const res = await axiosClient.post<User>('/users', user);
  return res.data;
};
