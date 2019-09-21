import React,{Component} from "react";
import singerDetail from "../../../../store/actionCreator/singerDetail";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import "../../../../assets/style/search/detailAlbum.css"
class SingerAlbum extends Component{

    render(){
        let {singerAlbum}=this.props;
        console.log(singerAlbum);
        function getTime(v){
            let time= new Date(v);
            return time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate()
        }
        return (
            <>
                <h2 className={"detail-h2"}>按发行时间排序</h2>
                <ul>
                    {

                        singerAlbum.map((v,i)=>{
                            if(singerAlbum.length>0){
                                return (
                                    <li  key={i} className={"detail-album"}>
                                        <div>
                                            <img src={v.blurPicUrl} alt=""/>
                                        </div>
                                     <div className={"album-message"}>
                                         <h3>{v.name}</h3>
                                         <p>{getTime(v.publishTime)}</p>
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
        singerAlbum:state.singerDetail.singerAlbum,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(singerDetail, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingerAlbum)