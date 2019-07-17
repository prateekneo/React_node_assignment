import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import Todo from "./js/components/Todo";
import './css/Form.css'

render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById("root")
);