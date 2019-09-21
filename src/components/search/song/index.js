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
class Song extends Component{
    render(){

        let {mv} = this.props.multimatchSearchResult;
        mv = mv || []
        return(
           <>
               <div className={"song-title"}>
                   <div className={"left"}>
                       <i className={"iconfont"}>&#xe62a;</i>
                       <p>播放全部</p>
                   </div>
                   <div className="right">
                       <i className={"iconfont"}>&#xe6a0;</i>
                       <p>多选</p>
                   </div>

               </div>
               <div style={{display:mv.length>0?"none":"block"}} className={"song-404"}>
                    对不起，您搜索的曲目暂时没有找到qqq
               </div>
               <ul style={{display:mv.length>0?"block":"none"}}>
                   {
                       mv.map((v,i)=>{
                           return (
                               <li  key={i+1}className={"song-list2"}>
                                   <div  key={i+2} className={"song-message-left"}>
                                       <h3 key={i+3}>{v.name}</h3>
                                       <div  key={i+4}className={"song-message-singer"}>
                                           <i key={i+5}>SQ</i><b>{v.artistName}-<span key={i+6}>{v.name}</span></b>
                                       </div>
                                   </div>
                                   <div  key={i+7} className="song-message-i">
                                       <i  key={i+8} className={"iconfont"}>&#xe618;</i>
                                       <i  key={i+9} className={"iconfont"}>&#xe504;</i>
                                   </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Song)
