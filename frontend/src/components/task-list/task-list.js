import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { Well, Row, Col, Checkbox, Label, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import app from '../../application';

export default class TaskList extends Component {

    editTask(task) {
        this.props.editTask(task);
    }

    completeTask(task) {
        task.complete = !task.complete;
        this.props.completeTask(task);
    }

    deleteTask(task) {
        this.props.deleteTask(task);
    }

    render() {
        const {tasks} = this.props;
        let i = 5;
        console.log(this.props, tasks);
        const tasksBody = tasks ? tasks.map((task, idx) => {
                return <li className="list-group-item" key={task.name + idx}>
                          <Row key={task.name + idx}>
                            <Col key={task.name + '8'} sm={8}>
                              <Checkbox checked={task.complete} onChange={ (event) => { this.completeTask(task); } } name={task.name}>
                                {task.name}
                              </Checkbox>
                            </Col>
                            <Col key={task.name + '4'} sm={4}>
                              <ButtonToolbar>
                                <Button bsStyle="primary" onClick={ () => { this.editTask(task); }}> <Glyphicon glyph="pencil"/> Edit </Button>
                                <Button bsStyle="danger" onClick={ () => { this.deleteTask(task); }}> <Glyphicon glyph="remove"/> Delete </Button>
                              </ButtonToolbar>
                            </Col>  
                          </Row>
                        </li>
            }) : '';
        return (
            <Row>
                <Col sm={12}>
                    <ul className="list-group">
                        {tasksBody}
                    </ul>
                </Col>
            </Row>)
    }
}