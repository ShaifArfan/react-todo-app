import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "./slices/todoSlice";

function App() {
  const [theme, setTheme] = useState('light');
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.todo.searchQuery);

  // Load saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todoTheme");
    if (saved) setTheme(saved);
  }, []);

  // Apply theme + save to storage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("todoTheme", theme);
  }, [theme]);

  // Toggle button
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container">

        {/* ⭐ TOP BAR (Search + Toggle) */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "10px",
            padding: "15px 0"
          }}
        >
          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #aaa",
              fontSize: "14px",
            }}
          />

          {/* YOUR EXACT SAME TOGGLE */}
          <button className={styles.themeToggleBtn} onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        <PageTitle>TODO List</PageTitle>

        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
