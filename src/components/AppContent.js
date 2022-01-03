import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import TodoItem from './TodoItem';

function AppContent() {
  const todoList = useSelector((state) => state.todo);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  console.log({ sortedTodoList, todoList });

  return (
    <div className={styles.content__wrapper}>
      {sortedTodoList.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
}

export default AppContent;
