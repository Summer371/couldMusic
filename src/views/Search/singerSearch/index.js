import React,{Component} from "react";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import getSingerList from "../../../store/actionCreator/singer";
import "../../../assets/style/search/singerSearch.css";
import "../../../assets/style/font2/iconfont.css"
class SingerSearch extends Component{
    render(){
        let {singerList}= this.props;
        return(
            <>
                <h2> <i className={"iconfont"} onClick={()=>{
                    this.props.history.push({
                        pathname:"/search"
                    })
                }}>&#xe666;</i>歌手分类</h2>
                <div className={"allSinger"}>
                    全部歌手
                </div>
                <div className={"singerClass"}>
                    <div className={"singerLanguage"}>
                        <span>华语</span>
                        <span>欧美</span>
                        <span>日本</span>
                        <span>韩国</span>
                        <span>其他</span>
                    </div>
                    <div className={"singerGroup"}>
                        <span>男</span>
                        <span>女</span>
                        <span>乐队/组合</span>
                    </div>
                </div>
                <h4 className={"hotSinger"}>热门歌手</h4>
                <ul className={"singerList"}>
                    {
                        singerList.map((v,i)=>{
                            return (
                                <li key={i} className={"singerList-li"} onClick={async ()=>{
                                    this.props.history.push({
                                        pathname:"/searchDetail/index",
                                        state:{
                                            id:v.id,
                                            imgurl:v.picUrl,
                                            name:v.name
                                        }
                                    })

                                }}>
                                    <img src={v.picUrl} style={{
                                        width:"0.5rem"
                                    }} alt=""/>
                        {v.name}
                        <i className={"iconfont"} style={{color:"#ff0033"}}>&#xe505;</i>
                        <span>+ &nbsp;关注</span>
                        </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
    componentWillMount() {
        this.props.getSingerList()
    }
}
function mapStateToProps(state) {
    return {
        singerList: state.singer.singerList,

    }
}

function mapDispatchToProps(dispatch) {
      return bindActionCreators(getSingerList, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingerSearch)
