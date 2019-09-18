import {CHANGE_PLAYLIST_DETAIL} from "../../../actionType/myPlayList/playListDetail";
import playListDetail from "../../../state/myPlayList/playListDetail";
export default function (state=playListDetail,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if (type===CHANGE_PLAYLIST_DETAIL){
        state.playListDetail=payload
    }
    return state;
}