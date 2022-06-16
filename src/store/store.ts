import {combineReducers, configureStore} from "@reduxjs/toolkit";
import rankingSlice from "./slices/ranking";
import authSlice from "./slices/auth";
const combinedReducer = combineReducers({
    ranking: rankingSlice.reducer,
    auth: authSlice.reducer
});

const store = configureStore({reducer: combinedReducer});

export default store;
