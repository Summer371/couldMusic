import {CHANGE_MY_PLAYLIST} from '../../actionType/myPlayList';
import myPlayList from '../../state/myPlayList'
export default function (state = myPlayList,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type ===CHANGE_MY_PLAYLIST){
        state.topList = [payload]
        state.myPlayList = payload.trackIds
    }
    return state;
}