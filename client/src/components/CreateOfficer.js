import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Col } from 'reactstrap'; //install reactstrap
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './CreateOfficer.css';
import { connect } from 'react-redux';
import { getOfficer, deleteOfficer } from '../actions/officerActions';
import PropTypes from 'prop-types';
import photo from '../images/officer-default.png';

class CreateOfficer extends Component {

    componentDidMount() {
        this.props.getOfficer();
    }

    onDeleteClick = (id) => {
        this.props.deleteOfficer(id);
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
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
                            {officers.map(({ _id, displayName, position, bio, rank }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <div className="hoverPhoto">
                                { this.props.isAuthenticated ? 
                                <Button
                                    className="remove-btn"
                                    
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                    &times;
                                </Button> : null }
                                <img src={photo} className='photo' width="400" height="400" alt="tree" />
                                    <div className="content" >
                                        <div className="text-area">
                                            <h1 className='name'>{displayName}</h1>
                                            <h3 className='title'>{position}</h3>
                                            <h3 className='bio' >{bio}</h3>
                                            { this.props.isAuthenticated ?
                                            <h3 className='bio' >Current rank: #{rank}</h3> : null }
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
    officer: state.officer,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getOfficer, deleteOfficer })(CreateOfficer);