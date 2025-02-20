import React from 'react';

export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-3xl p-6 shadow-lg ${className}`}>
    {children}
  </div>
);