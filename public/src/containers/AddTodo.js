import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { StyleSheet } from 'ss.js';
const BASIC_PADDING = 10;
const LARGE_PADDING = 15;


export basic_padding = BASIC_PADDING;

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <input ref={node => {
          input = node;
        }} />
        <button style={StyleSheet.padding10} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
