import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import CancelAccountModal from './CancelAccountModal';
import axios from 'axios';
import styled from 'styled-components';

const IconRow = styled.div`
    display: flex;
    a:link, a:visited {
        color:  #1c1b1be1;
    }
    a:hover {
        color:  #7d7a7ae1;
    }
    .headline {
        font-family: 'Amatic SC', cursive;
    }
    .marginal {
        margin: 2%;
    }
    .button-sized {
        font-size: 1.2em;
    }
`;

const IconContainer = styled.div`
    margin: 0 8rem;

    @media screen and (max-width: 1000px) {
        margin 0 2rem;
    }
`;

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
        
        const resp = await axios.delete('https://nameless-wave-57808.herokuapp.com/api/v1/cancel_account');

        if (!resp.errors) {
            props.history.push('/');
        }
    }

    return (
        <>
            {
                showModal
                    ?   <CancelAccountModal 
                            handleCancelAccount={ handleCancelAccount }
                            message={ message }
                        />
                    :   null
            }
            <IconRow>
                <IconContainer>
                    <Link to="/update-account" className="headline">
                        <i className="fas fa-edit fa-3x marginal"></i>
                        <p className="button-sized">Update Account</p>
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Link to="#" onClick={ renderCancelModel } className="headline">
                        <i className="fas fa-ban fa-3x marginal"></i>
                        <p className="button-sized">Cancel Account</p>
                    </Link>
                </IconContainer>
            </IconRow>
        </>
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