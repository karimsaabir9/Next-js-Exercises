'use client';

import { useActionState } from 'react';
import { register } from './actions';

const initialState = {
  success: false,
  message: '',
  error: ''
};

export default function Page() {
  const [state, formAction] = useActionState(
    register,
    initialState
  );

  return (
    <form action={formAction} className="space-y-4 p-6 max-w-md">
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Register
      </button>

      {state.success && (
        <p className="text-green-600">
          {state.message}
        </p>
      )}

      {!state.success && state.error && (
        <p className="text-red-600">
          {state.error}
        </p>
      )}
    </form>
  );
}