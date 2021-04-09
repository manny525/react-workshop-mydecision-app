import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'react-bootstrap';

export default (props) => {
    return (
        <Row className="dashboard-header">
            <Col style={{ display: 'flex' }}>
                <FontAwesomeIcon size="3x" icon={faPersonBooth} />
                <p style={{ fontWeight: 'bold', fontSize: '30px', marginLeft: '1%' }}>My Decision App</p>
            </Col>
            <Col style={{ textAlign: 'right' }}>
                <FontAwesomeIcon size="2x" icon={faUser} />
                <div>{props.name}</div>
            </Col>
        </Row>
    )
}