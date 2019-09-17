import {CHANGE_RECOMMEND_SONGS_LIST} from "../../actionType/personalized";
import {CHANGE_NEW_SONGS_LIST} from "../../actionType/personalized";
import initState from "../../state/personalized";
export  default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_RECOMMEND_SONGS_LIST){
        state.songsList=payload
    }else if(type===CHANGE_NEW_SONGS_LIST){
        state.newSong=payload
    }
    return state
}