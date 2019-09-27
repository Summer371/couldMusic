import React,{Component} from "react";
import singerDetail from "../../../../store/actionCreator/singerDetail";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import "../../../../assets/style/font/iconfont.css";
import "../../../../assets/style/search/detailSong.css"
class SingerIndex extends Component{
    render(){
        let {songList,singerDesc}=this.props;
        let {id,imgurl,name} = this.props.location.state
        let arr=[];
       if(songList.length>0){
           for(let i=0;i<5;i++){
               arr.push(songList[i])
           }
       }

        return (
            <>
                <h2 className={"detail-h2"}><i className={"iconfont"}>&#xe62a;</i>播放全部50</h2>
                <ul>
                    {

                        arr.map((v,i)=>{
                            if(arr.length>0){
                                return (
                                    <li  key={i} className={"song-list2"}>
                                        <span key={i+1}>{i+1}</span>
                                        <div key={i+2} className={"song-detailMessage"}>
                                            <h3 key={i+3}>{v.name}</h3>
                                            <p><b>独家</b> <i>SQ</i>{v.ar[0].name} - {v.al.name}</p>
                                        </div>
                                    </li>
                                )
                            }

                        })
                    }
                    <h3 className={"index-more"} onClick={()=>{
                        this.props.history.push({
                            pathname:"/searchDetail/song",
                            state:{
                                id,
                                imgurl,
                                name
                            }
                        })
                    }}>更多热歌</h3>
                </ul>
            </>

        )
    }

}
function mapStateToProps(state) {
    return {
        songList:state.singerDetail.songList,
        singerDesc:state.singerDetail.singerDesc

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(singerDetail, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingerIndex)
