import React, { useState } from 'react';
import Button from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddTodo = () => {
    setModalOpen(true);
    console.log('add todo');
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => handleAddTodo()}>
        Add Task
      </Button>
      <Button variant="secondary" onClick={() => console.log('clicked')}>
        All Status
      </Button>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
