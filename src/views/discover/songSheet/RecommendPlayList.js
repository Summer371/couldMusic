import React from "react";
import {connect} from "react-redux";
import "../../../assets/style/discover/songSheet.css";
import {
    Icon, Carousel
} from "antd";
import {
    bindActionCreators
} from "redux";
import top from "../../../store/actionCreator/top";

class RecommendPlayList extends React.Component {
    render() {
        const {playlists} = this.props;//推荐歌单
        const swiperList = [];
        if (playlists.length > 0) {
            for (let i = 0; i < 3; i++) {
                swiperList.push(<div key={i}><span><Icon type="caret-right"/>{this.$filter.playCount(playlists[i].playCount)}</span><img
                    src={playlists[i].coverImgUrl} alt=""></img><p>{playlists[i].name}</p></div>)
            }
        }
        return (
            <div className={"recommendPlayList"}>
                <div className={"songSheetSwiper"}>
                    <Carousel autoplay>
                        {swiperList}
                    </Carousel>
                </div>
                <div className={"songSheetList"}>
                    <ul>
                        {
                            playlists.map((v, i) => {
                                return (
                                    <li key={i}>
                                        <span><Icon type="caret-right"/>{this.$filter.playCount(v.playCount)}</span>
                                        <img src={v.coverImgUrl} alt=""/>
                                        <p>{v.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getTopPlayList()
    }
}

function mapStateToProps(state) {
    return {
        playlists: state.top.playlists
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(top, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendPlayList)
