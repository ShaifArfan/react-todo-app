import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

const CATEGORIES = ['Work', 'Personal', 'Shopping', 'Study'];
const PRIORITIES = ['high', 'medium', 'low'];

const dropIn = {
  hidden: { opacity: 0, transform: 'scale(0.9)' },
  visible: {
    transform: 'scale(1)',
    opacity: 1,
    transition: { duration: 0.1, type: 'spring', damping: 25, stiffness: 500 },
  },
  exit: { transform: 'scale(0.9)', opacity: 0 },
};

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const [category, setCategory] = useState('Personal');
  const [priority, setPriority] = useState('medium');

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
      setCategory(todo.category);
      setPriority(todo.priority || 'medium');
    } else {
      setTitle('');
      setStatus('incomplete');
      setCategory('Personal');
      setPriority('medium');
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error('Please enter a title');
      return;
    }

    if (type === 'add') {
      dispatch(addTodo(title, category, priority));
      toast.success('Task added successfully');
    }

    if (type === 'update') {
      dispatch(
        updateTodo({
          ...todo,
          title,
          status,
          category,
          priority,
        })
      );
      toast.success('Task updated successfully');
    }

    setModalOpen(false);
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
            >
              <MdOutlineClose />
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <h1 className={styles.formTitle}>
                {type === 'add' ? 'Add' : 'Update'} TODO
              </h1>

              <label>
                Title
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <label>
                Status
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Completed</option>
                </select>
              </label>

              <label>
                Category
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  {CATEGORIES.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </label>

              <label>
                Priority
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                  {PRIORITIES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </label>

              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  {type === 'add' ? 'Add Task' : 'Update Task'}
                </Button>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TodoModal;
