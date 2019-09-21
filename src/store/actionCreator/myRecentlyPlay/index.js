import {CHANGE_RECENTLY_PLAY} from "../../actionType/myRecentlyPlay";
import axios from 'axios'
function change(payload) {
    return {
        type:CHANGE_RECENTLY_PLAY,
        payload:payload
    }
}
export default {
    getRecentlyPlay(type){
        return async(dispatch)=>{
            let id,arr=[] ;
            id = Number(localStorage.recentlyId);
            let {data} = await axios.get("/user/record?uid="+id+"&type=0");
            if(data.code===200&&type===1){
                for(let i = 0 ;i<data.allData.length;i++){
                    if(i>30){
                        arr.push(data.allData[i])
                    }
                }
                dispatch(change(arr))
            }else {
                dispatch(change(data.allData))
            }
        }
    }
}