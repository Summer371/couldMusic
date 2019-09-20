import recentlyPlay from '../../state/myRecentlyPlay';
import {CHANGE_RECENTLY_PLAY} from "../../actionType/myRecentlyPlay";
export default function (state = recentlyPlay,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type===CHANGE_RECENTLY_PLAY){
        state.playList = payload;
    }
    return state;
}