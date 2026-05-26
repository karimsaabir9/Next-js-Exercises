'use server';

type FormState = {
  success: boolean;
  message: string;
  error: string;
};

export async function register(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const password = formData.get('password')?.toString();

  if (!password || password.length < 6) {
    return {
      success: false,
      message: '',
      error: 'Password must be at least 6 characters.'
    };
  }

  return {
    success: true,
    message: 'Registered successfully!',
    error: ''
  };
}