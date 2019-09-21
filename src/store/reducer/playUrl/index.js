import {CHANGE_SONGS_URL,CHANGE_LYRIC} from "../../actionType/playUrl";
import initState from "../../state/playUrl";
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SONGS_URL){
        state.songsUrl=payload
    }else if(type===CHANGE_LYRIC){
        state.lyric=payload
    }
    return state
}