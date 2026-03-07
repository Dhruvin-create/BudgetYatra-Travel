import { NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/utils/validation';

export async function POST(request) {
  try {
    const formData = await request.json();

    const validation = validateContactForm(formData);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service or database
    // For now, just log and return success
    console.log('Contact form submission:', formData);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
