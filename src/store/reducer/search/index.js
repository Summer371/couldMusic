import {
    CHANGE_SEARCH_RESULT,
    CHANGE_SEARCH_HOT,
    CHANGE_SEARCH_DEFAULT
} from "../../actionType/search";
import initState from "../../state/search";
export default function (state=initState,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SEARCH_RESULT){
        state.searchResult=payload;
    }else if(type===CHANGE_SEARCH_HOT){
        state.searchHot=payload;
    }else if(type===CHANGE_SEARCH_DEFAULT){
        state.searchDefault=payload;
    }
    return state;
}
