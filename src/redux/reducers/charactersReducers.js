import { GET_SELECTEDSHOW, GET_CHARACTERS_ERROR, GET_CHARACTER_OK, GET_CHARACTERS_SUCCESS } from "../actionTypes";

const initialState = {
    tvShow:'bb',
    characters: [],
    error: null,
    character: [],
};

const charactersData = (state = initialState, action) => {
    switch (action.type) {
        case GET_SELECTEDSHOW:
            return {
                ...state,
                tvShow: action.payload,
            }
        case GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
            };
        case GET_CHARACTER_OK:
            return {
                ...state,
                character: action.payload,
            };
        case GET_CHARACTERS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default charactersData;