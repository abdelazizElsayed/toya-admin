import React, { useState, useEffect } from 'react'
import TrashIcon from './../../components/fundamentals/icons/trash-icon';
import medusaRequest from "../../services/request"
import EyeIcon from '../../components/fundamentals/icons/eye-icon';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

function Inquiries() {

    const [message, setMessage] = useState([]);


    function getAllMessage() {
        const path = `/admin/messages`
        return medusaRequest("GET", path)
    }

    function deleteMessageApi(id) {
        const path = `/admin/messages/${id}`
        return medusaRequest("DELETE", path)
    }


    const fetchData = async () => {
        const { data } = await getAllMessage()
        setMessage(data?.messages);
    }

    useEffect(() => {
        fetchData();
    }, [])


    async function deleteMessage(id) {
        await deleteMessageApi(id)
        fetchData()
    }

    const [modalShow, setModalShow] = useState(false);
    const [messageId, setMessageId] = useState("");

    return (
        <>
            <h2 className='mb-5 text-3xl'>Inquiries</h2>
            <table className='message-tb'>
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>phoneNumber</th>
                        <th>email</th>
                        <th>message</th>
                        <th>attachment</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {message?.map((m, index) => (
                        m.type === "ASK" ?
                            <tr key={index}>
                                <td>{index += 1}</td>
                                <td>
                                    {m.name}

                                </td>
                                <td>
                                    {m.phoneNumber}

                                </td>
                                <td>
                                    {m.email}
                                </td>
                                <td class="wrap">{m.body}</td>
                                <td >
                                    <img src={m.attachment} alt="attachment" className='w-11' />
                                </td>
                                <td role={"button"}
                                    onClick={() => {
                                        deleteMessage(m.id)
                                    }}><TrashIcon /></td>
                                <td role={"button"}
                                    onClick={() => {
                                        setModalShow(true)
                                        setMessageId(m.id)
                                    }}>
                                    <EyeIcon />
                                </td>
                            </tr>
                            : ""
                    ))}
                </tbody>
            </table>
            {/* Model */}
            <MyVerticallyCenteredModal
                id={messageId}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Inquiries