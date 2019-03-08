import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { render } from "react-dom";
import post from "./reducers/post";
import PageCRUD from "./containers/App";

const store = createStore(post);

class App extends Component {
  render = () => {
    return (
      <Provider store={store}>
        <PageCRUD />
      </Provider>
    );
  };
}

export default App;
