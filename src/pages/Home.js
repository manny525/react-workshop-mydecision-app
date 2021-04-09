import React, { Component } from 'react';
import { Button, FormControl, Row } from 'react-bootstrap';
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            mobile: '',
            err: null
        }
    }
    handleSubmit = () => {
        let { username, email, mobile } = this.state;
        if (username.length > 0 && email.length > 0 && mobile.length > 0) {
            this.setState({ err: null })
            this.props.history.push({
                pathname: '/dashboard',
                state: { details: { username: this.state.username, email: this.state.email, mobile: this.state.mobile } }
            })
        }
        else {
            this.setState({ err: '*Enter all the details' })
        }
    }
    render() {
        return (
            <div>
                <div className="home-header">
                    <FontAwesomeIcon size="3x" icon={faPersonBooth} />
                    <p style={{ fontWeight: 'bold', fontSize: '30px', marginLeft: '1%', marginBottom :'0' }}>My Decision App</p>
                    <p>Put your life in the hands of a computer</p>
                </div>
                <div>
                    <div style={{ marginLeft: '33%' }}>
                        <FormControl style={{ background: '#3c4251', border: 'none', width: '50%', marginBottom: '1%', color: 'white' }} onChange={(e) => { this.setState({ username: e.target.value }) }} placeholder="Name" />
                        <FormControl style={{ background: '#3c4251', border: 'none', width: '50%', marginBottom: '1%', color: 'white' }} onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Email" />
                        <FormControl style={{ background: '#3c4251', border: 'none', width: '50%', marginBottom: '1%', color: 'white' }} onChange={(e) => { this.setState({ mobile: e.target.value }) }} placeholder="Mobile Number" />
                        <Button style={{ background: '#8357c5', borderColor: 'white' }} onClick={this.handleSubmit}>Submit</Button>
                        <p style={{ color: 'red' }} >{this.state.err}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;