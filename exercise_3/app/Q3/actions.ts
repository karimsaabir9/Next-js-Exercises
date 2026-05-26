'use server';

type FormState = {
  success: boolean;
  message: string;
};

export async function greetUser(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const firstName = formData.get('firstName')?.toString();
  const lastName = formData.get('lastName')?.toString();

  return {
    success: true,
    message: `Hello, ${firstName} ${lastName}!`
  };
}