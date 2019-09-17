import initState from "../../state/recommend";
import {CHANGE_EVERYDAY_SONG_LIST,CHANGE__RESOURCE_LIST} from "../../actionType/recommend";
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_EVERYDAY_SONG_LIST){
        state.everydaySongs=payload
    }else if(type===CHANGE__RESOURCE_LIST){
        state.resource=payload
    }
    return state
}