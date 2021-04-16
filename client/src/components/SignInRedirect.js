import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'; //install reactstrap
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import axios from 'axios'

class SignInRedirect extends Component {
    componentDidMount() {
        axios.get('/auth/google')
    }
    render() {
        return (
            <section className = 'Invisible'>Yeet</section>

        )
    }
}

export default SignInRedirect;