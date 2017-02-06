import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { Modal, FormGroup, FormControl, Checkbox, ControlLabel, Button } from 'react-bootstrap';
import _ from 'lodash';
import app from '../../application';

export default class TaskList extends Component {
    constructor(params) {
        super(params);
        this.state = {
          task: this.props.task
        };
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const {task = {}} =  this.state;
      task[target.name] = value;
      this.setState(Object.assign(this.state, { task }));
    }

    saveTask(event) {
      event.preventDefault();
      
      const {task} = this.state;
      if (task) {
        task.complete = !!task.complete;
        if (task.id) {
          this.props.updateTask(task);
        } else {
          this.props.createTask(task);
        }
      }
    }

    cancel() {
      this.props.cancel();
    }

    render() {
      const { task } = this.state;
      return (
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={(event) => { this.saveTask(event) }}>
              <FormGroup controlId="task-name">
                <ControlLabel>Task Name</ControlLabel>
                <FormControl name="name" value={task.name} onChange={(e) => {this.handleInputChange(e)}} type="text" placeholder="Enter task name"/>
              </FormGroup>
              <Checkbox name="complete" checked={task.complete} onChange={(e) => {this.handleInputChange(e)}}>
                Is task complete
              </Checkbox>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={(event) => { this.saveTask(event) }} bsStyle="primary">Save</Button>
            <Button onClick={(event) => { this.cancel(event) }}>Close</Button>
          </Modal.Footer>

        </Modal.Dialog>)
    }
}

