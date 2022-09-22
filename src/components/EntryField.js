import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {setListF, setList} from "../features/inputThings/InputThingsSlice";
import {bindActionCreators} from "redux";


class EntryField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const handleChangeCounter = this.props.actions;
        handleChangeCounter(this.state.text);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.text}
                    onChange={(e) => {
                        this.setState({text: e.target.value})
                    }}
                />
                <button
                    type="submit"
                    onClick={this.handleChange}
                >
                    Input
                </button>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        counter: state.inputThings.value,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(setListF, dispatch)
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EntryField);
