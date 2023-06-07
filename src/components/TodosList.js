import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps,
  handleChange,
  delTodo,
  setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

export default TodosList;

const todosPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(todosPropTypes).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
