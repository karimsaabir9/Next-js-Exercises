'use client';

import { useActionState } from 'react';
import { greetUser } from './actions';

const initialState = {
  success: false,
  message: ''
};

export default function Page() {
  const [state, formAction] = useActionState(
    greetUser,
    initialState
  );

  return (
    <form action={formAction} className="space-y-4 p-6 max-w-md">
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        className="border p-2 w-full"
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      {state.success && (
        <p className="text-green-700 font-medium">
          {state.message}
        </p>
      )}
    </form>
  );
}