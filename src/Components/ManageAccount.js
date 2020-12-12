import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import CancelAccountModal from './CancelAccountModal';
import axios from 'axios';

const ManageAccount = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");

    const renderCancelModel = () => {
        setMessage("Are you sure you want to cancel your account?")
        setShowModal(true);
    }

    const handleCancelAccount = async () => {
        localStorage.clear();
        props.clearUser();
        
        const resp = await axios.delete(`http://localhost:3000/api/v1/cancel_account`);

        if (!resp.errors) {
            props.history.push('/home');
        }
    }

    return (
        <Fragment>
            {
                showModal
                    ?
                    <CancelAccountModal 
                        handleCancelAccount={ handleCancelAccount }
                        message={ message }
                    />
                    :
                    null
            }
            <Row className="container-fluid manage-account">
                <Col xs={6}>
                    <Link to="/update-account" className="headline link-icon">
                        <i className="fas fa-edit fa-3x marginal"></i>
                        <p className="button-sized">Update Account</p>
                    </Link>
                </Col>
                <Col xs={6}>
                    <Link to="#" onClick={ renderCancelModel } className="headline link-icon">
                        <i className="fas fa-ban fa-3x marginal"></i>
                        <p className="button-sized">Cancel Account</p>
                    </Link>
                </Col>
            </Row>
        </Fragment>
    );
};

function mdp(dispatch) {
    return {
        clearUser: () => {
            dispatch({
                type: "CLEAR_USER"
            })
        }
    };
};

export default withRouter(connect(null, mdp)(ManageAccount));