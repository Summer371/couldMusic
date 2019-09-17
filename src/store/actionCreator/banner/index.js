import {CHANGE_BANNER} from "../../actionType/banner";
import axios from "axios";
function bannerList(payload) {
    return{
        type:CHANGE_BANNER,
        payload
    }
}
export default {
    getBannerList(){
        return async (dispatch)=>{
            const {data} = await axios.get("/banner?type=2");
            dispatch(bannerList(data.banners))
        }
    }
}
