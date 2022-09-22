import React, {useState} from 'react';
import {connect, useDispatch} from "react-redux";
import {setListF, setList} from "../features/inputThings/InputThingsSlice";
import {bindActionCreators} from "redux";


const EntryField = () => {
    const dispatch = useDispatch();
    const [textValue, setTextValue] = useState('');

    function handleChange() {
        dispatch(setListF(textValue));
    }

    return (
        <div>
            <input
                type="text"
                value={textValue}
                onChange={(text) => {
                    setTextValue(text.target.value)
                }}
            />
            <button
                type="submit"
                onClick={handleChange}
            >
                Input
            </button>
        </div>
    );
};

export default EntryField;
