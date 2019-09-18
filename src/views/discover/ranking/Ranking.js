import React from "react";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {
    Icon
} from "antd";
import top from "../../../store/actionCreator/top";
import "../../../assets/style/discover/rankingList.css";
import Official from "../../../components/discover/trankingList/Official";
import RecommendRankingList from "../../../components/discover/trankingList/RecommendRankingList";
class Ranking extends React.Component{
    render(){
        return(
            <div className={"ranking"}>
                <nav className={"topNav"}>
                    <Icon type="arrow-left" onClick={() => this.props.history.push("/")}/> <b>排行榜</b>
                </nav>
                <Official {...this.props}></Official>
                <RecommendRankingList {...this.props}></RecommendRankingList>
            </div>
        )
    }
    componentDidMount(){
        this.props.getRankingDetail();
        this.props.getRankingList();
        this.props.getAllRankingList();
        this.props.getArtistRankingList();
        this.props.getRankingDetail();
    }
}
function mapStateToProps(state) {
    return {
        rankingList:state.top.rankingList,
        allRankingList:state.top.allRankingList,
        artistRankingList:state.top.artistRankingList,
        rankingListDetail:state.top.rankingListDetail,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(top, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Ranking)