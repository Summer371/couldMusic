import {todayRecommend} from '../../state/station'
import {CHANGE_TODAY} from '../../actionType/station'
export default function TodayRecommend(state=todayRecommend,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_TODAY){
        state=payload
    }
    return state
}