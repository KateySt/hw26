import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getListF} from "../features/inputThings/InputThingsSlice";

const EntryField = () => {
    const dispatch = useDispatch();
    const [textValue, setTextValue] = useState('');

    function handleChange() {
        dispatch(getListF(textValue));
    }

    return (
        <div>
            <input
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