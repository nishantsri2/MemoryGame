import {createStore, applyMiddleware} from 'redux';
import rootReducer from './RootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'gameReducer',
    storage: AsyncStorage,
    // whitelist: ['gameReducer'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, applyMiddleware(thunk));

const persistor = persistStore(store);
export { persistor, store };
