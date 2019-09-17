//合并reducer
import personalized from "./personalized";
import recommend from "./recommend";
import playList from "./playList";
import top from "./top";
import banner from "./banner";
import {
    combineReducers
} from "redux";
export default combineReducers({
    personalized,
    recommend,
    playList,
    top,
    banner
})