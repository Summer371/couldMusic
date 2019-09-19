import {ShowDetails} from '../../state/station'
import {CHANGE_SHOW} from '../../actionType/station'
export default function ShowDetailsList(state=ShowDetails,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_SHOW){
        state=payload
    }
    return state
}