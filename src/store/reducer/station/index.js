import {CHANGE_STATION} from '../../actionType/station'
import {stationList} from '../../state/station'

export default function Station(state=stationList,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_STATION){
        state=payload
    }
    return state
}
