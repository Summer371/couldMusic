import {CHANGE_SONGLISTED} from "../../actionType/songListed";
import axios from 'axios'
function changeSongListed(payload){
    return {
        type:CHANGE_SONGLISTED,
        payload:payload
    }
};
export default {
    getSongListed(){
        return async(dispatch)=>{
            let {data} = await axios.get("/user/playlist?uid="+this.id)
            if(data.code===200){
                dispatch(changeSongListed(data.playlist))
            }
        }
    }
}