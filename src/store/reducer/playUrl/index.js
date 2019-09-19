import {CHANGE_SONGS_URL} from "../../actionType/playUrl";
import initState from "../../state/playUrl";
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SONGS_URL){
        state.songsUrl=payload
    }
    return state
}