import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import CancelAccountModal from './CancelAccountModal';
import axios from 'axios';
import useClearUser from '../Utilities/useClearUser';
import { IconRow, IconContainer } from '../StyledComponents/StyledManageAccount';

const ManageAccount = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');
    const clearUser = useClearUser();

    const renderCancelModel = () => {
        setMessage('Are you sure you want to cancel your account?');
        setShowModal(true);
    }

    const handleCancelAccount = async () => {
        localStorage.clear();
        clearUser();
        
        const resp = await axios.delete('https://nameless-wave-57808.herokuapp.com/api/v1/cancel_account');

        if (!resp.errors) {
            props.history.push('/');
        }
    }

    return (
        <>
            {
                showModal
                    &&   <CancelAccountModal 
                            handleCancelAccount={ handleCancelAccount }
                            message={ message }
                        />
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

export default withRouter(ManageAccount);