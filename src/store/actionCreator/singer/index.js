import axios from "axios";
import {
    CHANGE_SINGER_LIST
}from "../../actionType/singer";
function SingerList(payload){
    return {
        type:CHANGE_SINGER_LIST,
        payload
    }
}
export default {
    getSingerList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/top/artists?offset=0&limit=30");
            console.log(data);
            dispatch(SingerList(data.artists))
        }
    }
}