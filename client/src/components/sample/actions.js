import { createActions } from 'redux-actions'

import api from '../../lib/api';

export const { getText } = createActions({
    "GET_TEXT": async () => {
        const request = await api.getTest();
        return {displayText: request.data}
    }
});