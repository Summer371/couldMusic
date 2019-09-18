import {djBanner} from '../../state/station'
import {CHANGE_BANNER} from '../../actionType/station'
export default function TodayRecommend(state=djBanner,{type,payload}){
    state=JSON.parse(JSON.stringify(state));
    if(type===CHANGE_BANNER){
        state=payload
    }
    return state
}