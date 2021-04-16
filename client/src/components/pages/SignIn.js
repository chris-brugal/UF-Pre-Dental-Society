import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import SignInRedirect from '../SignInRedirect';

export default function SignIn () {
    return (
        <>
        <h1 className='sign-in'>SIGN IN</h1>
        <SignInRedirect />
        <Footer />
        </>
        )
}