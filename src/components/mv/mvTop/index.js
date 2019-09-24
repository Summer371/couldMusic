import React from "react"
import "../../../assets/style/video/mvTop.css";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import mv from "../../../store/actionCreator/mv";
 class MvTop extends React.Component{
    render(){
        const {allMv}=this.props;
        console.log(allMv)
       return(
            <div>
                <div className={"m-top"}>
                    <div className={"t-title"}>
                        <h3>排行榜 <span>></span></h3>
                        <h5>更新时间：2019-1-1</h5>
                    </div>
                    <div className={"t-img"}>
                        <img src={require("../../../assets/img/adv.jpg")}/>
                        <i className={"iconfont"}>&#xe656;</i>
                    </div>
                </div>
                <div className={"allMvList"}>
                    <ul>
                        {
                            allMv.map((v,i)=>{
                                return(
                                    <li key={i} >
                                        <span><i className={"iconfont"}>&#xe656;</i>{v.playCount}</span>
                                        <img src={v.cover} alt=""/>
                                        <h5>{v.briefDesc?v.briefDesc:v.artistName}</h5>
                                        <p>{v.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
     componentDidMount(){
         this.props.getAllMv();
     }
}
function mapStateToProps(state) {
    return {
        allMv:state.mv.allMv
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mv, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MvTop)