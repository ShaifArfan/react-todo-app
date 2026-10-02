import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { toggleTheme } from '../slices/todoSlice';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

function ThemeToggle() {
  const themeMode = useSelector((state) => state.todo.themeMode);
  const dispatch = useDispatch();
  const isDark = themeMode === 'dark';
  const label = `Switch to ${isDark ? 'light' : 'dark'} mode`;

  return (
    <button
      type="button"
      className={getClasses([styles.button, styles.button__themeToggle])}
      onClick={() => dispatch(toggleTheme())}
      aria-label={label}
      title={label}
    >
      {isDark ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}

export default ThemeToggle;
