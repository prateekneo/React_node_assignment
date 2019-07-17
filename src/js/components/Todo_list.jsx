import React from 'react'
import { connect } from "react-redux";
import { editTodo } from "../actions/index";
import { deleteTodo } from "../actions/index";
import { sortTodoByPriority } from "../actions/index";
import { sortTodoByTime } from "../actions/index";
import { sortTodoByStatus } from "../actions/index";
import { filterByStatus } from "../actions/index";
import ModalShow from './Modal';

class Todo_list extends React.Component {

    constructor(){
        super();
    }

    handleStatus = (index, feature) => {
        this.props.editTodo(index, feature)
    }

    handleDelete = (index) => {
        this.props.deleteTodo(index);
    }

    handleSortByPriority = () => {
        this.props.sortTodoByPriority();
    }

    handleSortByTime = () => {
        this.props.sortTodoByTime();
    }

    handleSortByStatus = () => {
        this.props.sortTodoByStatus();
    }

    handleFilter = () => {
        if(document.getElementById('filter_value').value == 'incomplete'){
            this.props.filterByStatus('Incomplete');
        } else if (document.getElementById('filter_value').value == 'completed') {
            this.props.filterByStatus('Completed');
        } else {
            this.props.filterByStatus('Show_All');
        }
    }


    render(){
        return (
            <div class="todo_list">
                <div className="filter_status">
                    <label>Filter By Status : </label>
                    <select id="filter_value" onChange={this.handleFilter}>  
                            <option value="0">--Show All--</option>
                            <option value="completed">Completed</option>
                            <option value="incomplete">Incomplete</option>
                    </select>
                </div>
                <table class="table table-responsive table-hover">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Priority
                                <span className="glyphicon glyphicon-sort" onClick = {this.handleSortByPriority}></span>
                            </th>
                            <th>
                                Time
                                <span className="glyphicon glyphicon-sort" onClick = {this.handleSortByTime}></span>
                            </th>
                            <th>
                                Status
                                <span className="glyphicon glyphicon-sort" onClick = {this.handleSortByStatus}></span>
                            </th>
                            <th>
                                Edit
                            </th>
                            <th>
                                Mark
                            </th>
                            <th>
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todo?this.props.todo.map((value, index) => (value.filter_status === true)?<tr><td>{value.name}</td><td>{value.priority}</td><td>{value.date + ' ' + value.time}</td><td>{value.status}</td><td><ModalShow todo = {this.props.todo[index]} i = {index} /></td><td><span className = "glyphicon glyphicon-ok tick" onClick={() => this.handleStatus(index, 'Incomplete')}></span><span className = "glyphicon glyphicon-remove" onClick={() => this.handleStatus(index, 'Completed')}></span></td><td><span className="glyphicon glyphicon-trash delete" onClick={() => this.handleDelete(index)}></span></td></tr>:null):null}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { todo : state.todo };
};

function mapDispatchToProps(dispatch) {
    return {
    editTodo: (todo, feature) => dispatch(editTodo(todo, feature)),
    deleteTodo : todo => dispatch(deleteTodo(todo)),
    sortTodoByPriority : todo => dispatch(sortTodoByPriority()),
    sortTodoByTime : todo => dispatch(sortTodoByTime()),
    sortTodoByStatus : todo => dispatch(sortTodoByStatus()),
    filterByStatus : todo => dispatch(filterByStatus(todo))
    };
}

const Todo_l= connect(mapStateToProps,mapDispatchToProps)(Todo_list);
export default Todo_l