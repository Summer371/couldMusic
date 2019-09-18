import {
    CHANGE_SEARCH_RESULT,
    CHANGE_SEARCH_HOT,
    CHANGE_SEARCH_DEFAULT
} from "../../actionType/search";
import initState from "../../state/search";
export default function (state=initState,{type,payload}) {
    console.log(state);
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SEARCH_RESULT){
        console.log("111");
        state.searchResult=payload;
    }else if(type===CHANGE_SEARCH_HOT){
        console.log("222");
        state.searchHot=payload;
    }else if(type===CHANGE_SEARCH_DEFAULT){
        console.log("333");
        state.searchDefault=payload;
    }
    return state;
}
