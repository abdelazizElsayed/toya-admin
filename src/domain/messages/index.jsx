import React from 'react'
import { Router, Route } from '@reach/router';
import Contact from './Contact';
import Inquiries from './Inquiries';
import MessageDetails from './MessageDetails';

function Messages() {
    return (
        <>

            <Router >
                <Contact path="contact" >
                    
                </Contact>
            </Router>

            <Router >
                <Inquiries path="inquiries" />
                <MessageDetails path="details" />

            </Router>

        </>
    )
}

export default Messages