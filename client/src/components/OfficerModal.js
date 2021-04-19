import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, } from 'reactstrap';
import { connect } from 'react-redux';
import { addOfficer } from '../actions/officerActions';
import './CreateOfficer.css';
import PropTypes from 'prop-types';
import {v1 as uuid} from "uuid";


class OfficerModal extends Component {
    state = {
        modal: false,
        displayName: '',
        position: '',
        bio: '',
        image: 'Image belongs here',
        rank: ''
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

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
            bio: this.state.bio,
            image: this.state.fileName,
            rank: this.state.rank
        }

        //Add officer via addOfficer action
        this.props.addOfficer(newOfficer);

        //close modal
        this.toggle();
    }

    render() {
        return(
            <div className="officer-modal">
                { this.props.isAuthenticated ?
                <Button className="addOfficer" 
                onClick={this.toggle}
                color="dark"
                
                >
                Add Officer
                </Button> : null }

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
                                    <Input
                                        type="file"
                                        name="image"
                                       // id='officer'
                                       // placeholder='Rank number to set order on page (Ex: 1 = First Photo on Page)'
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
    officer: state.officer,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addOfficer})(OfficerModal);