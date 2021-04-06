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

    render() {
      const { events } = this.props.event; 
      return (
          <div className = 'event-container'>
            <h2>UPCOMING EVENTS</h2>
            <ListGroup>
                <TransitionGroup className="event-list">
                    {events.map(({ _id, title, time, location, description}) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                    &times;
                                    </Button>
                                    Title: {title} <br/>
                                    Time: {time} <br/>
                                    Location: {location} <br/>
                                    Description: {description} <br/>

                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
          </div>
        )
    }
}


EventList.propTypes = {
    getEvent: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    event: state.event
});

export default connect(mapStateToProps, { getEvent, deleteEvent })(EventList);