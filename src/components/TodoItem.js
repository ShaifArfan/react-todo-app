import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import CheckButton from './CheckButton';

function TodoItem({ todo }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        <CheckButton checked={checked} setChecked={setChecked} />
        <p
          className={getClasses([
            styles.todoText,
            checked && styles['todoText--completed'],
          ])}
        >
          {todo.title}
        </p>
      </div>
      <div className={styles.todoActions}>
        <div className={styles.icon}>
          <MdDelete />
        </div>
        <div className={styles.icon}>
          <MdEdit />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
