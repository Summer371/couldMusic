import {ADD_MV,ALL_MV,GET_VIDEO_ID,VEDIO_LIST} from "../../actionType/mv"
import axios from "axios";
function addMvStop(payload){
    return {
        type:ADD_MV,
        payload
    }
}
function allMvList(payload){
    return {
        type:ALL_MV,
        payload
    }
}
function getVideoId(payload){
    return {
        type:GET_VIDEO_ID,
        payload
    }
}
function getVideoList(payload){
    return {
        type:VEDIO_LIST,
        payload
    }
}

export default{
        getAddMvStop(){
            return async (dispath)=>{
                const {data} = await axios.get("/personalized/mv");
                dispath(addMvStop(data.result))
            }
        },
    getAllMv(){
        return async (dispath)=>{
            const {data} = await axios.get("/mv/all");
            dispath(allMvList(data.data))
        }
    },
    getVideoId(){
        return async (dispath)=>{
            const {data} = await axios.get("/video/group/list");
            dispath(getVideoId(data.data))
        }
    },
    getVideoList(id){
        return async (dispath)=>{
            const {data} = await axios.get("/video/detail?id=");
            console.log(data,11)
            dispath(getVideoList(data.data))
        }
    }
}