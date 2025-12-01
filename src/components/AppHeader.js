import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { setFilterStatus } from '../slices/todoSlice';

function AppHeader() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const updateFilter = (e) => {
    dispatch(setFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>

      <SelectButton value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>

      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
