
import type { User } from '@/models/user';
import usersData from '@/data/users.json';
import fs from 'fs/promises';
import path from 'path';

// This is a poor-man's "database" for local development.
// In a real application, this would be a proper database.
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

/**
 * Simulates an API call to update a user's profile.
 * In a real application, this would update data in a database.
 * @param updatedUser The user object with updated data.
 */
export async function updateUser(updatedUser: User): Promise<void> {
  const dataFilePath = path.resolve(process.cwd(), 'src/data/users.json');
  
  const userIndex = users.findIndex(u => u.id === updatedUser.id);
  if (userIndex === -1) {
    throw new Error('User not found');
  }

  // Update the user in the in-memory array
  const currentUsers = JSON.parse(await fs.readFile(dataFilePath, 'utf-8'));
  
  const newUsers = currentUsers.map((u: User) => u.id === updatedUser.id ? updatedUser : u);

  // Write the updated array back to the JSON file
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(newUsers, null, 2), 'utf-8');
    // Also update the in-memory cache for subsequent reads in the same process
    users.length = 0;
    Array.prototype.push.apply(users, newUsers);
  } catch (error) {
    console.error('Failed to write to users.json', error);
    throw new Error('Failed to update user profile.');
  }
}
