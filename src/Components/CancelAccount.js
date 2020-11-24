import React, { Fragment, useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

export default function CancelAccount(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    }, []);

    const handleCancelAccount = async () => {
        const resp = await axios.delete(`http://localhost:3000/api/v1/cancel_account`);

        // if ()
    }

    return (
        <Fragment>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to cancel your account?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        No
                    </Button>
                    <Button variant="primary" onClick={ handleCancelAccount && handleClose }>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};