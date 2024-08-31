const ButtonAddTask = ({ onClick }) => {
  return (
    <div
      className='group flex items-center gap-3 p-2 hover:cursor-pointer'
      onClick={onClick}
    >
      {' '}
      <span className='block size-4 rounded-full p-[2px] group-hover:bg-red-500'>
        <svg
          viewBox='0 0 16 16'
          fill='currentColor'
          className='text-red-600 group-hover:text-white'
        >
          <path d='M8.649 8.649V16H7.351V8.649H0V7.351h7.351V0h1.298v7.351H16v1.298H8.649z'></path>
        </svg>
      </span>
      <p className='text-sm text-gray-400 group-hover:text-red-500'>Add task</p>
    </div>
  );
};

export default ButtonAddTask;
