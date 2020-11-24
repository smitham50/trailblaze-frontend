import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import CancelAccount from './CancelAccount';

export default function ManageAccount(props) {
    return (
        <Row className="container-fluid manage-account">
            <Col xs={6}>
                <Nav.Link href="/update-account" className="headline link-icon">
                    <i className="fas fa-edit fa-3x marginal"></i>
                    <p className="button-sized">Update Account</p>
                </Nav.Link>
            </Col>
            <Col xs={6}>
                <Nav.Link href="/cancel-account" className="headline link-icon">
                    <i className="fas fa-ban fa-3x marginal"></i>
                    <p className="button-sized">Cancel Account</p>
                </Nav.Link>
            </Col>
        </Row>
    );
};