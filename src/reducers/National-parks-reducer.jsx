import * as b from '../actions/ActionTypes'

const NationalParkReducer = (state, action) => {
    switch (action.type) {
        case b.PARKS_CALL_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                nationalPark: action.nationalPark
            };
        case b.PARKS_CALL_FAILURE:
            return {
                ...state,
                isLoaded: true,
                error: action.error
            };
        default:
            throw new Error(`There is no action matching ${action.type}.`);

    }
};

export default NationalParkReducer;