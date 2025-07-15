
import type { User } from '@/models/user';
import usersData from '@/data/users.json';

const users: User[] = usersData as User[];

/**
 * Simulates an API call to get all users.
 * In a real application, this would fetch data from a database.
 */
export async function getAllUsers(): Promise<User[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return users;
}

/**
 * Simulates an API call to get a user by their ID.
 * In a real application, this would fetch data from a database.
 * @param id The ID of the user to fetch.
 */
export async function getUserById(id: string): Promise<User | undefined> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return users.find(user => user.id === id);
}
