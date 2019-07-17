import React, { Component } from 'react'
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import TimeField from 'react-simple-timefield';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            priority : 0,
            date : 'mm/dd/yyyy',
            time : "00:00",
            status : 'Incompleted',
            filter_status : true
        }
    }

    handleName = () => {
            let val = document.getElementById('name').value;
            this.setState({ name : val });      
    }

    handlePriority = () => {
        let val = document.getElementById('priority').value;
            this.setState({priority : val});        
    }

    handleTime = () => {
        let val = document.getElementById('time').value;
            this.setState({time : val});
    }

    handleDate = () => {
        let val = document.getElementById('date').value;
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
        
        if(document.getElementById('name').value === '') {
            document.getElementById('error_name').style.display = 'block';
            document.getElementById('error_date').style.display = 'none';
        } else if(document.getElementById('date').value === 'mm/dd/yyyy') {
            document.getElementById('error_name').style.display = 'none';
            document.getElementById('error_date').style.display = 'block';
        } else {
            document.getElementById('error_name').style.display = 'none';
            document.getElementById('error_date').style.display = 'none';
            e.preventDefault();
            const obj = {
                name : this.state.name,
                priority : this.state.priority,
                date : this.state.date,
                time : this.state.time,
                status : "Incomplete",
                filter_status : true
            }
            this.props.addTodo(obj);
            this.setState({
                name: "",
                priority : 0,
                date : 'mm/dd/yyyy',
                time : '00:00',
                status: 'Incompleted',
                filter_status : true
            })
        }
    }

    render() {
        return (
            <div class="create">
                <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Todo Form</h4>
                                <div id="error_name" className="error_name">
                                    <span>Please Enter Name</span>
                                </div>
                                <div id="error_date" className="error_date">
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
                                                
                                                <input type="text" id="name" className="form-control" value={this.state.name} onChange={() => this.handleName()} />
                                            </div>
                                        </div>
                                        <div className="priority_div form-group row">
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 priority_label">
                                                <label>Priority :</label>
                                            </div>
                                            <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4 priority_input">
                                                <input type="number" min="0" id="priority" className="form-control" value={this.state.priority} onChange={() => this.handlePriority()} />
                                            </div>
                                        </div>
                                        <div className="time_div form-group row">
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 date_label">
                                                <label>Date :</label>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                                    <input type="date" min="2019-07-12" id="date" value={this.state.date} class="form-control" onChange={this.handleDate} />
                                            </div>
                                        </div>
                                        <div className="time_div form-group row">
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 time_label">
                                                <label>Time :</label>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 time_input">
                                                <TimeField value={this.state.time} onChange={this.handleTime} id="time" input={<input type="text" className="form-control" />} colon=":" />
                                                
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
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      addTodo: todo => dispatch(addTodo(todo))
    };
}

const FormShow = connect(null, mapDispatchToProps)(Form)
export default FormShow