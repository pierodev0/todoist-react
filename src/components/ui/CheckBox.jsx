import { useState } from 'react';

const CheckBox = ({ className, completed,onCompleted }) => {
  
  return (
    <div className={className}>
      <label className='group relative flex cursor-pointer items-center hover:rounded hover:bg-pink-500/50'>
        <input
          type='checkbox'
          className='peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow transition-all checked:border-pink-600 checked:bg-pink-600 hover:shadow-md group-hover:border-none'
          id='check8'
          checked={completed}
          onChange={(e) => onCompleted(e.target.checked)}
        />
        <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white peer-checked:opacity-100'>
          <svg
            className='h-3.5 w-3.5'
            viewBox='0 0 20 20'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='1'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default CheckBox;
