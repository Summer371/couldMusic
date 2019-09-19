//合并reducer
import personalized from "./personalized";
import recommend from "./recommend";
import playList from "./playList";
import top from "./top";
import search from  "./search";
import banner from "./banner";
import multimatch from "./multimatch"
import {
    combineReducers
} from "redux";
import  stationList from './station' //电台推举类型
import todayRecommendList from './station/todayRecommend'  //电台推荐
import djBannerList from './station/djBanner'  //电台轮播
import PayFineList from './station/PayFine' //付费精品;
import myPlayList from './myPlayList'//我的歌单中所有歌曲Id
import userPlayList from "./userPlayList";//获取我的歌单
import playListDetail from './myPlayList/playListDetail'//歌曲详情
import singer from "./singer"
export default combineReducers({
    personalized,
    recommend,
    playList,
    top,
    banner,
    stationList,
    todayRecommendList,
    djBannerList,
    PayFineList,
    myPlayList,
    userPlayList,
    playListDetail,
    search,
    multimatch,
    singer
})