import initState from "../../state/mv"
import {ADD_MV,ALL_MV,GET_VIDEO_ID,VEDIO_LIST} from "../../actionType/mv"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === ADD_MV){
        state.recommendMv=payload;
    }else if(type===ALL_MV){
        state.allMv=payload;
    }else if(type===GET_VIDEO_ID){
        state.vedioId=payload;
    }else if(type===VEDIO_LIST){
        state.vedioList=payload;
    }
    return state
}