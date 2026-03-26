import React from 'react';

export interface RainbowBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const RainbowBorderButton = ({
  children,
  className = '',
  type,
  ...props
}: RainbowBorderButtonProps) => {
  return (
    <button
      // default to "button" to avoid accidental form submits
      type={type ?? 'button'}
      className={`rainbow-border inline-flex items-center justify-center gap-2.5 px-4 text-white font-black transition-all duration-200 hover:brightness-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

