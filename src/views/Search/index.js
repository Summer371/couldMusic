import React,{Component,Fragment} from "react";
import "../../assets/style/lib/reset.css"
import "../../assets/style/search/search.css";
import "../../assets/style/font/iconfont.css"
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import getSearchResult from "../../store/actionCreator/search"
class Search extends Component{

    render(){
        let {searchResult,searchHot,searchDefault} = this.props;
        return(
            <Fragment>
                <header className="search-header">
                <div className="search-back"  onClick={(e)=>{
                    e.stopPropagation();
                    searchResult=[];
                    this.props.history.push({
                        pathname:"/",
                    })
                }}>
                    <i className="iconfont">&#xe501;</i>
                </div>
                <div className="search-song">
                <input type="text" ref={"keyword"} onKeyUp={(e)=>{
                    let key=this.refs.keyword.value || searchDefault;

                    if(e.keyCode===13){
                        localStorage.keyValue=key;
                        this.props.history.push({
                            pathname:'/searchList/Complete',
                        })
                    }
                    this.props.getSearchResult(this.refs.keyword.value)
                }} placeholder={searchDefault} />
                </div>
                <div className="search-singer" onClick={()=>{
                    this.props.history.push({
                        pathname:"/singer",
                    })
                }}>
                    <i className="iconfont">&#xe647;</i>
                </div>
                </header>
                <ul className="search-result" ref="result" style={{display:searchResult.length>1?"block":"none"}}>
                    {
                        searchResult.map((v,i)=>{
                            return (
                                <li key={i} onClick={()=>{
                                    this.refs.result.style.display="none";
                                    localStorage.keyValue=v.name;
                                    searchResult=[];
                                    this.props.history.push({
                                        pathname:"/searchList/Complete/",
                                    })
                                }}>
                                    <i className={"iconfont"}>&#xe668;</i>{v.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="search-history">
                    <div className="search-history-header">
                        <h3>历史记录</h3>
                        <i className="iconfont">&#xe63e;</i>
                    </div>
                    <div className="search-history-tag">
                        <span>野狼disco</span>
                        <span>淌汗霄无名之辈</span>
                        <span>烟雨行舟</span>
                        <span>纪念</span>
                    </div>
                </div>
                <ul className="song-list">
                    <h3>热搜榜</h3>
                    {searchHot.map((v,i)=> {
                        return (
                            <li key={i} className="song-detail" onClick={()=>{

                            }}>
                                <span key={i+1}>{i+1}</span>
                                <div key={i+2} className="song-detail-detail">
                                    <h3 key={i+3}>{v.searchWord}    <i key={i+6} style={{color:v.iconType===1?"lightred":"lightgreen"}}>{v.iconType===0?"":v.iconType===1?"HOT":"NEW"}</i><b key={i+4}>{v.score}</b></h3>
                                    <p key={i+5}>{v.content}</p>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
        </Fragment>
    )
    }
    componentWillMount(){
        this.props.getSearchDefault();
        this.props.getSearchResult();
        this.props.getSearchHot();
    }
}
function mapStateToProps(state) {
    return {
        searchResult: state.search.searchResult,
        searchHot:state.search.searchHot,
        searchDefault:state.search.searchDefault
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(getSearchResult, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)