import { combineReducers } from 'redux';

// import the reducers file from each component
import { sampleReducer } from './sample/reducers';

// combine it here
const rootReducer = combineReducers({
    sample: sampleReducer
})

export default rootReducer