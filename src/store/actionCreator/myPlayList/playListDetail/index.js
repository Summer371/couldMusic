import {CHANGE_PLAYLIST_DETAIL} from "../../../actionType/myPlayList/playListDetail";
import axios from "axios";
function change(payload) {
    return {
        type:CHANGE_PLAYLIST_DETAIL,
        payload:payload
    }
};
export default {
    getPlayListDetail(idArr){
        return async (dispatch)=>{
            let {data} = await axios.get("/song/detail?ids="+idArr);
            dispatch(change(data))

        }
    }
}