import React from "react";
import LoginForm from "@/components/LoginForm";
import Stickers from "@/components/Stickers";

const Login: React.FC = () => {
  return (
    <div className="relative flex h-[calc(100vh-114px)] items-center justify-center overflow-hidden px-6 text-[#222b30]">
      <Stickers variant="login" />
      <div className="relative z-10 w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
