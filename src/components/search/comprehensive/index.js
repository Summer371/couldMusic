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
import Singer from "../singer";
import Song from "../song";
import Video from "../video"
class Comprehensive extends Component{
    render(){
        let {mv} = this.props.multimatchSearchResult;
        return(
            <>
                <ul >
                    <h3
                        style={{
                            marginLeft:"0.4rem",
                            color:"lightgreen"
                        }}>歌曲</h3>
                    <Song></Song>
                    <h3 style={{
                        marginLeft:"0.4rem",
                        color:"lightgreen"
                    }}
                    >视频</h3>
                    <Video></Video>
                    <h3 style={{
                        marginLeft:"0.4rem",
                        color:"lightgreen"
                    }}
                    >歌手</h3>
                    <Singer></Singer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Comprehensive)
