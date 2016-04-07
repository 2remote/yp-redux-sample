import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>React and more</h1>
          <p><a href="#/todo">TODO APP</a></p>
          <hr />
        </header>
        {this.props.children}
      </div>
    );
  }
}
