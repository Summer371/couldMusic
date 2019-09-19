import React from "react";
import {
    Icon
} from "antd";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import top from "../../../store/actionCreator/top";//
import "../../../assets/style/discover/songSheet.css";
class Pop extends React.Component{
    render(){
        const {allPlayList}=this.props;
        return(
            <div className={"songSheetList"}>
                <ul>
                    {
                        allPlayList.map((v,i)=>{
                            return(
                                <li key={i}>
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
        this.props.getAllPlayList("流行")
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

export default connect(mapStateToProps, mapDispatchToProps)(Pop)