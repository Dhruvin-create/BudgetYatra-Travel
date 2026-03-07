// Form validation utilities

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateNewsletterEmail(email) {
  if (!email || email.trim() === '') {
    return { valid: false, error: 'Email is required' };
  }
  
  if (!isValidEmail(email)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }
  
  return { valid: true };
}

export function validateContactForm(data) {
  const errors = {};
  
  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  }
  
  if (!data.email || data.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.subject || data.subject.trim() === '') {
    errors.subject = 'Subject is required';
  }
  
  if (!data.message || data.message.trim() === '') {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
