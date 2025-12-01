import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import CheckButton from './CheckButton';
import TodoModal from './TodoModal';

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// ⭐ CATEGORY COLORS
const categoryStyles = {
  Work: { background: '#FFB86C', color: '#000' },
  Personal: { background: '#8BE9FD', color: '#000' },
  Shopping: { background: '#FF79C6', color: '#fff' },
  Study: { background: '#50FA7B', color: '#000' },
};

// ⭐ PRIORITY COLORS
const priorityStyles = {
  high: { background: '#FF5555', color: '#fff' },
  medium: { background: '#F1FA8C', color: '#000' },
  low: { background: '#BD93F9', color: '#fff' },
};

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    setChecked(todo.status === 'complete');
  }, [todo.status]);

  const handleCheck = () => {
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? 'incomplete' : 'complete',
      })
    );
    setChecked(!checked);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />

          <div className={styles.texts}>
            {/* TITLE */}
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>

            {/* ⭐ PRIORITY BADGE */}
            <span
              style={{
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                marginTop: '4px',
                width: 'fit-content',
                ...priorityStyles[todo.priority],
              }}
            >
              Priority: {todo.priority}
            </span>

            {/* ⭐ CATEGORY BADGE */}
            <span
              style={{
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                marginTop: '4px',
                width: 'fit-content',
                ...categoryStyles[todo.category],
              }}
            >
              {todo.category}
            </span>

            <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p>
          </div>
        </div>

        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>

          <div
            className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>

      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
}

export default TodoItem;
