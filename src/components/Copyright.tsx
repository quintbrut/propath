import React from 'react';

export const Copyright: React.FC = () => {
  return (
    <div className="flex justify-center py-2">
      <div className="px-6 py-1 text-sm text-gray-600 rounded-full bg-white/90">
        © {new Date().getFullYear()}
      </div>
    </div>
  );
};
