'use server';

type FormState = {
  success: boolean;
  message: string;
};

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get('email')?.toString();

  console.log('Email:', email);

  return {
    success: true,
    message: 'Thanks for submitting!'
  };
}