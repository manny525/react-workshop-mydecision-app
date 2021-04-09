import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';
import Options from './Options';

class Decider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleDeleteOptions = () => {
        this.setState({ options: [] });
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    };
    handleAddOption = (option) => {
        if (option.length == 0) {
            return 'Enter valid value to add option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render() {
        return (
            <div className="decider-container">
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <div className="decider-box">
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption} />
                    <OptionModal selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption} />
                </div>
            </div>
        )
    }
}

export default Decider;