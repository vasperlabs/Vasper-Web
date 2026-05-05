'use server'

import prisma from '@/lib/prisma'
import { z } from 'zod'

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10).max(5000), // Max limit against spam
})

export async function sendInquiry(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string;
  const message = formData.get('message') as string;

  const validatedFields = inquirySchema.safeParse({ name, email, company, message });

  if (!validatedFields.success) {
    return { success: false, error: 'Lütfen tüm alanları geçerli bir şekilde doldurun.' };
  }

  try {
    await prisma.inquiry.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        company: validatedFields.data.company,
        message: validatedFields.data.message,
      },
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to create inquiry:', error);
    return { success: false, error: 'Mesaj gönderilirken bir hata oluştu.' };
  }
}
