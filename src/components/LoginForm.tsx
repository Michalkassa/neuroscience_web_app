'use client'
import { useActionState, useState } from "react";
import Image from "next/image";
import { SignIn } from "@/app/api/auth/actions";
import { bookFont, ui } from "@/app/theme";

const initialState = {
  message: "",
};

const LoginForm: React.FC = () => {
  const [state, formAction] = useActionState(SignIn, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`w-full max-w-md ${ui.panel}`} style={{ fontFamily: bookFont }}>
      <div className="mb-6 flex items-center justify-center">
        <Image src="/logo.png" alt="logo" width={64} height={64} />
      </div>
      <h1 className="mb-8 text-center text-3xl font-medium text-[#222b30]">
        Sign in
      </h1>

      <form className="space-y-6" action={formAction}>
        <div>
          <label htmlFor="email" className={ui.label}>Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="name@company.com"
            className={ui.input}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className={ui.label}>Password</label>
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="text-sm uppercase tracking-[0.2em] text-[#5d6a70] underline underline-offset-4 transition-colors hover:text-[#222b30]"
              aria-pressed={showPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="password"
            className={ui.input}
          />
        </div>
        <button type="submit" className={ui.button}>
          Sign in
        </button>
        {state?.message && (
          <p className="text-center text-lg text-[#9b4a44]">{state.message}</p>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
