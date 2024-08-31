import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, variant = 'base', onClick, type }) => {
  const classes = {
    base: 'bg-red-600 hover:bg-red-700',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        `rounded-[5px] px-3 text-sm font-medium leading-8 text-white ${classes[variant]}`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
