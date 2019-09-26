import React from "react"
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import mv from "../../../store/actionCreator/mv";

class VedioList extends React.Component {
    render() {

        const {vedioList}=this.props;
        return (<>
            {
                vedioList.map((v,i)=>{
                    return(
                        <div className={"v-li"} key={i}>
                            <div className={"v-img"}>
                                <img src={v.data.coverUrl}/>
                                <div className={"v-now"}>{v.data.title}</div>
                                <div className={"v-action"}><i className={"iconfont"}>&#xe621;</i>{v.data.playTime}</div>
                            </div>
                            <div className={"v-name"}>
                                <div className={"v-singing"}>{v.data.title}</div>
                                <img src={require("../../../assets/img/1.jpg")}/>
                            </div>
                            <div className={"v-bottom"}>
                                <img src={require("../../../assets/img/1.jpg")}/>
                                <div className={"v-live"}>{v.data.creator.nickname}</div>
                                <div className={"v-good"}>
                                    <i className={"iconfont"}>&#xe601;</i>
                                    <span>{v.data.playTime}</span>
                                </div>
                                <div className={"v-comment"}>
                                    <i className={"iconfont"}>&#xe6a5;</i>
                                    <span>{v.data.praisedCount}</span>
                                </div>
                                <i className={"iconfont"}>&#xe6c6;</i>
                            </div>
                        </div>
                    )
                })
            }
              </>
        )
    }
    componentDidMount() {
        let idList=[];
        this.props.vedioId.map((v,i)=>{
            idList.push(v.id)
        });
        let i=Math.floor(Math.random()*idList.length+1);
        this.props.getVideoList(idList[i]);
    }
}

function mapStateToProps(state) {
    return {
        vedioList: state.mv.vedioList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mv, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VedioList)