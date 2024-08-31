import React from 'react';

function IconClose({ className }) {
  return (
    <svg
      className={`size-6 ${className}`}
      x='0px'
      y='0px'
      viewBox='0 0 50 50'
      stroke='currentColor'
      fill='currentColor'
    >
      <path d='M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z' />
    </svg>
  );
}

export default IconClose;
