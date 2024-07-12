import { configureStore } from '@reduxjs/toolkit'
import {root} from "./reducers/productReducer";

const store = configureStore({reducer: root});

export default store;