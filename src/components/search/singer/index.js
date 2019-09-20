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
class Singer extends Component{
    render(){

        let {artist} = this.props.multimatchSearchResult;
        artist = artist || []
        return(
            <>
                <div style={{display:artist.length>0?"none":"block"}} className={"song-404"}>
                    对不起，您搜索的曲目暂时没有找到qqq
                </div>
                <ul style={{display:artist.length>0?"block":"none"}}>
                    {
                        artist.map((v,i)=>{
                            return (
                                <li  key={i+1}className={"song-list2"} style={{paddingLeft:"0.4rem",margin:"0.1rem 0"}}>
                                    <img src={v.picUrl} key={i+2} alt="" style={{height:"0.5rem",borderRadious:"0.1rem"}}/>
                                    <p key={i+3}style={{
                                        margin:0,
                                        paddingTop:"0.15rem",
                                        paddingLeft:"0.15rem"
                                    }}>{v.name}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Singer)
