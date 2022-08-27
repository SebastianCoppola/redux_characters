import { GET_SELECTEDSHOW, GET_CHARACTERS_ERROR, GET_CHARACTERS_SUCCESS, GET_CHARACTER_OK} from '../actionTypes';

const urls = {
    bb:'https://breakingbadapi.com/api/characters',
    got:'https://thronesapi.com/api/v2/Characters'
}

export const selectShow = (tvShow) => {
    return {
        type: GET_SELECTEDSHOW,
        payload: tvShow,
    };
}

export const fetchCharactersSuccess = (characters) => {
    return {
        type: GET_CHARACTERS_SUCCESS,
        payload: characters,
    };
};

export const fetchOneCharacterSuccess = (character) => {
    return {
        type: GET_CHARACTER_OK,
        payload: character,
    };
};

export const fetchCharactersError = (error) => {
    return {
        type: GET_CHARACTERS_ERROR,
        payload: error,
    };
};

export const FetchAllCharacters = (selectedShow) => {
    return dispatch => {
        fetch(urls[selectedShow])
        .then(res => res.json())
        .then(data => {
            dispatch(fetchCharactersSuccess(data)); 
        })
        .catch(error => {
            dispatch(fetchCharactersError(error));
        });
    }
};

export const FetchOneCharacter = (selectedShow,charID) => {
    if(charID){
        return dispatch => {
            fetch(`${urls[selectedShow]}/${charID}`)
                .then(response => response.json())
                .then(data => {
                    dispatch(fetchOneCharacterSuccess(data));
                })
                .catch(error => {
                    dispatch(fetchCharactersError(error));
                });
        }
    }
    return dispatch => {
        dispatch(fetchOneCharacterSuccess([]));
    }
}

