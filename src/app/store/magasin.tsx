import {combineReducers} from "redux"
import { MembersReducer } from "../reducers/MembersReducer";


const RootReducer =
    combineReducers({
        members : MembersReducer

    });


export default RootReducer;



