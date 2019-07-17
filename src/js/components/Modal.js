import React, { Component } from 'react'
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import TimeField from 'react-simple-timefield';
import { editFormTodo } from '../actions/index'

class Modal extends Component {
    constructor(props){
        super(props)
        //console.log(this.props.todo)
        this.state = {
            name : this.props.todo.name,
            priority : this.props.todo.priority,
            date : this.props.todo.date,
            time : this.props.todo.time,
            status : this.props.todo.status,
            filter_status : this.props.todo.filter_status 
        }
    }

    componentWillUnmount(){
       // console.log('prateek');
        this.setState({
                    name : '',
                    priority : 0,
                    date : this.props.todo.date,
                    time : '00:00',
                    status : 'Incompleted',
                    filter_status : true 
                  })
    }
    
    handleName = () => {
        let name_id = 'name' + this.props.i;
            let val = document.getElementById(name_id).value;
            this.setState({ name : val });      
    }

    handlePriority = () => {
        let priority_id = 'priority' + this.props.i;
        let val = document.getElementById(priority_id).value;
            this.setState({priority : val});        
    }

    handleTime = () => {
        let time_id = 'time' + this.props.i;
        let val = document.getElementById(time_id).value;
            this.setState({time : val});
    }

    handleDate = () => {
        let date_id = 'date' + this.props.i;
        let val = document.getElementById(date_id).value;
            this.setState({date : val});
    }

    handleForm = () => {
        this.setState({
            name : '',
            priority : 0,
            date : 'mm/dd/yyyy',
            time : '00:00'            
        })
    }

    handleSubmit = (e) => {
        let name_id = 'name' + this.props.i;
        let priority_id = 'priority' + this.props.i;
        let time_id = 'time' + this.props.i;
        let date_id = 'date' + this.props.i;
        let error_name_id = 'error_name' + this.props.i;
        let error_date_id = 'error_date' + this.props.i;

        if(document.getElementById(name_id).value === ''){
            document.getElementById(error_name_id).style.display = 'block';
            document.getElementById(error_date_id).style.display = 'none';
        } else if(document.getElementById(date_id).value === 'mm/dd/yyyy') {
            document.getElementById(error_name_id).style.display = 'none';
            document.getElementById(error_date_id).style.display = 'block';
        } else {
            document.getElementById(error_name_id).style.display = 'none';
            document.getElementById(error_date_id).style.display = 'none';
            e.preventDefault();
            const obj = {
                name : this.state.name,
                priority : this.state.priority,
                date : this.state.date,
                time : this.state.time,
                status : "Incomplete",
                filter_status : true
            }

            //document.getElementById('loader').style.display='block';
           
                //document.getElementById('loader').style.display='none';
            this.props.editFormTodo(obj, this.props.i);
        }
    }

    fetchDate = () => {
        let today = new Date();
         return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    }

    render() {
        let modal_id = "#myModal" + this.props.i;
        let modal = 'myModal' + this.props.i;
        let name_id = 'name' + this.props.i;
        let priority_id = 'priority' + this.props.i;
        let time_id = 'time' + this.props.i;
        let date_id = 'date' + this.props.i;
        let error_name_id = 'error_name' + this.props.i;
        let error_date_id = 'error_date' + this.props.i;    
        let date = this.fetchDate().toString();  
        
        return (
            <span class="create">
                <span className = "glyphicon glyphicon-pencil" data-toggle="modal" data-target={modal_id}></span>   
                <div id={modal} class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Edit Form</h4>
                                <div id={error_name_id} className="error_name">
                                    <span>Please Enter Name</span>
                                </div>
                                <div id={error_date_id} className="error_date">
                                    <span>Please Enter Date</span>
                                </div>
                            </div>
                            <div class="modal-body">
                                <div className="row form">
                                    <form>
                                        <div className="name_div form-group row">
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 name_lebel">
                                            <label>Name :</label>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 name_input">
                                                <input type="text" id={name_id} className="form-control" value={this.state.name} onChange={() => this.handleName()} />
                                            </div>
                                        </div>
                                        <div className="priority_div form-group row">
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 priority_label">
                                                <label>Priority :</label>
                                            </div>
                                            <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4 priority_input">
                                                <input type="number" min="0" id={priority_id} className="form-control" value={this.state.priority} onChange={() => this.handlePriority()} />
                                            </div>
                                        </div>
                                        <div className="date_div form-group row">
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 date_label">
                                                <label>Date :</label>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                <input type="date" min="2019-07-12" id={date_id} value={this.state.date} className="form-control" onChange={this.handleDate} />
                                            </div>
                                        </div>
                                        <div className="time_div form-group row">
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 time_label">
                                                <label>Time :</label>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 time_input">
                                                <TimeField value={this.state.time} onChange={this.handleTime} id={time_id} input={<input type="text" className="form-control" />} colon=":" />
                                            </div>
                                        </div>
                                        <span className="reset_btn">
                                            <input type="button" className="btn btn-default" value="Reset" onClick={this.handleForm} />
                                        </span>
                                        <span className="submit_btn">
                                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Submit" onClick={this.handleSubmit} />
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      addTodo: todo => dispatch(addTodo(todo)),
      editFormTodo: (todo, index) => dispatch(editFormTodo(todo, index))
    };
}

const ModalShow = connect(null, mapDispatchToProps)(Modal)
export default ModalShow