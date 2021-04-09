import React, { Component } from 'react';
import Decider from '../components/Decider';
import Header from '../components/Header';
import '../styles/Dashboard.css'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.location.state.details.username ? props.location.state.details.username : 'New User',
            email: props.location.state.details.email ? props.location.state.details.email : '',
            mobile: props.location.state.details.mobile ? props.location.state.details.mobile : ''
        }
    }
    render() {
        const { username } = this.state;
        return (
            <div>
                <Header name={username} />
                <Decider />
            </div>
        )
    }
}

export default Dashboard;