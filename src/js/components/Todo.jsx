import React, { Component } from 'react'
import FormShow from '../components/Form'
import Todo_l from './Todo_list'

class Todo extends Component {
    constructor(){
        super()
    }

    render(){

        return (
            <div className="container page">
                <div className="form_container container"> 
                    <button type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#myModal">Create Todo</button>
                    <FormShow />    
                </div> 
                <div className="todo_list_container container">
                    <Todo_l />
                </div>   
            </div>
        )
    }
}

export default Todo