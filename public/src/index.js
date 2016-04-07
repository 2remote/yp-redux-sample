import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, bindActionCreators, compose } from 'redux';

/**
 * Reducers
 */
const greetingReducer = (state='' , action) => {
  switch (action.type) {
    case 'SAY_HELLO': return 'Hello ';
    case 'SAY_GOODBYE': return 'Goodbye ';
  }
  return state;
};

const nameReducer = (state='John', action) => {
  switch (action.type) {
    case 'CHANGE_NAME': return 'Joel';
  }
  return state;
};

/**
 * Middleware
 */
const actionLogger = ({dispatch, getState}) => (next) => (action) =>{
  console.log(action);
  return next(action);
};

const reducers = combineReducers({
  greeting: greetingReducer,
  name: nameReducer
});

const middleware = applyMiddleware(actionLogger);

/**
 * 创建store
 */
const store = createStore(
  reducers,
  { greeting: '(Roll over me) '},
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
/**
 * actions
 */
const changeName = () => {
  return { type: 'CHANGE_NAME' };
};

const hello = () => {
  return { type: 'SAY_HELLO' };
};
const goodbye = () => {
  return { type: 'SAY_GOODBYE' }
};

/**
 * React组件
 */
const Hello = (props) => (
  <div
    onMouseOver={props.hello}
    onMouseOut={props.goodbye}
    onClick={props.changeName}>
    {props.greeting}{props.name}
  </div>
);

const render = () => {
  ReactDOM.render(
    <Hello
      greeting={store.getState().greeting}
      name={store.getState().name}
      {...bindActionCreators({changeName, hello, goodbye}, store.dispatch)}
    />,
    document.getElementById('app')
  );
};

render();

store.subscribe(render);

// window.devToolsExtension ? window.devToolsExtension() : f=>f
