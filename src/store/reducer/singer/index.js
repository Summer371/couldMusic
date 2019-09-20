import {
    CHANGE_SINGER_LIST
} from "../../actionType/singer";
import initState from "../../state/singer";
export default function (state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SINGER_LIST){
        state.singerList=payload
    }
    return state;
}