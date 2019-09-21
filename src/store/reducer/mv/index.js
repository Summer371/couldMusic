import initState from "../../state/mv"
import {ADD_MV} from "../../actionType/mv"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type === ADD_MV){

        state=payload;
    }
    return state
}