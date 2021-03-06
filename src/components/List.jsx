import React from 'react';
import { toggleCompleted, reset } from '../store/actions';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  toggleCompleted: (id) => dispatch(toggleCompleted(id)),
  reset: () => dispatch(reset()),
});

const List = ({ toggleCompleted, list, reset }) => {
  return (
    <>
      <ul>
        {list.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleCompleted(todo)}
            className={todo.completed ? 'strikethrough' : ''}
          >
            {todo.description}
          </li>
        ))}
      </ul>
      <Button onClick={reset}>reset</Button>
    </>
  );
};

export default connect((s) => s, mapDispatchToProps)(List);
