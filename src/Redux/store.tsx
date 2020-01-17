import {combineReducers, createStore} from "redux";
import loginReducer from "./Reducers/LoginReducer";
import registerReducer from "./Reducers/RegisterReducer";
import forgotReducer from "./Reducers/ForgotReducer";
import profileReducer from "./Reducers/ProfileReducer";


// let store = rootReducer(combineReducers({
// //     login:loginReducer,
// //     register:registerReducer,
// //     forgot:forgotReducer,
// //     profile:profileReducer
// //
// // }));
// //
// // type AppStateType=ReturnType<typeof rootReducer>
// //
// // let store = createStore(rootReducer);

let store = createStore(combineReducers({
    login:loginReducer,
    register:registerReducer,
    forgot:forgotReducer,
    profile:profileReducer

}));

export default store