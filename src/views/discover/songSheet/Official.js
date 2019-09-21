import React from "react";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {
    Icon
} from "antd";
import top from "../../../store/actionCreator/top";//
import "../../../assets/style/discover/songSheet.css";
class Official extends React.Component{
    render(){
        const {allPlayList}=this.props;
        return(
            <div className={"songSheetList"}>
                <ul>
                    {
                        allPlayList.map((v,i)=>{
                            return(
                                <li key={i} onClick={()=>{
                                    this.props.history.push({
                                        pathname:"/songSheetDetail",
                                        backname:this.props.location.pathname,
                                        state:{
                                            id:v.id
                                        }
                                    })
                                }}>
                                    <span> <Icon type="caret-right"></Icon>{this.$filter.playCount(v.playCount)}</span>
                                    <img src={v.coverImgUrl} alt=""/>
                                    <p>{v.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.getAllPlayList("官方")
    }
}
function mapStateToProps(state) {
    return {
        allPlayList:state.top.allPlayList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(top, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Official)