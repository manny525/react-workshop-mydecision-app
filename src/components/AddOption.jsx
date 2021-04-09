import React from 'react';
import { Button, FormControl, Row, Col } from 'react-bootstrap';

export default class AddOption extends React.Component {
    state = {
        error: undefined,
        option: ''
    };
    handleAddOptions = () => {

        const error = this.props.handleAddOption(this.state.option.trim());

        this.setState({ error })

        if (!error) {
            this.setState({ option: '' })
        }
    }
    render() {
        return (
            <div style={{ background: '#3c4251' }}>
                <div style={{ padding: '3%' }}>
                    <div style={{ textAlign: 'left', fontStyle: 'italic' }}>
                        {this.state.error && <p>{this.state.error}</p>}
                    </div>
                    <Row>
                        <Col xs={9}>
                            <FormControl onChange={(e) => this.setState({ option: e.target.value })} value={this.state.option} style={{ background: '#333745', border: 'none', color: 'white' }} />
                        </Col>
                        <Col>
                            <Button style={{ background: '#8357c5', borderColor: 'white' }} onClick={this.handleAddOptions}>Add Option</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}