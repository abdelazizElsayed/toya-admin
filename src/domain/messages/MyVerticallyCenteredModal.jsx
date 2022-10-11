import Modal from 'react-bootstrap/Modal';
// import { Thumbnail } from '@modules/products/components/thumbnail';


import React from 'react'

function MyVerticallyCenteredModal(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton >
                    <div className="d-flex justify-content-end text-end w-100">
                        <Modal.Title id="contained-modal-title-vcenter" role="button">
                            <button onClick={props.onHide} ><i class="fa-solid fa-xmark" ></i></button>
                        </Modal.Title>
                    </div>
                </Modal.Header>

                <Modal.Body className=' d-flex flex-column '>
                    <h6 className='mb-3 '>User Name: {props.details.name} </h6>
                    <h6 className='mb-3 '>Email: {props.details.email} </h6>
                    <h6 className='mb-3 '>phone Number: {props.details.phoneNumber} </h6>
                    <h6 className='mb-3 '>Message: </h6>
                    <h6 className='mb-3 text-center'>{props.details.body} </h6>
                    {/* <h3 className='mb-3 text-lg text-gray-500 fw-bold'>{props.title}</h3> */}
                    {/* <Thumbnail thumbnail={props.thumbnail} size="small" /> */}
                    <img src={props.thumbnail} alt="" className='w-100' />
                </Modal.Body>

                <Modal.Footer>
                    {/* <div className="container">
                    <div className="row justify-content-center px-1 px-md-5">
                        <div className="col-6">
                            <button onClick={props} className="toya-border toya-bg text-white px-3 py-2 w-100"> <i class="fa-regular fa-heart"></i> Add to Wishlist</button>
                        </div>
                        <div className="col-6">
                            <button onClick={props.delete} className="toya-color toya-border px-3 py-2 w-100"> <i class="fa-solid fa-trash-can"></i> Just Delet</button>
                        </div>
                    </div>
                </div> */}

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MyVerticallyCenteredModal

