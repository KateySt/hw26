import React from 'react';
import {connect} from "react-redux";
import {setList} from "../storege/actions";
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
        value: state.value,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(setList, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryField);
