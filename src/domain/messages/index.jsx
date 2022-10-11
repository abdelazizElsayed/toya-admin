import React from 'react'
import { Router } from '@reach/router';
import Contact from './Contact';
import Inquiries from './Inquiries';

function Messages() {
    return (
        <>

            <Router >
                <Contact path="contact" />
            </Router>
            <Router >
                <Inquiries path="inquiries" />
            </Router>

        </>
    )
}

export default Messages