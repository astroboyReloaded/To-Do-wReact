import { useCallback, useEffect, useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const editInputRef = useRef();

  useEffect(() => {
    const unableEditing = (e) => {
      if (
        editing &&
        editInputRef.current &&
        !editInputRef.current.contains(e.target)
      ) {
        setEditing(false);
      }
    };
    document.addEventListener('mousedown', unableEditing);
    document.addEventListener('keypress', unableEditing);

    return () => {
      document.removeEventListener('mousedown', unableEditing);
    };
  });

  const handleEditing = () => {
    setEditing(true);
  };

  useEffect(() => {
    editing && editInputRef.current.focus();
  }, [editing]);

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <span>
          <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          <p className={itemProp.completed ? styles.completed : null}>
            {itemProp.title}
          </p>
        </span>
        <span>
          <button onClick={handleEditing}>
            <AiFillEdit className={styles.toDoBtn} />
          </button>
          <button onClick={() => delTodo(itemProp.id)}>
            <FaTrash className={styles.toDoBtn} />
          </button>
        </span>
      </div>
      <input
        ref={editInputRef}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
