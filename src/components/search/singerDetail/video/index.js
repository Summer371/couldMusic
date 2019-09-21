import React,{Component} from "react";
import singerDetail from "../../../../store/actionCreator/singerDetail";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import "../../../../assets/style/search/detailVideo.css"
class SingerVideo extends Component{
    render(){
        let {singerMv}=this.props;
        console.log(singerMv);
        function getNum(v=268000){
            let min= Math.floor(v/10000);
            return min+"万"
        }
        return (

            <>
                <h2 className={"detail-h2"}>视频</h2>
                <ul>
                    {
                        singerMv.map((v,i)=>{
                            if(singerMv.length>0){
                                return (
                                    <li  key={i} className={"videoList"}>
                                     <div className={"videoImg"}>
                                         <img src={v.imgurl} alt=""/>
                                     </div>
                                        <div className={"video-message"}>
                                            <h3>
                                                {v.name}
                                            </h3>
                                            <p>发行时间：{v.publishTime}</p>

                                        </div>
                                        <span>{getNum(v.playCount)}</span>
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
        singerMv:state.singerDetail.singerMv,

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(singerDetail, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingerVideo)

