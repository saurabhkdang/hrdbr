import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./root.reducer";
import { rootSaga } from "./root.saga";

const persistConfig = {
    key:'root',
    storage, //storage:storage, used shorthand because key and value is same
    whitelist: ['login']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middlwares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancer = composeEnhancer(applyMiddleware(...middlwares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);