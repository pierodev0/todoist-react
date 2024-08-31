import IconClose from 'src/assets/Icons/IconClose';
import { twMerge } from 'tailwind-merge';

const Notification = ({ className, onClose }) => {
  return (
    <>
      {onClose && (
        <div
          className={twMerge(
            'fixed bottom-4 left-4 flex items-center gap-3 rounded-md bg-stone-800 px-4 py-3.5 text-white',
            className,
          )}
        >
          <span>1 task completed </span>
          <span className='px-2 text-sm font-medium text-red-400'>Undo</span>
          <button onClick={onClose}>
            <IconClose className='size-4 text-white' />
          </button>
        </div>
      )}
    </>
  );
};

export default Notification;
