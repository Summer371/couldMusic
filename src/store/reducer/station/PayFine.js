import {PayFine} from '../../state/station'
import {CHANGE_PAY} from '../../actionType/station'
export default function PayFineList(state=PayFine,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_PAY){
        state=payload
    }
    return state
}