import { handleActions } from 'redux-actions'

import { getText } from './actions';

export const sampleReducer = handleActions(
    {
        [getText]: (state, action) => ({
            displayText: action.payload.displayText
        })
    },
    {
        displayText: "not set"
    }
);

