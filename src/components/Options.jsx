import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Option from './Option';
// import Option from './Option'

const Options = (props) => (
    <div style={{ background: '#3c4251' }}>
        <div style={{ background: '#464b5e', padding: '1%' }}>
            <Row>
                <Col xs={6} style={{ textAlign: 'left' }}>
                    <h3>My Options</h3>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                    <div style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={props.handleDeleteOptions}>
                        <h5 style={{ marginTop: '3%' }}>Remove All</h5>
                    </div>
                </Col>
            </Row>
        </div>
        <div>
            {props.options.length === 0 && <div style={{ marginTop: '2%' }}>Please add an option to get started</div>}
            {
                props.options.map((option, index) =>
                    <Option
                        handleDeleteOption={props.handleDeleteOption}
                        key={option}
                        optionText={option}
                        count={index + 1}
                    />
                )
            }
        </div>
    </div>
);

export default Options;