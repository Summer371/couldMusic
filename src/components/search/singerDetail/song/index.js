import React,{Component} from "react";
import singerDetail from "../../../../store/actionCreator/singerDetail";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import "../../../../assets/style/search/detailSong.css"
class SingerSong extends Component{
    render(){
        let {songList}=this.props;
        console.log(songList)
        return (

            <>
                <h2 className={"detail-h2"}><i className={"iconfont"}>&#xe62a;</i>收藏热门50</h2>
            <ul>
            {

                songList.map((v,i)=>{
                    if(songList.length>0){
                        return (
                            <li  key={i+1} className={"song-list2"}>
                                <span key={i}>{i+1}</span>
                                <div key={i+2} className={"song-detailMessage"}>
                                    <h3 key={i+3}>{v.name}</h3>
                                    <p><b>独家</b> <i>SQ</i>{v.ar[0].name} - {v.al.name}</p>
                                </div>
                            </li>
                        )
                    }

                })
            }

        </ul>
        </>
        )
    }

}
function mapStateToProps(state) {
    return {
        songList:state.singerDetail.songList,

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(singerDetail, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingerSong)
