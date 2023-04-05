import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';
const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

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
          <button onClick={handleEditing}>Edit</button>
          <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        </span>
      </div>
      <input
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
