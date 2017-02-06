import React, { Component } from 'react';
import TaskList from '../components/task-list/task-list';
import TaskEdit from '../components/task-edit/task-edit';
import { Grid, Well, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import tasksApi from '../actions/tasks'
import { browserHistory } from 'react-router';

export default class TaskContainer extends Component {

    constructor(params) {
        super(params);
        this.state = {
          tasks: [],
          complete: undefined
        };
    }

    componentDidMount() {
      this.fetchTaskList();
    }

    fetchTaskList(complete) {
        tasksApi.getTaskList({complete})
            .then((res) => {
                this.setState(Object.assign({}, this.state, { tasks: res,
                                                              complete: complete }));

            })
            .catch(() => {
                browserHistory.push('/');
            })
    }

    deleteTask(task) {
        tasksApi.deleteTask(task)
                .then((res) => {
                    this.fetchTaskList(this.state.complete);
                })
    }

    editTask(task) {
        this.setState({ task });
    }

    updateTask(task) {
        tasksApi.updateTask(task)
                .then((res) => {
                    this.setState(Object.assign({}, this.state, { task: undefined }));
                    this.fetchTaskList(this.state.complete);
                })

    }

    createTask(task) {
        tasksApi.createTask(task)
                .then((res) => {
                    this.setState(Object.assign({}, this.state, { task: undefined }));
                    this.fetchTaskList();
                })
        
    }

    startCreateTask() {
        this.setState(Object.assign({}, this.state, { task: {}}));
    }

    render() {
        const { task } = this.state || {};
        const buttons = [{
            name: 'All',
            complete: undefined,
        }, {
            name: 'Completed',
            complete: true,
        }, {
            name: 'Active',
            complete: false,
        }]
        return (
            <Grid>
                <h1>Task List</h1>
                <Well>
                    <TaskList editTask={(task) => { this.editTask(task); }}
                              deleteTask={(task) => { this.deleteTask(task); }}
                              completeTask={(task) => {this.updateTask(task); }}
                              tasks={this.state.tasks}/> 
                    <ButtonToolbar>
                        <ButtonGroup>
                            {buttons.map((button, idx) => {
                                return <Button key={idx} onClick={() => { this.fetchTaskList(button.complete); }}>{button.name}</Button>
                            })}
                        </ButtonGroup>

                        <Button onClick={() => { this.startCreateTask() }}>
                            Create Task
                        </Button>
                    </ButtonToolbar>

                </Well>
                { task && <TaskEdit task={task}
                                    cancel={ () => { this.setState({ task: undefined }); } }
                                    updateTask={(task) => { this.updateTask(task); }}
                                    createTask={(task) => { this.createTask(task); }}/>}
            </Grid>
            )
    }
}