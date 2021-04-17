import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'; //install reactstrap
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getEvent, deleteEvent } from '../actions/eventActions';
import PropTypes from 'prop-types';
import './CreateEvent.css';

class EventList extends Component {

    componentDidMount() {
        this.props.getEvent();
    }

    onDeleteClick = (id) => {
        this.props.deleteEvent(id);
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render() {
      const { events } = this.props.event; 
      return (
          <section className = 'event-container'>
            <ListGroup>
                <TransitionGroup className="event-list">
                    {events.map(({_id, title, time, location, description}) => (
                        <CSSTransition key={_id} timeout={100} classNames="item">
                            <ListGroupItem>
                            { this.props.isAuthenticated ? 
                                <Button
                                    className="remove-btn"
                                    variant="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                    &times;
                                </Button> : null }
                                <h3> {title} <br/>
                                {time} | {location} <br/>
                                {description} </h3> 
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
          </section>
        )
    }
}
        
EventList.propTypes = {
    getEvent: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    event: state.event,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getEvent, deleteEvent })(EventList);