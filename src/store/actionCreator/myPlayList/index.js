import {CHANGE_MY_PLAYLIST} from "../../actionType/myPlayList";
import axios from "axios";
function change(payload) {
    return {
        type:CHANGE_MY_PLAYLIST,
        payload:payload
    }
};
export default {
    getMyPlayList(){
        return async (dispatch)=>{
            console.log(this)
            let {data} = await axios.get("/playlist/detail?id="+this.id);
            if(data.code===200){
                console.log(data)
                dispatch(change(data.playlist))
            }
        }
    }
}