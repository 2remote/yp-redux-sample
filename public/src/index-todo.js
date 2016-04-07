/* 1. 基本React引用 */
import React from 'react';
import ReactDOM from 'react-dom';
/* 2. 路由相关 */
import { Router, Route, IndexRoute, useRouterHistory, browserHistory, hashHistory } from 'react-router';
/* 3. 移除掉queryKey */
import createHistory from 'history/lib/createHashHistory';
/* 4. 接入redux */
import { Provider } from 'react-redux';

/* 布局组件 */
import App from './layout/App.jsx';
import Content from './layout/Content.jsx';
import Spare from './layout/Spare.jsx';

import AppTodo from './components/App';

// var MainRouter = (
//   <Provider>
//     <Router history={useRouterHistory(createHistory)({queryKey: false})}>
//       <Route path="/" component={App}>
//         <Route path="content" component={Content} />
//         <Route path="spare" component={Spare} />
//       </Route>
//     </Router>
//   </Provider>
// );
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
/* 从reducers创建store */
import todoApp from './reducers';
let store = createStore(todoApp);

// const history = syncHistoryWithStore(browserHistory, store);
// hashHistory是有#的历史记录
const history = syncHistoryWithStore(hashHistory, store);

var MainRouter = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="todo" component={AppTodo}>
        </Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(MainRouter, document.getElementById('app'));
