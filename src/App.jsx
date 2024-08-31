import { useState } from 'react';
import Aside from 'src/components/Aside';
import FormAddTask from 'src/components/FormAddTask';
import Task from 'src/components/Task';
import Modal from 'src/components/ui/Modal';
import ButtonAddTask from 'src/components/ui/ButtonAddTask';
import { DATA_EXAMPLES } from 'src/data';
import Notification from 'src/components/ui/Notification';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(DATA_EXAMPLES);
  function handleShowTask() {
    setShowAddTask(!showAddTask);
  }

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(id){
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <main className='flex'>
        
        <Aside />
        <section className='flex-1 space-y-1 px-14 py-16'>
          <h2 className='text-3xl font-bold'>Today</h2>
          <div className=''>
            {tasks.map((item) => (
              <Task
                key={item.id}
                item={item}                
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {!showAddTask && <ButtonAddTask onClick={handleShowTask} />}
            {showAddTask && (
              <FormAddTask
                onShow={handleShowTask}
                onAddTask={handleAddTask}
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
