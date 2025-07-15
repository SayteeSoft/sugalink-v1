'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { updateUser, getUserById } from '@/services/userService';
import type { User } from '@/models/user';

export async function getProfileAction(id: string) {
  return await getUserById(id);
}

export async function updateProfileAction(userData: User) {
  // We can perform validation here with Zod on the server as an extra layer of security
  // For now, we trust the client-side validation and pass the data through.
  
  try {
    await updateUser(userData);
    revalidatePath('/profile'); // Invalidate the cache for the profile page
    revalidatePath('/profile/edit'); // Invalidate the cache for the edit page
    return { success: true, message: 'Profile updated successfully.' };
  } catch (error) {
    console.error('Update failed:', error);
    // In a real app, you might want to return a more specific error message
    return { success: false, message: 'Failed to update profile.' };
  }
}
