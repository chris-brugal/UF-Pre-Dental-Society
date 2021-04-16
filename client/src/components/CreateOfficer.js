import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'; //install reactstrap
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v1 as uuid} from 'uuid'; 
import './CreateOfficer.css';
import { connect } from 'react-redux';
import { getOfficer, deleteOfficer, editOfficer, addOfficer } from '../actions/officerActions';
import PropTypes from 'prop-types';
import photo from '../images/bowling.jpg';

class CreateOfficer extends Component {

    /*
    state = {
        officers: [
            { id: uuid(), name: 'Nate'},
            { id: uuid(), name: 'Diana'},
            { id: uuid(), name: 'Bobby'}
        ]
    }
 */

compoentDidMount() {
this.props.getOfficer();
}

//OfficerPic class here
render() {
const { officers } = this.props.officer;
//const { officers } = this.state;
return (
    
    <Container>
         <h1>test</h1>
        <Button color="dark"
        style={{marginBottom: '2rem'}}
        onClick={() => {
            const name = prompt('Enter Item');
            if(name) {
                this.setState(state => ({
                    officers: [...state.officers, { id: uuid(), displayName: name }]
                }));
            }
        }}>Add Item</Button>
        <ListGroup>
            <TransitionGroup className="officer-pics">
                {officers.map(({ id, displayName, position, bio }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                    <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                        this.setState(state => ({
                        officers: state.officers.filter(officer => officer.id !== id)
                    }));
                    }}
                    >
                    &times;
                    </Button>
                   
        <div class="hoverPhoto">
            <img src={photo} id='photo' width="400" height="400" alt="tree" />
            <div class="content" >
                <h1 className='name'>{displayName}</h1>
                    <h3 className='title'>{position}</h3>
                    
                    <h3 className='bio' >{bio}</h3>
             </div>
        </div>
       
    

                   
                </ListGroupItem>
                </CSSTransition>
                ))}
                </TransitionGroup >
        </ListGroup>
    </Container>
   
            );
        }
    }

CreateOfficer.propTypes = {
    getOfficer: PropTypes.func.isRequired,
    officer: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
officer: state.officer
});

export default connect(mapStateToProps, {getOfficer, addOfficer, editOfficer, deleteOfficer })(CreateOfficer);