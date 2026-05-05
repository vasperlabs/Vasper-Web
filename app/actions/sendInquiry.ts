'use server'

import prisma from '@/lib/prisma'

export async function sendInquiry(formData: FormData) {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!email || !message) {
    return { success: false, error: 'Email and message are required' };
  }

  try {
    await prisma.inquiry.create({
      data: {
        email,
        message,
      },
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to create inquiry:', error);
    return { success: false, error: 'Failed to send message' };
  }
}
