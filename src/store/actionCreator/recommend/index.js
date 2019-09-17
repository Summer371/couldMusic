import {CHANGE_EVERYDAY_SONG_LIST,CHANGE__RESOURCE_LIST} from "../../actionType/recommend";
import axios from "axios";
function everydaySongsList(payload) {
    return{
        type:CHANGE_EVERYDAY_SONG_LIST,
        payload
    }
}
function resourceList(payload) {
    return{
        type:CHANGE__RESOURCE_LIST,
        payload
    }
}
export default {
    getEverydaySongsList(){
       return async (dispatch)=>{
           const {data}=await axios.get("/recommend/songs")
           dispatch(everydaySongsList(data.recommend))
        }
    },
    getResourceList(){
        return async (dispatch)=>{
            const {data}=await axios.get("/recommend/resource")
            dispatch(resourceList(data.recommend))
        }
    }
}