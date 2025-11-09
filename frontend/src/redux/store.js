import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi';
import { userApi } from './api/userApi';
import useReducer from './features/userSlice';
import { visitListApi } from './api/visitListApi';




export const store = configureStore({
    reducer: {
        auth: useReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [visitListApi.reducerPath]: visitListApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            authApi.middleware,
            userApi.middleware,
            visitListApi.middleware,

        ]),
});
