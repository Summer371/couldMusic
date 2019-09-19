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
    constructor(){
        super();
        this.state={
            keyword:""
        }
    }
    render(){
        const {multimatchSearchResult,searchResult2,searchDefault} = this.props;
        let keyword =localStorage.keyValue ||searchDefault;
        console.log(keyword)
        return(
            <Fragment>
                <header className="search-header">
                    <div className="search-back"  onClick={(e)=>{
                        e.stopPropagation();
                        this.props.history.push({
                            pathname:"/",
                        })
                    }}>
                        <i className="iconfont">&#xe501;</i>
                    </div>
                    <div className="search-song">
                        <input type="text" ref={"keyword"} onKeyUp={()=>{
                            this.props.getSearchResult(this.refs.keyword.value)
                        }} placeholder={keyword} />
                    </div>
                    <div className="search-singer">
                        <i className="iconfont">&#xe63f;</i>
                    </div>
                </header>
                <ul className="search-result" ref="search" style={{display:searchResult2.length>1?"block":"none"}}>
                    {
                        searchResult2.map((v,i)=>{
                            return (
                                <li key={i} onClick={()=>{
                                    this.refs.search.style.display="none"
                                    this.props.history.push({
                                        pathname:"/searchList/",
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
        console.log(this.props);
        this.props.getSearchDefault();
        this.props.getMultimatch(localStorage.keyValue);
    }
}
function mapStateToProps(state) {
    return {
        searchResult2: state.multimatch.searchResult2,
        multimatchSearchResult: state.multimatch.multimatchSearchResult,
        searchDefault:state.multimatch.searchDefault
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mulitmatch,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)