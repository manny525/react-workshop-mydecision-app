import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Option = (props) => (
    <div>
        <Row style={{ padding: '2%' }}>
            <Col style={{ textAlign: 'left' }}>
                <p>{props.count}. {props.optionText}</p>
            </Col>
            <Col style={{ textAlign: 'right' }}>
                <button style={{ background: 'none', border: 'none', padding: 0, color: '#a5afd7' }}
                    onClick={(e) => { props.handleDeleteOption(props.optionText) }}>Remove</button>
            </Col>
        </Row>
    </div>
);

export default Option;