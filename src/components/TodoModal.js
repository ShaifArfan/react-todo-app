import cogoToast from 'cogo-toast';
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(todo?.title || '');
  const [status, setStatus] = useState(todo?.status || 'incomplete');

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    }
  }, [type, todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      cogoToast.error('Please enter a title', { position: 'bottom-right' });
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        cogoToast.success('Task added successfully', {
          position: 'bottom-right',
        });
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          cogoToast.success('Task Updated successfully', {
            position: 'bottom-right',
          });
        } else {
          cogoToast.success('No changes made', {
            position: 'bottom-right',
          });
          return;
        }
      }
      setModalOpen(false);
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
          <h1>{type === 'add' ? 'Add' : 'Update'} TODO</h1>
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
            {type === 'add' ? 'Add Task' : 'Update Task'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
