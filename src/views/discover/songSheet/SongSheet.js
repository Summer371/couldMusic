import React from "react";
import "../../../assets/style/discover/songSheet.css";
import {
    NavLink,
    Switch,
    Route
} from "react-router-dom";
import {
    Icon
} from "antd";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import RecommendPlayList from "./RecommendPlayList";//推荐页
import Highquality from "./Highquality";//精品页
import Chinese from "./Chinese";//华语
import Pop from "./Pop";//流行
import Official from "./Official";//官方
import Electronic from "./Electronic";//电子
import LightMusic from "./LightMusic";//轻音乐
import playlist from "../../../store/actionCreator/playList";//调用redux数据
class SongSheet extends React.Component {
    render() {
        return (
            <div className={"songSheet"}>
                <nav className={"topNav"}>
                    <Icon type="arrow-left" onClick={() => this.props.history.push("/")}/> <b>歌单广场</b>
                </nav>
                <nav className={"songSheetNav"}>
                    <NavLink exact activeStyle={{color: "red"}} to={"/songSheet"}>推荐</NavLink>
                    <NavLink to={"/songSheet/official"} activeStyle={{color: "red"}}>官方</NavLink>
                    <NavLink to={"/songSheet/highquality"} activeStyle={{color: "red"}}>精品</NavLink>
                    <NavLink to={"/songSheet/chinese"} activeStyle={{color: "red"}}>华语</NavLink>
                    <NavLink to={"/songSheet/pop"} activeStyle={{color: "red"}}>流行</NavLink>
                    <NavLink to={"/songSheet/electronic"} activeStyle={{color: "red"}}>电子</NavLink>
                    <NavLink to={"/songSheet/lightMusic"} activeStyle={{color: "red"}}>轻音乐</NavLink>
                </nav>
                <Switch>
                    <Route path={"/songSheet/highquality"} component={Highquality}></Route>
                    <Route path={"/songSheet/official"} component={Official}></Route>
                    <Route path={"/songSheet/chinese"} component={Chinese}></Route>
                    <Route path={"/songSheet/pop"} component={Pop}></Route>
                    <Route path={"/songSheet/electronic"} component={Electronic}></Route>
                    <Route path={"/songSheet/lightMusic"} component={LightMusic}></Route>
                    <Route path={"/songSheet"} component={RecommendPlayList}></Route>
                </Switch>
            </div>
        )
    }
    componentDidMount(){
        this.props.getCatList();
        this.props.getHotlist();
    }
}
function mapStateToProps(state) {
    return {
        catlist: state.playList.catList,
        hot:state.playList.hot
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playlist, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSheet)
//export default SongSheet
