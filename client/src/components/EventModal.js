import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addEvent } from '../actions/eventActions';
import './EventModal.css';

class EventModal extends Component {
    state = {
        modal: false,
        title: '',
        time: '',
        location: '',
        description: ''
    }

    toggle = () => {
        this.setState ({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newEvent = {
            title: this.state.title,
            description: this.state.description,
            time: this.state.time,
            location: this.state.location,
            image: this.state.image,
            link: this.state.link
        }

        // add item via addEvent action
        this.props.addEvent(newEvent);

        // close modal
        this.toggle();
    }

    render() {
        return(
            <div className = 'modal-container'>
                <Button
                    color="dark"
                    onClick={this.toggle}
                >Add New Event</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>Add New Event</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Input
                                type="text"
                                name="title"
                                id="event"
                                placeholder="Title"
                                onChange={this.onChange}
                            /> <br/>
                            <Input
                                type="text"
                                name="time"
                                id="event"
                                placeholder="Time"
                                onChange={this.onChange}
                            /> <br/>
                            <Input
                                type="text"
                                name="location"
                                id="event"
                                placeholder="Location or Link"
                                onChange={this.onChange}
                            /> <br/>
                            <Input
                                type="text"
                                name="description"
                                id="event"
                                placeholder="Description"
                                onChange={this.onChange}
                            /> <br/>
                            <Input
                                type="text"
                                name="image"
                                id="event"
                                placeholder="image"
                                onChange={this.onChange}
                            /> <br/>
                            <Input
                                type="text"
                                name="link"
                                id="event"
                                placeholder="link"
                                onChange={this.onChange}
                            /> <br/>
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                            >Submit</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    event: state.event
});

export default connect(mapStateToProps, { addEvent })(EventModal);