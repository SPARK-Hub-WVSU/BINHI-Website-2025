'use server';

import { redirect } from 'next/navigation';

/**
 * Utility to handle server actions with proper error handling and redirects
 */
export async function withServerAction(action, successRedirect, errorRedirect) {
  try {
    const result = await action();
    if (successRedirect) {
      redirect(successRedirect);
    }
    return { success: true, result };
  } catch (error) {
    console.error('Server action error:', error);
    if (errorRedirect) {
      redirect(errorRedirect);
    }
    return { success: false, error: error.message };
  }
}

/**
 * Create a revalidate path utility
 */
export async function revalidateAndRedirect(path, redirectTo) {
  const { revalidatePath } = await import('next/cache');
  revalidatePath(path);
  if (redirectTo) {
    redirect(redirectTo);
  }
}