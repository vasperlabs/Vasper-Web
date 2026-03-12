import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // In production, integrate with SendGrid/Resend
    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      company: data.company || "Not provided",
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Example SendGrid integration (uncomment when ready):
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'hello@vasperlabs.com',
    //   from: 'noreply@vasperlabs.com',
    //   subject: `New inquiry from ${data.name}`,
    //   text: `
    //     Name: ${data.name}
    //     Email: ${data.email}
    //     Company: ${data.company || 'Not provided'}
    //     Message: ${data.message}
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
