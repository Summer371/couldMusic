import React,{Component} from "react";

import "../../../assets/style/font/iconfont.css";
import "../../../assets/style/lib/reset.css";
import "../../../assets/style/search/song.css";
class Song extends Component{
    render(){
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
               <ul>
                   <li className={"song-list2"}>
                       <div className={"song-message-left"}>
                           <h3>海阔天空</h3>
                           <div className={"song-message-singer"}>
                               <i>SQ</i><b>Beyond-<span>海阔天空</span></b>
                           </div>
                       </div>
                       <div className="song-message-i">
                           <i className={"iconfont"}>&#xe618;</i>
                           <i className={"iconfont"}>&#xe504;</i>
                       </div>
                   </li>
               </ul>
           </>
        )
    }
    componentWillMount() {

    }
}
export default Song