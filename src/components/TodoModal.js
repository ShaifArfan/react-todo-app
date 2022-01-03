import cogoToast from 'cogo-toast';
import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function TodoModal({ type, modalOpen, setModalOpen }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      cogoToast.error('Please enter a title', { position: 'bottom-right' });
      // return;
    }
    if (title && status) {
      dispatch(
        addTodo({
          title,
          status,
          time: new Date().toLocaleString(),
        })
      );
      setTitle('');
      setStatus('incomplete');
      setModalOpen(false);
      cogoToast.success('Task added successfully', {
        position: 'bottom-right',
      });
    }
  };

  if (!modalOpen) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.closeButton}
          onKeyDown={() => setModalOpen(false)}
          onClick={() => setModalOpen(false)}
          role="button"
          tabIndex={0}
        >
          <MdOutlineClose />
        </div>

        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="type">
            Status
            <select
              id="type"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="incomplete">Incomplete</option>
              <option value="complete">Completed</option>
            </select>
          </label>
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
