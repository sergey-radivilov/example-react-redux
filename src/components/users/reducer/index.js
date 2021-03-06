// constants
import CONSTANTS from "../constants";

const initialState = {
    // fields for adding user
    fields: {
        id:      null,
        name:    '',
        surname: '',
        age:     ''
    },
    // users list
    list: []
};

export default function usersListReducer (state = initialState, action) {
    switch (action.type) {

    // ADDING USER FIELDS
    case CONSTANTS.ACTIONS.SET_FIELD:
        return {
            ...state,
            fields: {
                ...state.fields,
                [action.payload.field]: action.payload.value
            }
        };

    case CONSTANTS.ACTIONS.CLEAR_FIELDS:
        return {
            ...state,
            fields: initialState.fields
        };


    // USERS LIST
    case CONSTANTS.ACTIONS.ADD_USER:
        return {
            ...state,
            list: [
                ...state.list,
                {
                    id:      action.payload.id,
                    name:    action.payload.name,
                    surname: action.payload.surname,
                    age:     action.payload.age
                }
            ]
        };

    case CONSTANTS.ACTIONS.SET_USERS:
        return {
            ...state,
            list: action.payload.array
        };

    case CONSTANTS.ACTIONS.CLEAR_USERS:
        return {
            ...state,
            list: initialState.list
        };

    // DEFAULT
    default:
        return state;
    }
}