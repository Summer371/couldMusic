import React,{Component} from "react";

import "../../../assets/style/font/iconfont.css";
import "../../../assets/style/lib/reset.css";
import "../../../assets/style/search/song.css";
import mulitmatch from "../../../store/actionCreator/mulitmatch";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
class Video extends Component{
    render(){

        let {video} = this.props.multimatchSearchResult;
        video = video || []
        return(
            <>
                <div style={{display:video.length>0?"none":"block"}} className={"song-404"}>
                    对不起，您搜索的曲目暂时没有找到qqq
                </div>
                <ul style={{display:video.length>0?"block":"none"}}>
                    {
                        video.map((v,i)=>{
                            return (
                                <li  key={i+1}className={"song-list2"} style={{paddingLeft:"0.4rem",margin:"0.1rem 0"}}>
                                    <img src={v.coverUrl} key={i+2} alt="" style={{height:"0.5rem",borderRadious:"0.1rem"}}/>
                                    <p key={i+3}style={{
                                        margin:0,
                                        paddingTop:"0.15rem",
                                        paddingLeft:"0.15rem"
                                    }}>{v.title} 播放次数：{v.playTime}</p>
                                </li>
                            )
                        })
                    }

                </ul>
            </>
        )
    }
    componentWillMount() {

    }
}
function mapStateToProps(state) {

    return {
        searchResult2: state.multimatch.searchResult2,
        multimatchSearchResult: state.multimatch.multimatchSearchResult,
        searchDefault:state.multimatch.searchDefault
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mulitmatch,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)
