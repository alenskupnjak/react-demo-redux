import { combineReducers } from 'redux';

import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import reducerUser from './user/userReducer';

const rootReducer = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer, user: reducerUser });

export default rootReducer;
