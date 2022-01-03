import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useState } from 'react';
import styles from './styles/app.module.scss';

const checkVariants = {
  initial: {
    color: '#fff',
  },
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
};

const boxVariants = {
  checked: { background: 'royalblue' },
  unchecked: { background: 'grey' },
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <div className="container">
      <h1>Hello world !</h1>
      <motion.div
        animate={isOpen ? 'checked' : 'unchecked'}
        className={styles.svgBox}
        variants={boxVariants}
      >
        <motion.svg
          className={styles.svg}
          viewBox="0 0 53 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={checkVariants}
            animate={isOpen ? 'checked' : 'unchecked'}
            style={{ pathLength, opacity }}
            fill="none"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M1.5 22L16 36.5L51.5 1"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>

      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle {isOpen ? 'checked' : 'unchecked'}
      </button>
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div initial={{scale: .8, opacity: 0}} animate={{ scale: 1, opacity: 1 }} exit={{scale: 0.8, opacity: 0}} className={styles.box}>
          <h1>Hello wold</h1>
        </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}

export default App;
