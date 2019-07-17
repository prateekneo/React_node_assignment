import { ADD_TODO} from "../constants/action-types";
import { EDIT_TODO } from "../constants/action-types";
import { DELETE_TODO } from "../constants/action-types";
import { SORT_TODO_BY_PRIORITY } from "../constants/action-types";
import { SORT_TODO_BY_TIME } from "../constants/action-types";
import { SORT_TODO_BY_STATUS } from "../constants/action-types";
import { FILTER_BY_STATUS } from "../constants/action-types";
import { EDIT_FORM_TODO } from "../constants/action-types";

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function editTodo(index, feature) {
    return { type: EDIT_TODO, index : index, feature : feature };
  }

  export function deleteTodo(index) {
    return { type: DELETE_TODO, index : index };
  }

  export function sortTodoByPriority() {
    return { type: SORT_TODO_BY_PRIORITY };
  }

  export function sortTodoByTime() {
    return { type: SORT_TODO_BY_TIME };
  }

  export function sortTodoByStatus() {
    return { type: SORT_TODO_BY_STATUS };
  }

  export function filterByStatus(status) {
    return { type: FILTER_BY_STATUS, status : status };
  }

  export function editFormTodo(payload, index) {
    //alert("here");
    return { type: EDIT_FORM_TODO, index : index, payload };
  }