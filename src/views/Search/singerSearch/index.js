import React,{Component} from "react";
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import axios from "axios"
import getSingerList from "../../../store/actionCreator/singer";
import "../../../assets/style/search/singerSearch.css";
import "../../../assets/style/font2/iconfont.css"
class SingerSearch extends Component{
    constructor(props){
        super(props);
        this.state={
            region:"000",
            class:"0",
            singerList:[]
        }
    }
    render(){
        return(
            <>
                <h2> <i className={"iconfont"} onClick={()=>{
                    this.props.history.push({
                        pathname:"/search"
                    })
                }}>&#xe666;</i>歌手分类</h2>
                <div className={"allSinger"}>
                    全部歌手
                </div>
                <div className={"singerClass"}>
                    <div className={"singerLanguage"}>
                        <span style={{color:this.state.region==="100"?"red":""}}
                            onClick={async ()=>{
                                if (this.state.class==="0"){
                                    await this.setState(
                                        {
                                            class:"1"
                                        }
                                    )
                                }
                                await this.setState({
                                    region:"100",
                                    class:this.state.class,
                                    cate:this.state.region+this.state.class
                           });
                           const {data}= await axios.get("/artist/list?cat="+"100"+(this.state.class==="0"?"1":this.state.class));
                            await this.setState({
                                singerList:data.artists
                            })

                        }}>华语</span>
                        <span style={{color:this.state.region==="200"?"red":""}}
                            onClick={async ()=>{
                                await this.setState({
                                    region:"200",
                                    cate:this.state.region+this.state.class
                            });
                                const {data}= await axios.get("/artist/list?cat="+this.state.region+""+this.state.class)
                                await this.setState({
                                    singerList:data.artists
                                })
                        }}>欧美</span>
                        <span style={{color:this.state.region==="600"?"red":""}}
                            onClick={async ()=>{
                                await this.setState({
                                    region:"600",
                                    cate:this.state.region+this.state.class
                            });
                                const {data}= await axios.get("/artist/list?cat="+this.state.region+""+this.state.class)
                                await this.setState({
                                    singerList:data.artists
                                })
                        }}>日本</span>
                        <span style={{color:this.state.region==="700"?"red":""}}
                            onClick={async ()=>{
                                await this.setState({
                                    region:"700",
                                    cate:this.state.region+this.state.class
                            });
                                const {data}= await axios.get("/artist/list?cat="+this.state.region+""+this.state.class)
                                await this.setState({
                                    singerList:data.artists
                                })
                        }}>韩国</span>
                        <span style={{color:this.state.region==="400"?"red":""}}
                            onClick={async ()=>{
                                await this.setState({
                                    region:"400",
                                    cate:this.state.region+this.state.class
                            });
                                const {data}= await axios.get("/artist/list?cat="+this.state.region+""+this.state.class)
                                await this.setState({
                                    singerList:data.artists
                                })
                        }}>其他</span>
                    </div>
                    <div className={"singerGroup"}>
                        <span style={{color:this.state.class==="1"?"red":""}}
                              onClick={async ()=>{
                                  await this.setState({
                                  class:"1"
                            })
                                  const {data}= await axios.get("/artist/list?cat="+this.state.region+""+this.state.class)
                                  await this.setState({
                                      singerList:data.artists
                                  })


                        }}>男</span>
                        <span style={{color:this.state.class==="2"?"red":""}}
                              onClick={async ()=>{
                                  await this.setState({
                                      class:"2"
                            })

                                  const {data}= await axios.get("/artist/list?cat="+this.state.region+""+this.state.class)

                                  await this.setState({
                                      singerList:data.artists
                                  })
                        }}>女</span>
                        <span style={{color:this.state.class==="3"?"red":""}}
                            onClick={async ()=>{
                                await this.setState({
                                    class:"3"
                            })

                                const {data}= await axios.get("/artist/list?cat="+this.state.region+""+this.state.class)

                                await this.setState({
                                    singerList:data.artists
                                })
                        }}>乐队/组合</span>
                    </div>
                </div>
                <h4 className={"hotSinger"}>热门歌手</h4>
                <ul className={"singerList"}>
                    {
                        (this.state.singerList.length>0?this.state.singerList:this.props.singerList).map((v,i)=>{
                            return (
                                <li key={i} className={"singerList-li"} onClick={async ()=>{
                                    this.props.history.push({
                                        pathname:"/searchDetail/index",
                                        state:{
                                            id:v.id,
                                            imgurl:v.picUrl,
                                            name:v.name
                                        }
                                    })

                                }}>
                                    <img src={v.picUrl} style={{
                                        width:"0.5rem"
                                    }} alt=""/>
                        {v.name}
                        <i className={"iconfont"} style={{color:"#ff0033"}}>&#xe505;</i>
                        <span>+ &nbsp;关注</span>
                        </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
    componentWillMount() {
        this.props.getSingerList();

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
