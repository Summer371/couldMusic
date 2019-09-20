import React from "react";
import {
    Icon
} from "antd";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import playList from "../../../store/actionCreator/playList";//
import SongSheetList from "../../../components/discover/songSheetList";
import "../../../assets/style/discover/songSheetList.css";
class SongSheetDetail extends React.Component{
    render(){
        const songLists=this.props.songLists?this.props.songLists:[];
        const {listDetail}=this.props;
        const creator=listDetail.creator?listDetail.creator:{};
        return(
            <div className={"songSheetDetail"} >
                <nav className={"songSheetDetailNav"}>
                    <Icon type="arrow-left"
                          onClick={() => this.props.history.push(this.props.location.backname?this.props.location.backname:'/')}/><span>歌单</span>
                </nav>
                <div className={"filter"} style={{background:"url("+listDetail.coverImgUrl+")"}}></div>
                <div className={"songSheetDetailHead"} >
                    <div className={"songSheetDetaiImg_word"}>
                        <div className={"songSheetDetaiImg"}>
                            <img src={listDetail.coverImgUrl} alt=""/>
                        </div>
                        <div className={"songSheetDetailWord"}>
                            <h3>{listDetail.name}</h3>
                            <h4><img src={creator.avatarUrl} alt=""/>{creator.nickname}</h4>
                            <p>{listDetail.description}</p>
                        </div>
                    </div>
                    <div className={"iconCommit"}>
                        <i className={"iconfont icon-pinglun"}></i>
                        <i className={"iconfont icon-fenxiangpt-wangyiicon"}></i>
                        <i className={"iconfont icon-xiazaipt"}></i>
                        <i className={"iconfont icon-duoxuanpt"}></i>
                    </div>
                </div>
                <SongSheetList {...this.props} songSheetDetial={songLists}></SongSheetList>
            </div>
        )
    }
    componentWillMount(){
        this.props.getListDetail(this.props.location.state?this.props.location.state.id:24381616)
    }
}
function mapStateToProps(state) {
    return {
        listDetail:state.playList.detail,
        songLists:state.playList.detail.tracks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playList, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SongSheetDetail)