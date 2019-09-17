import {CHANGE_CATLIST,CHANGE_HOT_LIST} from "../../actionType/playList";
import initState from "../../state/playList";
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_CATLIST){
        state.catList=payload;
    }else if(type===CHANGE_HOT_LIST){
        state.hot=payload;
    }
    return state;
}