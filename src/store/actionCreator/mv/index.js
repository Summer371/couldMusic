import {ADD_MV} from "../../actionType/mv"
import axios from "axios"
function addMvStop(payload){
    return {
        type:ADD_MV,
        payload
    }
}

export default{
        getAddMvStop(){
            return async (dispath)=>{
                const {data} = await axios.get("/personalized/mv");
                dispath(addMvStop(data.result))
            }
        }
}