import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OptionModal = (props) => (
    <Modal
        show={!!props.selectedOption}
        onClose={props.handleClearSelectedOption}
    >
        <Modal.Body style={{ background: '#464b5e', color: '#a5afd7' }}>
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <Button style={{ background: '#8357c5', borderColor: 'white' }} onClick={props.handleClearSelectedOption}>Okay</Button>
        </Modal.Body>
    </Modal>
);

export default OptionModal;