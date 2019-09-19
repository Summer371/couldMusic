import React,{Component} from "react";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import getSingerList from "../../../store/actionCreator/singer";
class SingerSearch extends Component{

    render(){
        let {singerList}= this.props;
        console.log(singerList);
        return(
            <>
                <h2>歌手分类</h2>
                <div>
                    全部歌手

                </div>
                <ul>
                    {
                        singerList.map((v,i)=>{
                            return (
                                <li key={i}>
                                    <img src={v.picUrl}style={{
                                        width:"0.5rem"
                                    }} alt=""/>
                                    {v.name}
                                    <span>+关注</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
    componentWillMount() {
        this.props.getSingerList()
    }
}
function mapStateToProps(state) {
    return {
        singerList: state.singer.singerList,

    }
}

function mapDispatchToProps(dispatch) {
      return bindActionCreators(getSingerList, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingerSearch)
