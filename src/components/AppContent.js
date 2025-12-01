import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import TodoItem from './TodoItem';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const filterCategory = useSelector((state) => state.todo.filterCategory);
  const searchQuery = useSelector((state) => state.todo.searchQuery);

  console.log(todoList);

  // Sort newest first
  const sortedTodoList = [...todoList].sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

  // Filter by status
  const statusFiltered = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') return true;
    return item.status === filterStatus;
  });

  // Filter by category
  const categoryFiltered = statusFiltered.filter((item) => {
    if (filterCategory === 'All') return true;
    return (item.category || 'Personal') === filterCategory;
  });

  // ⭐ Search filter
  const fullyFiltered = categoryFiltered.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* CATEGORY FILTER */}
      <div style={{ marginBottom: '15px' }}>
        <label
          htmlFor="categoryFilter"
          style={{ marginRight: '10px', fontWeight: 'bold' }}
        >
          Category:
        </label>

        <select
          id="categoryFilter"
          value={filterCategory}
          onChange={(e) =>
            dispatch({
              type: 'todo/setFilterCategory',
              payload: e.target.value,
            })
          }
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
          <option value="Study">Study</option>
        </select>
      </div>

      <AnimatePresence>
        {fullyFiltered.length > 0 ? (
          fullyFiltered.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Todos
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AppContent;
