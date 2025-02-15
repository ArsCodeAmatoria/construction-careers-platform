import React from 'react';

function Footer() {
  return (
    <footer className="bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Embers Staffing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer; 