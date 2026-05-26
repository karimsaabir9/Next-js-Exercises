'use client';

import { useActionState } from 'react';
import { submitForm } from './actions';

const initialState = {
  success: false,
  message: ''
};

export default function Page() {
  const [state, formAction] = useActionState(
    submitForm,
    initialState
  );

  return (
    <form action={formAction} className="space-y-4 p-6 max-w-md ">
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      {state.success && (
        <p className="text-green-600">
          {state.message}
        </p>
      )}
    </form>
  );
}