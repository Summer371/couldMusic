import {CHANGE_SONGS_URL} from "../../actionType/playUrl";
import axios from "axios";
function songsUrlList(payload) {
    return{
        type:CHANGE_SONGS_URL,
        payload
    }
}

export default {
    getSongsUrlList(id){
        return async (dispatch)=>{
            const {data} = await axios.get("/song/url?id="+id)
            dispatch(songsUrlList(data.data))
        }
    }
}