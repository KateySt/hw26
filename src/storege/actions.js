export const ACTIONS={
    SET_LIST:'SET_LIST',
}

export function setList(text) {
    return {
        type: ACTIONS.SET_LIST,
        value: text
    }
}