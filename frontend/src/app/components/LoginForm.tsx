"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { experimental_useFormState as useFormState } from "react-dom";

import { login } from "@/app/actions";

const initialState = {
  message: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Submit
    </button>
  );
}

const LoginForm: React.FC = () => {

  const [state, formAction] = useFormState(login, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <form action={formAction}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md text-gray-950"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md text-gray-950"
              required
            />
          </div>
          <SubmitButton />
          <p aria-live="polite" className="sr-only" role="status">
            {state?.message}
          </p>
          <p  className="flex justify-center items-center text-purple-700 p-2">
            {state?.message}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
