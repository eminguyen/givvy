import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import ShelterReducer from './ShelterReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    shelters: ShelterReducer
  });