import React from "react";
import MvTop from "../../../components/mv/mvTop"
import "../../../assets/style/video/mv.css"
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import mv from "../../../store/actionCreator/mv";
class Mv extends React.Component{
    render(){

        console.log(121,this.props.getMv)
        return(
            <div className={"M"}>
                <div className={"m-title"}>
                    <div className={"m-how"}>MV精选</div>
                    <div className={"m-long"}>更多MV</div>
                </div>
                <div className={"m-mv"}>
                    {
                        this.props.getMv.map((v,i)=>{
                            return(
                                <div className={"m-style"} key={v.id}>
                                    <div className={"m-img"}>
                                        <img src={v.picUrl}/>
                                        <div className={"m-icon"}>
                                            <i className={"iconfont"}>&#xe656;</i>
                                            <span>{v.playCount}</span>
                                        </div>
                                    </div>
                                    <div className={"m-sing"}>
                                        <div className={"m-singname"}>{v.name}</div>
                                        <div className={"m-singcome"}>{v.artistName}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <MvTop></MvTop>
            </div>
        )
    }
    componentDidMount(){
        this.props.getAddMvStop()
    }
}
function mapStateToProps(state) {
    console.log(222,state)
    return {
        getMv:state.mv
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mv, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Mv)
