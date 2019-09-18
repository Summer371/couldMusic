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
        const {searchResult,searchHot,searchDefault} = this.props;
        console.log(searchResult,searchHot,searchDefault);
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
                <input type="text" ref={"keyword"} onKeyUp={()=>{
                    this.props.getSearchResult(this.refs.keyword.value)
                }} placeholder={searchDefault} />
                </div>
                <div className="search-singer">
                    <i className="iconfont">&#xe647;</i>
                </div>
                </header>
                <ul className="search-result" ref="result"style={{display:searchResult.length>1?"block":"none"}}>
                    {
                        searchResult.map((v,i)=>{
                            return (
                                <li key={i} onClick={()=>{
                                    console.log("111");
                                    this.refs.result.style.display="none"
                                    this.props.history.push({
                                        pathname:"/searchList/Complete",
                                        keyword:v.name
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
                            <li key={i} className="song-detail">
                                <span key={i+1}>{i+1}</span>
                                <div key={i+2} className="song-detail-detail">
                                    <h3 key={i+3}>{v.searchWord} <b key={i+4}>{v.score}</b>   <i key={i+6} style={{color:v.iconType===1?"lightred":"lightgreen"}}>{v.iconType===0?"":v.iconType===1?"HOT":"NEW"}</i></h3>
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
    console.log(state);
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