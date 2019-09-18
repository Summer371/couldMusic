import initState from "../../state/multimatch";
import {
    CHANGE_MULITMATCH,
    CHANGE_SEARCH_RESULT,
}from "../../actionType/multimatch";
export default function(state=initState,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_MULITMATCH){
        state.multimatchSearchResult=payload;
    }else if(type===CHANGE_SEARCH_RESULT){
        state.searchResult=payload
    }
    return state;
}