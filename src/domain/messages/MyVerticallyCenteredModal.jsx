import Modal from 'react-bootstrap/Modal';
// import { Thumbnail } from '@modules/products/components/thumbnail';
import React, { useState, useEffect } from 'react'
// import medusaRequest from "../../services/request"
import medusaRequest from './../../services/request';
import { ModalFooter } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {

    const [message, setMessage] = useState({});

    function messageDetailsApi(id) {

        const path = `/admin/messages/${id}`
        return medusaRequest("GET", path)
    }

    useEffect(() => {

        messageDetails(props.id);

    }, [props.id])

    async function messageDetails(id) {
        const { data } = await messageDetailsApi(id)
        setMessage(data);

    }


    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton >

                    <h4 className='w-100'>Message Details:-</h4>
                    <div className="d-flex justify-content-end text-end w-100">

                        <Modal.Title id="contained-modal-title-vcenter" role="button">
                            <button onClick={props.onHide} ><i class="fa-solid fa-xmark" ></i></button>
                        </Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body className=' d-flex flex-column '>
                    <div className='px-4 pb-4'>
                        <h6 > <span className='toya-color'>Name:</span> {message?.name}</h6>
                        <h6><span className='toya-color'>Phone Number:</span> {message?.phoneNumber}</h6>
                        <h6><span className='toya-color'>Email:</span> {message?.email}</h6>
                        <h6 className=' toya-color'>Message:</h6>
                        <h6 className=' m-auto leading-6'> {message?.body}</h6>

                    </div>

                </Modal.Body >
                {
                    message.attachment === null ? "" :
                        <ModalFooter className=' d-flex justify-content-start align-items-start'>
                            <h6 className='toya-color'>Attachment:</h6>
                            <img src={message.attachment} className="w-36 rounded-3 text-start" alt="attachment" />
                        </ModalFooter>
                }
            </Modal>
        </>
    )
}

export default MyVerticallyCenteredModal

