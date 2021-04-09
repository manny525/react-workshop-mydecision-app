import React from 'react';
import { Button } from 'react-bootstrap';

const Action = (props) => (
    <div>
        <Button size='lg' style={{ background: '#8357c5', borderColor: 'white' }} disabled={!props.hasOptions} onClick={props.handlePick}>What Should I do?</Button>
    </div>
)

export default Action;