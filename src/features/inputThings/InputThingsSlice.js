/*import {createSlice} from '@reduxjs/toolkit'

export const InputThingsSlice = createSlice({
    name: 'inputThings',
    initialState: {
        ListInputThings: [],
        value: 0,
    },
    reducers: {
        setList: (state, action) => {
            state.value = state.ListInputThings.unshift(action.payload)
        },
    },
})

export const {setList} = InputThingsSlice.actions

export const selectInputList = (state) => state.inputThings.ListInputThings

export const selectValue = (state) => state.inputThings.value

export const setListF = (i) => (dispatch) => {
    dispatch(setList(i))
}

export default InputThingsSlice.reducer

 */