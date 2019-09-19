import React,{Component,Fragment} from "react";
import "../../../assets/style/lib/reset.css"
import "../../../assets/style/search/search.css";
import "../../../assets/style/font/iconfont.css";
import "../../../assets/style/search/multimatch.css"
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {
    NavLink,
    Route,
    Switch
}from "react-router-dom";
import Comprehensive from "../../../components/search/comprehensive";
import Singer from "../../../components/search/singer";
import Video from "../../../components/search/video";
import Song from "../../../components/search/song"
import mulitmatch from "../../../store/actionCreator/mulitmatch";
class SearchList extends Component{
    render(){
        const {multimatchSearchResult,searchResult} = this.props;
        console.log(multimatchSearchResult,this.props);
        return(
            <Fragment>
                <header className="search-header">
                    <div className="search-back"  onClick={(e)=>{
                        e.stopPropagation();
                        this.props.history.go(-1)
                    }}>
                        <i className="iconfont">&#xe501;</i>
                    </div>
                    <div className="search-song">
                        <input type="text" ref={"keyward"} onKeyUp={()=>{
                            this.props.getSearchResult(this.refs.keyward.value)
                        }} placeholder={this.props.location.keyword} />
                    </div>
                    <div className="search-singer">
                        <i className="iconfont">&#xe63f;</i>
                    </div>
                </header>
                <ul className="search-result" ref="search" style={{display:searchResult.length>1?"block":"none"}}>
                    {
                        searchResult.map((v,i)=>{
                            return (
                                <li key={i} onClick={()=>{
                                    console.log("111");
                                    this.refs.search.style.display="none"
                                    this.props.history.push({
                                        pathname:"/searchList",
                                        keyword:v.name
                                    })
                                }}>
                                    <i className={"iconfont"}>&#xe668;</i>{v.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={"title"}>
                    <NavLink activeStyle={{color:"red"}} exact to={"/searchList/Complete"}>综合</NavLink>
                    <NavLink activeStyle={{color:"red"}} to={"/searchList/Song"}>单曲</NavLink>
                    <NavLink activeStyle={{color:"red"}} to={"/searchList/Video"}>视频</NavLink>
                    <NavLink activeStyle={{color:"red"}} to={"/searchList/Singer"}>歌手</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path={"/searchList/Complete"}  component={Comprehensive}></Route>
                        <Route path={"/searchList/Singer"}  component={Singer}></Route>
                        <Route path={"/searchList/Song"}  component={Song}></Route>
                        <Route path={"/searchList/Video"} component={Video}></Route>
                    </Switch>
                </div>
            </Fragment>
        )
    }
    componentWillMount(){
        console.log(this.props.location.keyword);
        this.props.getMultimatch("海阔天空");
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        searchResult: state.multimatch.searchResult,
        multimatchSearchResult: state.multimatch.multimatchSearchResult,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mulitmatch,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)