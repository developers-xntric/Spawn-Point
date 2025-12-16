import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  const baseClasses = "hidden md:block bg-[#BBFC00] text-[#031347] font-bold px-6 py-2 rounded-[5px] font-hel border border-transparent hover:bg-transparent hover:border-white hover:text-white";

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}