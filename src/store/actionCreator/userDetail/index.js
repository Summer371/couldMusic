import {CHANGE_USER_DETAIL} from '../../actionType/userDetail/index';
import axios from 'axios'
function changeUserList(payload){
    return {
        type:CHANGE_USER_DETAIL,
        payload:payload
    }
};
export default {
    getUserList(){
        return async(disptach)=>{
            const {data} = await axios.get("/user/detail?uid="+localStorage.recentlyId);
            disptach(changeUserList(data))
        }
    }
}