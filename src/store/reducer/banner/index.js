import {CHANGE_BANNER,CHANGE_DJ_BANNER} from "../../actionType/banner";
import initState from "../../state/banner";
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_BANNER){
        state.banner=payload;
    }else if(type===CHANGE_DJ_BANNER){
        state.djBanner=payload;
    }
    return state;
}