import {TheHostDetails} from '../../state/station'
import {CHANGE_XQ} from '../../actionType/station'
export default function TheHostDetailsL(state=TheHostDetails,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_XQ){
        state=payload
    }
    return state
}