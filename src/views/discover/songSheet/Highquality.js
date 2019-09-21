import React from "react";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {Icon} from "antd";
import top from "../../../store/actionCreator/top";//
import "../../../assets/style/discover/songSheet.css";
class Highquality extends React.Component {
    render() {
        const {highquality} = this.props;
        return (
            <div className={"songSheetList"}>
                <ul>
                    {
                        highquality.map((v, i) => {
                            return (
                                <li key={i} onClick={()=>{
                                    this.props.history.push({
                                        pathname:"/songSheetDetail",
                                        backname:this.props.location.pathname,
                                        state:{
                                            id:v.id
                                        }
                                    })
                                }}>
                                    <span><Icon type="caret-right" />{this.$filter.playCount(v.playCount)}</span>
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
    componentDidMount() {
        this.props.getHeighqualityList();
    }
}

function mapStateToProps(state) {
    return {
        highquality: state.top.highquality
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(top, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Highquality)