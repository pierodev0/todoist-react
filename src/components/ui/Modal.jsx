import React from 'react';
import Button from 'src/components/ui/Button';

const Modal = ({ children, isOpen, closeModal, actions }) => {
  return (
    <>
      {isOpen && (
        <div
          className='fixed inset-0 z-10 flex justify-center bg-black/50 p-32'
          onClick={closeModal}
        >
          <div
            className='relative h-fit w-full max-w-lg rounded-md bg-white p-4'
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
