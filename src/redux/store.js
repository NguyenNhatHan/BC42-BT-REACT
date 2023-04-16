// store.js
import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./seatReducer";

const store = configureStore({
    reducer: {
        seat: seatReducer,
    }
}
)


export default store;