import React, {Component} from 'react';
import './AutoDropDown.scss'

export class AutoDropDown extends Component {
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ''
    };

    onChange = (e) => {
        console.log('onChanges');

        const {options} = this.props;
        const userInput = e.currentTarget.value;

        const filteredOptions = options.filter(
            (optionName) =>
                optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = (e) => {
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: e.currentTarget.innerText
        });
    };
    onKeyDown = (e) => {
        const {activeOption, filteredOptions} = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption]
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            this.setState({activeOption: activeOption - 1});
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                console.log(activeOption);
                return;
            }
            this.setState({activeOption: activeOption + 1});
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,

            state: {activeOption, filteredOptions, showOptions, userInput}
        } = this;
        let optionList;
        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                    <ul className="options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {
                                className = 'option-active';
                            }
                            return (
                                <li className={className} key={optionName} onClick={onClick}>
                                    {optionName}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                optionList = (
                    <div className="no-options">
                        <em>No Option!</em>
                    </div>
                );
            }
        }
        return (
            <React.Fragment>
                <div className="auto-drop-down">
                    <div className="search">
                        <label htmlFor="name">{this.props.label}</label>
                        <input
                            type="text"
                            id={this.props.id}
                            name={this.props.id}
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            value={userInput !== "" ? userInput : null}
                            defaultValue={this.props.defaulValue}
                            autoComplete="off"
                        />
                    </div>
                    {optionList}
                </div>
            </React.Fragment>
        );
    }
}

export default AutoDropDown;
