import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Col } from 'reactstrap'; //install reactstrap
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './CreateOfficer.css';
import { connect } from 'react-redux';
import { getOfficer, deleteOfficer, editOfficer, addOfficer } from '../actions/officerActions';
import PropTypes from 'prop-types';
import photo from '../images/bowling.jpg';

class CreateOfficer extends Component {

compoentDidMount() {
this.props.getOfficer();
}

onDeleteClick = (id) => {
    this.props.deleteOfficer(id);
}

//OfficerPic class here
render() {
const { officers } = this.props.officer;
//const { officers } = this.state;
return (
    
    <div className="center-everything">
    <Container >
        
        
        <div className ="grid-container">
            <TransitionGroup className="officer-pics">
                {officers.map(({ id, displayName, position, bio }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                
               
        <div class="hoverPhoto">
        <Button
                    className="remove-btn"
                    
                    onClick={this.onDeleteClick.bind(this, id)}
                    >
                    &times;
            </Button> 
            <img src={photo} id='photo' width="400" height="400" alt="tree" />
            
            <div class="content" >
            
            <div className="text-area">
                <h1 className='name'>{displayName}</h1>
                    <h3 className='title'>{position}</h3>
                    <h3 className='bio' >{bio}</h3>
                   </div>
            </div>
        </div>    
              
                
                </CSSTransition>
                ))}
                </TransitionGroup >
                </div>
               
    </Container>
    </div>
   
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