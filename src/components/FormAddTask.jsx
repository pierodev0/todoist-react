import { useState } from 'react';
import { nanoid } from 'nanoid';
import Button from 'src/components/ui/Button';

const FormAddTask = ({ onShow, onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);

  function handleTaskName(e) {
    setTaskName(e.target.value);

    if (e.target.value.length > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }

  function handleTaskDescription(e) {
    setTaskDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (taskDescription.length && taskName.length) {
      const newTask = {
        id: nanoid(),
        name: taskName,
        description: taskDescription,
        completed: false,
      };

      onAddTask(newTask);
      setTaskDescription('');
      setTaskName('');

      onShow();
    }
  }

  return (
    <form
      className='flex flex-col rounded-[10px] border border-gray-200 p-3'
      onSubmit={handleSubmit}
      id='formAddTaks'
    >
      
      <input
        type='text'
        placeholder='Task name'
        className={`placeholder:font-medium`}
        value={taskName}
        onChange={handleTaskName}
      />
      <input
        type='text'
        placeholder='Description'
        value={taskDescription}
        onChange={handleTaskDescription}
      />
      <div className='flex justify-end gap-2'>
        <Button
          variant='secondary'
          onClick={onShow}
        >
          Cancel
        </Button>
        <Button
          form='formAddTaks'
          type='submit'
          className={
            disabledButton
              ? 'cursor-not-allowed bg-opacity-50 hover:bg-opacity-50'
              : undefined
          }
        >
          Add task
        </Button>
      </div>
    </form>
  );
};

export default FormAddTask;
