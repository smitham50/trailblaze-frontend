import React, { Fragment, useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CancelAccountModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    }, []);

    const onClick = () => {
        props.handleCancelAccount();
        handleClose();
    };

    return (
        <Fragment>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Account</Modal.Title>
                </Modal.Header>
                <Modal.Body className="subtext">{ props.message }</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="headline" onClick={ handleClose }>
                        No
                        </Button>
                    <Button variant="primary" className="headline" onClick={ onClick }>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default CancelAccountModal;