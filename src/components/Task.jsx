import { useState } from 'react';
import IconDelete from 'src/assets/Icons/IconDelete';
import IconEdit from 'src/assets/Icons/IconEdit';
import Button from 'src/components/ui/Button';
import CheckBox from 'src/components/ui/CheckBox';
import Modal from 'src/components/ui/Modal';
import Notification from 'src/components/ui/Notification';
import { useModal } from 'src/hooks/useModal';

const Task = ({ item, onDeleteTask }) => {
  const { name, description, id, completed } = item;
  const [isChecked, setIsChecked] = useState(completed);
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  function handleCompleted(completed) {
    setIsChecked(completed);
  }
  function handleDeleteTask() {
    onDeleteTask(id);
    closeModal();
  }
  return (
    <div className='flex gap-2 border-t p-2 last:border-b'>
      <Modal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <div className='pt-2'>
          Are you sure you want to delete{' '}
          <span className='font-bold'>{name}</span>?
        </div>
        <footer className='flex justify-end gap-2 pt-6'>
          <Button
            variant='secondary'
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button onClick={handleDeleteTask}>Delete</Button>
        </footer>
      </Modal>
      <Notification
        className={`${isChecked ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} transition-all duration-300 ease-in-out`}
        onClose={() => isOpenNotification(false)}
      />

      <CheckBox
        onCompleted={handleCompleted}
        completed={isChecked}
      />
      <span
        className={`flex-1 text-gray-700 ${isChecked ? 'text-pink-500' : ''}`}
      >
        {name}
      </span>
      <IconDelete
        className={'text-gray-500'}
        onClick={openModal}
      />
      <IconEdit className='text-gray-500' />
    </div>
  );
};

export default Task;
