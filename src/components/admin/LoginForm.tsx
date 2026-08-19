"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/admin/actions";

export default function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(
    loginAction,
    undefined
  );

  return (
    <form action={action} className="flex flex-col gap-5">
      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-semibold text-white/80">
          Admin password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full rounded-xl border border-white/12 bg-white/5 px-4 py-3.5 text-[15px] text-white placeholder:text-white/30 transition-colors focus:border-blue focus:outline-none"
        />
      </div>

      {state?.error && (
        <p role="alert" className="text-sm font-medium text-red-400">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(20,115,255,0.6)] transition-all hover:bg-[#0f5fdb] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Logging in…" : "Log in"}
      </button>
    </form>
  );
}
