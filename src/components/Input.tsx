import React from 'react';

export const Input: React.FC<{
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}> = ({ type = 'text', placeholder, value, onChange, className = '' }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-3 rounded-xl 
    bg-gray-100 
    text-gray-900 
    placeholder-gray-500 
    border border-transparent 
    focus:border-purple-500 
    focus:ring-2 
    focus:ring-purple-500 
    focus:outline-none 
    ${className}`}
  />
);