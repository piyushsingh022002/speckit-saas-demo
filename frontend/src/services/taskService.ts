import axiosClient from '../api/axiosClient';
import { Task } from '../types/Task';

export const getTasks = async (): Promise<Task[]> => {
  const res = await axiosClient.get<Task[]>('/tasks');
  return res.data;
};

export const createTask = async (task: Partial<Task>): Promise<Task> => {
  const res = await axiosClient.post<Task>('/tasks', task);
  return res.data;
};
