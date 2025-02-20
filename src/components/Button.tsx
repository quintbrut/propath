import React from 'react';

export const Button: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, children, className = '' }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 bg-orange-400 text-white rounded-full font-semibold 
    hover:bg-orange-500 transition-colors ${className}`}
  >
    {children}
  </button>
);