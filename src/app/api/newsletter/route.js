import { NextResponse } from 'next/server';
import { validateNewsletterEmail } from '@/lib/utils/validation';

export async function POST(request) {
  try {
    const { email } = await request.json();

    const validation = validateNewsletterEmail(email);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.error },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (e.g., Mailchimp, SendGrid)
    // For now, just log and return success
    console.log('Newsletter subscription:', email);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
