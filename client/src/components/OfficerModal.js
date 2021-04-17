import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, } from 'reactstrap';
import { connect } from 'react-redux';
import { addOfficer } from '../actions/officerActions';
import './CreateOfficer.css';

import {v1 as uuid} from "uuid";


class OfficerModal extends Component {
    state = {
        modal: false,
        displayName: '',
        position: '',
        bio: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const newOfficer = {
            id: uuid(),
            displayName: this.state.displayName,
            position: this.state.position,
            bio: this.state.bio
        }

        //Add officer via addOfficer action
        this.props.addOfficer(newOfficer);

        //close modal
        this.toggle();
    }

    render() {
        return(
            <div className="officer-modal">
                <Button className="addOfficer" 
                onClick={this.toggle}
                color="dark"
                
                >
                Add Officer
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    >
                        <ModalHeader toggle={this.toggle}>Add an officer</ModalHeader>
                        <ModalBody> 
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="displayName"
                                        id='officer'
                                        placeholder='Name'
                                        onChange={this.onChange}
                                        /> <br/>
                                        <Input
                                        type="text"
                                        name="position"
                                        id='officer'
                                        placeholder='Position'
                                        onChange={this.onChange}
                                        /> <br/>
                                        <Input
                                        type="text"
                                        name="bio"
                                        id='officer'
                                        placeholder='Bio'
                                        onChange={this.onChange}
                                        /> <br/>

                                        <Button
                                        color="dark"
                                        style ={{marginTop: '2rem' }} block
                                        >Add Officer</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>

                    </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    officer: state.officer
});

export default connect(mapStateToProps, {addOfficer})(OfficerModal);