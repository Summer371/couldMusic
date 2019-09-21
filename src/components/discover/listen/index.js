import React from "react";
import {connect} from "react-redux";
import {
    bindActionCreators
} from "redux";
import top from "../../../store/actionCreator/top";//
class Listen extends React.Component {
    constructor(){
        super();
        this.state={
            num:60
        }
    }
    render() {
        const {listen} = this.props;
        return (
            <div className={"listen"}>
                <h3>听听</h3>
                <ul>
                    {
                        listen.map((v, i) => {
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
                                    <img src={v.coverImgUrl} alt=""/>
                                    <p>{v.name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={()=>{
                        this.setState({
                            num:this.state.num+20
                        })
                        this.props.getAllPlayList("流行",this.state.num)
                }}>加载更多</button>
            </div>
        )
    }
    componentDidMount() {
        this.props.getAllPlayList("流行");
    }
}

function mapStateToProps(state) {
    return {
        listen: state.top.allPlayList//推荐节目
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(top, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Listen)