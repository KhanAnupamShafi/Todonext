'use client';

import { MouseEvent, ReactNode } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({ children, onClick }: CustomButtonProps) => {
  const buttonClasses = `custom-hover transform-hover flex h-8 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] p-3 text-white hover:drop-shadow-sm`;

  return (
    <button className={buttonClasses} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
