import { useState, useEffect } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    // Añadir el event listener cuando el modal está abierto
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    // Limpiar el event listener cuando el modal se cierra
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return [
    isOpen,
    openModal,
    closeModal
  ];
};
