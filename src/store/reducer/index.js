//合并reducer
import personalized from "./personalized";
import recommend from "./recommend";
import playList from "./playList";
import top from "./top";
import banner from "./banner";
import {
    combineReducers
} from "redux";
import  stationList from './station' //电台推举类型
import todayRecommendList from './station/todayRecommend'  //电台推荐
import djBannerList from './station/djBanner'  //电台轮播
import PayFineList from './station/PayFine' //付费精品
export default combineReducers({
    personalized,
    recommend,
    playList,
    top,
    banner,
    stationList,
    todayRecommendList,
    djBannerList,
    PayFineList
})