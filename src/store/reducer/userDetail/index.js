import userDetail from '../../state/userDetail';
import {CHANGE_USER_DETAIL} from '../../actionType/userDetail';
export default function(state = userDetail,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type===CHANGE_USER_DETAIL){
        state.userList = payload.profile;
        state.num = payload.level;
    }
    return state;
}